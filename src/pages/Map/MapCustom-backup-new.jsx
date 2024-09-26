import { useEffect, useRef, useState } from "react";
import {
    ImageOverlay,
    MapContainer,
    Marker,
    Polygon,
    Popup,
    SVGOverlay,
    TileLayer,
    Tooltip,
    useMap,
    useMapEvents,
} from "react-leaflet";
import { Icon, LatLng, LatLngBounds } from "leaflet";
import { MSU_COORDS, LOCATIONS } from "./MapCoords";
import MapList from "./MapList";
import marker from "../../assets/marker.png";
import "./MapStyle.css";
import "leaflet/dist/leaflet.css";
import MapPopUp from "./MapPopUp";
import { MapPinIcon } from "@heroicons/react/16/solid";

const myIcon = new Icon({
    iconUrl: marker,
    iconSize: [42, 42],
    iconAnchor: [10, 35],
});

export default function MapCustom() {
    const bounds = new LatLngBounds([8.4247, 124.28599], [8.43197, 124.29189]);
    const [mapMarker, setMapMarker] = useState([0, 0]);
    const [mapCenter, setMapCenter] = useState(MSU_COORDS);
    // const [isLoading, setIsLoading] = useState(true);
    const [openBottom, setOpenBottom] = useState(false);
    const [mapData, setMapData] = useState({});

    const closeDrawerBottom = () => setOpenBottom(false);

    const [location, setLocation] = useState([]);
    const LocationFinderDummy = () => {
        useMapEvents({
            click(e) {
                const latLng = e.latlng;
                // console.log(latLng.lat);
                setLocation([...location, [latLng.lat, latLng.lng]]);
            },
        });
        return null;
    };

    const MapClickHandler = ({ data }) => {
        const map = useMap();

        useEffect(() => {
            if (data) {
                // Set the map center to the clicked location
                map.setView([data[0], data[1]], map.getZoom());
            }
        }, [data, map]);

        return null;
    };

    // console.log(location);

    const handleClick = (data) => {
        // const coordinates = [data[0], data[1]];
        // content = (<Marker position={[8.426505559037478,124.28742885589601]}/>);
        setMapMarker([data[0], data[1]]);
        setMapCenter([data[0], data[1]]);
    };

    // useEffect(() => {
    //     // Simulating data fetch or other asynchronous operation
    //     setTimeout(() => {
    //         setIsLoading(false); // Set loading to false once the data or content is ready
    //     }, 1000); // Simulate a 2-second loading time
    // }, []);

    return (
        <div className="flex flex-row">
            {/* {!isLoading ? (
                <> */}
            <section className="basis-1/5 bg-white">
                <div className="container my-10">
                    <MapList onClickBuilding={handleClick} />
                </div>
            </section>
            <section className=" basis-4/5">
                <MapContainer
                    center={mapCenter}
                    zoom={18}
                    minZoom={16}
                    maxZoom={18}
                    scrollWheelZoom={false}
                    maxBounds={[
                        [8.438145883163832, 124.28256145709999],
                        [8.439196538505678, 124.29604760449396],
                        [8.423393955877993, 124.29584375659987],
                        [8.424465877458353, 124.28202501527653],
                    ]}
                >
                    <MapClickHandler data={mapCenter} />
                    <LocationFinderDummy />
                    <TileLayer
                        attribution="Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community"
                        url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
                        // opacity={0.2}
                    />
                    {/* <ImageOverlay
                        url="../../images/msunaawan.png"
                        bounds={bounds}
                        opacity={1}
                        zIndex={10}
                    /> */}
                    {LOCATIONS.map((location, index) => {
                        // console.log(location.getCenter());

                        return (
                            <Polygon
                                id={index}
                                key={index}
                                weight={2}
                                pathOptions={location.colorIdentifier}
                                className="!bg-black"
                                positions={location.coords}
                                eventHandlers={{
                                    click: () => {
                                        setOpenBottom(true);
                                        setMapData({ location });
                                        handleClick([
                                            location.coords[0][0],
                                            location.coords[0][1],
                                        ]);
                                    },
                                }}
                            >
                                <SVGOverlay
                                    bounds={location.coords}
                                    className="!w-[160px] !h-[160px] -ml-[3.3rem] -mt-[3.3rem] rounded-full hover:border-dashed hover:border-8 hover:border-gray-600 focus:outline-none hover:cursor-pointer hover:animate-pulse"
                                >
                                    {/* <rect
                                        x="0"
                                        y="0"
                                        width="100%"
                                        height="100%"
                                        fill="blue"
                                        opacity={0.2}
                                    /> */}
                                    <svg
                                        style={{ pointerEvents: "all" }}
                                        className="!bg-black"
                                    >
                                        <text
                                            x="50%"
                                            y="50%"
                                            textAnchor="middle"
                                            alignmentBaseline="middle"
                                            stroke="black"
                                            fontSize={13}
                                            strokeWidth={0}
                                            onClick={() => {
                                                setOpenBottom(true);
                                                setMapData({ location });
                                                handleClick([
                                                    location.coords[0][0],
                                                    location.coords[0][1],
                                                ]);
                                            }}
                                        >
                                            {location.title
                                                .split(" ")
                                                .map((word, index) => (
                                                    <tspan
                                                        key={index}
                                                        x="50%"
                                                        dy={
                                                            index === 0
                                                                ? "0"
                                                                : "1.2em"
                                                        }
                                                    >
                                                        {word}
                                                    </tspan>
                                                ))}
                                        </text>
                                    </svg>
                                </SVGOverlay>
                                {/* <Tooltip
                                    direction="bottom"
                                    opacity={1}
                                    // permanent={true}
                                >
                                    <div className="flex items-center justify-center">
                                        <MapPinIcon width={30} height={30} />
                                        <h4 className="ml-1 text-center">
                                            {location.title}
                                        </h4>
                                    </div>
                                </Tooltip> */}
                                <Marker
                                    position={mapMarker}
                                    icon={myIcon}
                                    className="pb-20"
                                    eventHandlers={{
                                        click: () => {
                                            setOpenBottom(true);
                                            setMapData({ location });
                                            getBoundsCenter([
                                                location.coords[0][0],
                                                location.coords[0][1],
                                            ]);
                                        },
                                    }}
                                ></Marker>
                                {/* <Popup>
                                    <MapPopUp locations={location} />
                                </Popup> */}
                            </Polygon>
                        );
                    })}
                </MapContainer>
            </section>

            {Object.keys(mapData).length > 0 && (
                <MapPopUp
                    key={location}
                    openBottom={openBottom}
                    closeDrawerBottom={closeDrawerBottom}
                    mapData={mapData}
                />
            )}
            {/* </>
            ) : (
                <div className="flex justify-center items-center w-screen h-screen">
                    <div className="rounded-full h-20 w-20 bg-black animate-ping"></div>
                </div>
            )} */}
        </div>
    );
}
