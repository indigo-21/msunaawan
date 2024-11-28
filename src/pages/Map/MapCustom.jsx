import { useEffect, useState } from "react";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import MapList from "./MapList";
import "./MapStyle.css";
import "leaflet/dist/leaflet.css";
import MapPopUp from "./MapPopUp";
import MapSidebarBurgerMenu from "./MapSidebarBurgerMenu";
import MapContent from "./MapContent";
import { useQuery } from "@tanstack/react-query";
import { fetchMapImage, fetchMapLists } from "../../util/http";
import { Spinner, Typography } from "@material-tailwind/react";

export default function MapCustom({
    mapUri,
    center,
    naawanImagePath,
    bounds,
    colorScheme,
    zoom
}) {
    const [mapMarker, setMapMarker] = useState([0, 0]);
    const [mapCenter, setMapCenter] = useState(center);
    const [openBottom, setOpenBottom] = useState(false);
    const [mapData, setMapData] = useState({});
    const [shouldCenterMap, setShouldCenterMap] = useState(false);

    const { data: mapLists, isLoading } = useQuery({
        queryKey: ["mapData"],
        queryFn: () => fetchMapLists(mapUri),
        // refetchInterval: 5000,
    });

    const { data: buildingImage, isLoading: isImageLoading } = useQuery({
        queryKey: ["imageData", mapData.Pictures?.Description],
        queryFn: () => {
            if (!mapData.Pictures?.Description) {
                throw new Error("No map ID provided");
            }
            return fetchMapImage(mapData.Pictures.Description, naawanImagePath);
        },
        cacheTime: 30000 * 60,
        enabled: !!mapData.Pictures?.Description,
    });

    const closeDrawerBottom = () => {
        setOpenBottom(false);
        handleClick([mapMarker[0], mapMarker[1]], false);
    };

    const MapClickHandler = ({ record }) => {
        const map = useMap();

        useEffect(() => {
            if (record) {
                map.setView([record[0], record[1]], map.getZoom());
                setShouldCenterMap(false);
            }
        }, [record, map]);

        return null;
    };

    const handleClick = (data, adjust = false) => {
        if (adjust) {
            setMapCenter([data[0] - 0.001, data[1]]);
        } else {
            setMapCenter([data[0], data[1]]);
        }
        setMapMarker([data[0], data[1]]);
        setShouldCenterMap(true);

        const selectedData = mapLists.find(
            (location) =>
                location.Coordinates[0] === data[0] &&
                location.Coordinates[1] === data[1],
        );
        if (
            selectedData &&
            JSON.stringify(selectedData) !== JSON.stringify(mapData)
        ) {
            setMapData(selectedData);
        }
    };

    let contentMapList, contentBurgerMenu, mapContent;

    if (isLoading) {
        contentMapList = (
            <div className="flex justify-evenly">
                <Typography variant="lead">Loading Buildings...</Typography>
                <Spinner className="h-12 w-12" />
            </div>
        );
    } else if (mapLists) {
        contentMapList = (
            <MapList
                onClickBuilding={handleClick}
                mapData={mapLists}
                colorScheme={colorScheme}
            />
        );
        contentBurgerMenu = (
            <MapSidebarBurgerMenu
                onClickBuilding={handleClick}
                mapData={mapLists}
                colorScheme={colorScheme}
            />
        );
        mapContent = mapLists.map((location) => (
            <MapContent
                key={location.__metadata.id}
                setMapData={setMapData}
                location={location}
                mapMarker={mapMarker}
                setOpenBottom={setOpenBottom}
                handleClick={handleClick}
                colorScheme={colorScheme}
            />
        ));
    }

    return (
        <div className="flex flex-row">
            <section className="hidden lg:block lg:basis-1/5 bg-white">
                <div className="container my-10 ">{contentMapList}</div>
            </section>
            <section className="lg:hidden block absolute z-[99999] ml-12">
                <div className="container my-2">{contentBurgerMenu}</div>
            </section>
            <section className="basis-full lg:basis-4/5">
                <MapContainer
                    center={mapCenter}
                    zoom={zoom.defaultZoom}
                    minZoom={zoom.minZoom}
                    maxZoom={zoom.maxZoom}
                    scrollWheelZoom={false}
                    maxBounds={bounds}
                >
                    {shouldCenterMap && <MapClickHandler record={mapCenter} />}
                    <TileLayer
                        attribution="Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community"
                        url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
                    />
                    {mapContent}
                </MapContainer>
            </section>

            {Object.keys(mapData).length > 0 && (
                <MapPopUp
                    openBottom={openBottom}
                    closeDrawerBottom={closeDrawerBottom}
                    mapData={mapData}
                    image={buildingImage}
                    isImageLoading={isImageLoading}
                />
            )}
        </div>
    );
}
