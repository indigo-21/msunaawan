import { Icon } from "leaflet";
import { Marker, Polygon, SVGOverlay, Tooltip } from "react-leaflet";
import marker from "../../assets/marker.png";

const myIcon = new Icon({
    iconUrl: marker,
    iconSize: [42, 42],
    iconAnchor: [10, 35],
});

const MapContent = ({
    setMapData,
    location,
    mapMarker,
    setOpenBottom,
    handleClick,
}) => {
    // console.log(mapMarker);

    const arrayOfCoordinates =
        location.Coordinates &&
        location.Coordinates.split("\n").map((item) =>
            item.split(",").map((coord) => coord.trim()),
        );

    // Ensure coordinates are valid before rendering Polygon
    if (!arrayOfCoordinates || arrayOfCoordinates.length === 0) {
        // console.error("Invalid coordinates for location:", location);
        return null;
    }

    return (
        // <SVGOverlay
        //     bounds={arrayOfCoordinates}
        //     className="rounded-full hover:border-dashed hover:border-8 hover:border-gray-600 focus:outline-none hover:cursor-pointer hover:animate-pulse"
        // >
            <Polygon
                id={location.__metadata.id}
                key={location.__metadata.id}
                weight={1}
                pathOptions={{
                    color: "transparent",
                    fillColor: "#999",
                    fillOpacity: 1,
                }}
                positions={arrayOfCoordinates}
                eventHandlers={{
                    click: () => {
                        setOpenBottom(true);
                        setMapData(location);
                        handleClick(
                            [
                                arrayOfCoordinates[0][0],
                                arrayOfCoordinates[0][1],
                            ],
                            true,
                        );
                    },
                }}
            >
                <Tooltip sticky direction="top" >{location.Title}</Tooltip>
                {/* <svg style={{ pointerEvents: "all" }} className="!bg-black">
                    <text
                        x="50%"
                        y="50%"
                        textAnchor="middle"
                        alignmentBaseline="middle"
                        stroke="black"
                        fontSize={9}
                        strokeWidth={0}
                        onClick={() => {
                            setOpenBottom(true);
                            setMapData(location);
                            handleClick(
                                [
                                    arrayOfCoordinates[0][0],
                                    arrayOfCoordinates[0][1],
                                ],
                                true,
                            );
                        }}
                    >
                        {location.Title}
                    </text>
                </svg> */}
                <Marker position={mapMarker}></Marker>
            </Polygon>
        // </SVGOverlay>
    );
};

export default MapContent;