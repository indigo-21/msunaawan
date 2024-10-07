import { useEffect, useState } from "react";
import {
    MapContainer,
    Marker,
    Polygon,
    SVGOverlay,
    TileLayer,
    useMap,
} from "react-leaflet";
import { Icon } from "leaflet";
import { MSU_COORDS, LOCATIONS } from "./MapCoords";
import MapList from "./MapList";
import marker from "../../assets/marker.png";
import "./MapStyle.css";
import "leaflet/dist/leaflet.css";
import MapPopUp from "./MapPopUp";
import MapSidebarBurgerMenu from "./MapSidebarBurgerMenu";

const myIcon = new Icon({
    iconUrl: marker,
    iconSize: [42, 42],
    iconAnchor: [10, 35],
});

export default function MapCustom() {
    const [mapMarker, setMapMarker] = useState([0, 0]);
    const [mapCenter, setMapCenter] = useState(MSU_COORDS);
    const [openBottom, setOpenBottom] = useState(false);
    const [mapData, setMapData] = useState({});

    const closeDrawerBottom = () => {
        setOpenBottom(false);

        handleClick([mapMarker[0], mapMarker[1]], false);
    };

    const MapClickHandler = ({ data }) => {
        // console.log(data);
        const map = useMap();

        useEffect(() => {
            if (data) {
                map.setView([data[0], data[1]], map.getZoom());
            }
        }, [data, map]);

        return null;
    };

    const handleClick = (data, adjust = false) => {

        if (adjust) {
            setMapCenter([data[0] - 0.001, data[1]]);
        } else {
            setMapCenter([data[0], data[1]]);
        }
        setMapMarker([data[0], data[1]]);
    };

    // console.log(mapData);

    return (
        <div className="flex flex-row">
            <section className="hidden lg:block lg:basis-1/5 bg-white">
                <div className="container my-10">
                    <MapList onClickBuilding={handleClick} />
                </div>
            </section>
            <section className="lg:hidden block absolute z-[99999] pl-10">
                <div className="container my-2">
                    <MapSidebarBurgerMenu onClickBuilding={handleClick} />
                </div>
            </section>
            <section className="basis-full lg:basis-4/5">
                <MapContainer
                    center={mapCenter}
                    zoom={18}
                    minZoom={16}
                    maxZoom={18}
                    scrollWheelZoom={false}
                    maxBounds={[
                        [8.434802869839737, 124.28369871374886],
                        [8.434526937292295, 124.29457775334441],
                        [8.422726537656104, 124.28087574318215],
                        [8.420264286415932, 124.29406148253484],
                    ]}
                >
                    <MapClickHandler data={mapCenter} />
                    <TileLayer
                        attribution="Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community"
                        url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
                    />
                    {LOCATIONS.map((location, index) => {
                        // console.log(location.coords);
                        // console.log("newLat" + latitude);
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
                                        setMapData( location );
                                        handleClick(
                                            [
                                                location.coords[0][0],
                                                location.coords[0][1],
                                            ],
                                            true,
                                        );
                                    },
                                }}
                            >
                                <SVGOverlay
                                    bounds={location.coords}
                                    className="!w-[160px] !h-[160px] -ml-[3.3rem] -mt-[3.3rem] rounded-full hover:border-dashed hover:border-8 hover:border-gray-600 focus:outline-none hover:cursor-pointer hover:animate-pulse"
                                >
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
                                                setMapData( location );
                                                handleClick(
                                                    [
                                                        location.coords[0][0],
                                                        location.coords[0][1],
                                                    ],
                                                    true,
                                                );
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
                                <Marker
                                    position={mapMarker}
                                    icon={myIcon}
                                    eventHandlers={{
                                        click: () => {
                                            console.log(location.title);
                                            // setOpenBottom(true);
                                            // setMapData( location );
                                            // handleClick(
                                            //     [
                                            //         location.coords[0][0],
                                            //         location.coords[0][1],
                                            //     ],
                                            //     true,
                                            // );
                                        },
                                    }}
                                ></Marker>
                            </Polygon>
                        );
                    })}
                </MapContainer>
            </section>

            {Object.keys(mapData).length > 0 && (
                <MapPopUp
                    // key={location}
                    openBottom={openBottom}
                    closeDrawerBottom={closeDrawerBottom}
                    mapData={mapData}
                />
            )}
        </div>
    );
}
