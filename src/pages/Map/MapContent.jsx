import { Icon } from "leaflet";
import { Marker, Polygon, Tooltip } from "react-leaflet";
import marker from "../../assets/marker-icon.png";
import markerShadowPng from "../../assets/marker-shadow.png";
import { Coordinates } from "../../helpers/locationCenter";

const myIcon = new Icon({
    iconUrl: marker,
    shadowUrl: markerShadowPng,
    iconSize: [25, 41], // Default size for Leaflet marker
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
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

    if (!arrayOfCoordinates || arrayOfCoordinates.length === 0) {
        return null;
    }

    const coordinates = Coordinates(arrayOfCoordinates);

    return (
        <Polygon
            id={location.__metadata.id}
            key={location.__metadata.id}
            weight={1}
            pathOptions={{
                color: "#fddd00",
                weight: 3,
                fillColor: "#19196e",
                fillOpacity: 1,
            }}
            positions={arrayOfCoordinates}
            eventHandlers={{
                click: () => {
                    setOpenBottom(true);
                    setMapData(location);
                    handleClick(coordinates, true);
                },
            }}
        >
            <Tooltip sticky direction="top">
                {location.Title}
            </Tooltip>
            <Marker position={mapMarker} icon={myIcon}></Marker>
        </Polygon>
    );
};

export default MapContent;
