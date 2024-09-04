import { useState } from "react";
import {
    ImageOverlay,
    MapContainer,
    Marker,
    Polygon,
    Popup,
    TileLayer,
    Tooltip,
    useMapEvents,
} from "react-leaflet";
import {
    ArrowTopRightOnSquareIcon,
    BuildingOffice2Icon,
    CalendarDaysIcon,
    IdentificationIcon,
    MapPinIcon,
} from "@heroicons/react/16/solid";
import { Button, Typography } from "@material-tailwind/react";
import { LatLngBounds } from "leaflet";
import { MSU_COORDS, LOCATIONS } from "./MapCoords";
import MapList from "./MapList";
import "./MapStyle.css";
import "leaflet/dist/leaflet.css";

export default function MapCustom() {
    const bounds = new LatLngBounds([8.4247, 124.28599], [8.43197, 124.29189]);
    const [mapMarker, setMapMarker] = useState([0, 0]);

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

    // console.log(location);


    const handleClick = (data) => {
        // const coordinates = [data[0], data[1]];
        // content = (<Marker position={[8.426505559037478,124.28742885589601]}/>);
        setMapMarker([data[0],data[1]]);
    };

    // console.log(mapMarker);

    return (
        <div className="flex flex-row">
            <section className="basis-1/5">
                <div className="container my-10">
                    <MapList onClickBuilding={handleClick}/>
                </div>
            </section>
            <section className=" basis-4/5">
                <MapContainer
                    center={MSU_COORDS}
                    zoom={17.4}
                    minZoom={17}
                    maxZoom={21}
                    scrollWheelZoom={false}
                    maxBounds={[
                        [8.438145883163832, 124.28256145709999],
                        [8.439196538505678, 124.29604760449396],
                        [8.423393955877993, 124.29584375659987],
                        [8.424465877458353, 124.28202501527653],
                    ]}
                >
                    <LocationFinderDummy />
                    <TileLayer
                        attribution="Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community"
                        url="https://www.google.cn/maps/vt?lyrs=y@189&gl=cn&x={x}&y={y}&z={z}"
                        opacity={0.2}
                    />
                    <ImageOverlay
                        url="../../images/msunaawan.png"
                        bounds={bounds}
                        opacity={1}
                        zIndex={10}
                    />
                    {LOCATIONS.map((locations, index) => {
                        const locationCoords = `https://www.google.com/maps/dir/?api=1&destination=${locations.coords[0][0]},${locations.coords[0][1]}`;
                        return (
                            <Polygon
                                id={index}
                                key={index}
                                weight={2}
                                pathOptions={locations.colorIdentifier}
                                positions={locations.coords}
                            >
                                <Tooltip direction="bottom" opacity={1}>
                                    {locations.title}
                                </Tooltip>
                                <Marker position={mapMarker}/>
                                <Popup>
                                    <div className="grid grid-cols-2 gap-4">
                                        <section>
                                            <section className="text-center mt-3">
                                                <img
                                                    src={locations.image}
                                                    alt={locations.title}
                                                />
                                                <Typography
                                                    variant="h4"
                                                    className="mt-5 mb-3"
                                                >
                                                    {locations.title}
                                                </Typography>
                                                <div className="grid grid-cols-2 gap-4">
                                                    <a
                                                        href={locationCoords}
                                                        target="_blank"
                                                    >
                                                        <Button className="flex gap-2 justify-between w-full">
                                                            <MapPinIcon className="h-4 w-4" />
                                                            Navigate
                                                        </Button>
                                                    </a>
                                                    <a
                                                        href="https://indigo21uk.sharepoint.com/sites/MSU-test9/SitePages/College-Marine-and-Allied-Sciences.aspx"
                                                        target="_blank"
                                                    >
                                                        <Button className="flex gap-2 justify-between w-full">
                                                            <ArrowTopRightOnSquareIcon className="h-4 w-4" />
                                                            View Page
                                                        </Button>
                                                    </a>
                                                </div>
                                            </section>

                                            <Typography variant="small">
                                                {locations.description.length >
                                                150
                                                    ? `${locations.description.substring(
                                                          0,
                                                          150,
                                                      )} ...`
                                                    : locations.description}
                                            </Typography>
                                            <Typography variant="small">
                                                <a
                                                    href="https://indigo21uk.sharepoint.com/sites/MSU-test9/SitePages/College-Marine-and-Allied-Sciences.aspx"
                                                    target="_blank"
                                                >
                                                    <label className="flex gap-1 w-auto cursor-pointer">
                                                        Read More
                                                        <ArrowTopRightOnSquareIcon className="h-4 w-4" />
                                                    </label>
                                                </a>
                                            </Typography>
                                        </section>

                                        <section>
                                            <section className="border-4 my-3">
                                                <div className="flex">
                                                    <Typography
                                                        variant="h5"
                                                        className="w-full mt-5 flex gap-2 px-3"
                                                    >
                                                        <CalendarDaysIcon className="w-6 h-6" />
                                                        Event
                                                    </Typography>
                                                    <a
                                                        href="https://indigo21uk.sharepoint.com/sites/MSU-test9/_layouts/15/Events.aspx?ListGuid=b2269384-ec7f-4959-be38-b06663a01115&AudienceTarget=false"
                                                        target="_blank"
                                                    >
                                                        <ArrowTopRightOnSquareIcon className="h-5 w-5 m-2" />
                                                    </a>
                                                </div>
                                                <div className="grid px-3">
                                                    <Typography
                                                        variant="h6"
                                                        className="mt-1 mb-3"
                                                    >
                                                        LaughFest Carnival
                                                    </Typography>
                                                    <div className="flex gap-3">
                                                        <Typography
                                                            variant="small"
                                                            className="!-mt-3 mb-3"
                                                        >
                                                            September 25, 2024
                                                        </Typography>
                                                        <Typography
                                                            variant="small"
                                                            className="!-mt-3 mb-3"
                                                        >
                                                            |
                                                        </Typography>
                                                        <Typography
                                                            variant="small"
                                                            className="!-mt-3 mb-3"
                                                        >
                                                            10:00 AM
                                                        </Typography>
                                                    </div>
                                                </div>
                                            </section>

                                            <div className="border-4 my-3">
                                                <div className="flex">
                                                    <Typography
                                                        variant="h5"
                                                        className="w-full mt-5 flex gap-2 px-3"
                                                    >
                                                        <IdentificationIcon className="w-6 h-6" />
                                                        Contact Information
                                                    </Typography>
                                                </div>
                                                <div className="grid px-3">
                                                    <Typography
                                                        variant="h6"
                                                        className="mt-1 mb-3"
                                                    >
                                                        Contact Number:
                                                    </Typography>
                                                    <Typography
                                                        variant="small"
                                                        className="!-mt-3 mb-3"
                                                    >
                                                        +639656700743
                                                    </Typography>
                                                </div>

                                                <div className="grid px-3 !-mt-4">
                                                    <Typography
                                                        variant="h6"
                                                        className="mt-1 mb-3"
                                                    >
                                                        Email:
                                                    </Typography>
                                                    <Typography
                                                        variant="small"
                                                        className="!-mt-3 mb-3"
                                                    >
                                                        extension.division@msunaawan.edu.ph
                                                    </Typography>
                                                </div>
                                            </div>

                                            <div className="border-4 my-3">
                                                <div className="flex">
                                                    <Typography
                                                        variant="h5"
                                                        className="w-full mt-5 flex gap-2 px-3"
                                                    >
                                                        <BuildingOffice2Icon className="w-6 h-6" />
                                                        Status
                                                    </Typography>
                                                </div>
                                                <div className="grid px-3">
                                                    <Typography
                                                        variant="h6"
                                                        className="mt-1 mb-3"
                                                    >
                                                        No Changes
                                                    </Typography>
                                                </div>
                                            </div>
                                        </section>
                                    </div>
                                </Popup>
                            </Polygon>
                        );
                    })}
                </MapContainer>
            </section>
        </div>
    );
}
