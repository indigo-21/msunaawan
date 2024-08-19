import {
    MapContainer,
    Marker,
    Polygon,
    Popup,
    // SVGOverlay,
    TileLayer,
} from "react-leaflet";
import { Typography } from "@material-tailwind/react";
import { MSU_COORDS, LOCATIONS } from "./MapCoords";
import "leaflet/dist/leaflet.css";

export default function MapCustom() {
    return (
        <section className="container mt-10">
            <MapContainer center={MSU_COORDS} zoom={18} scrollWheelZoom={true}>
                {/* <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                /> */}
                <TileLayer
                    attribution="Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community"
                    url="https://www.google.cn/maps/vt?lyrs=y@189&gl=cn&x={x}&y={y}&z={z}"
                />
                <Marker position={MSU_COORDS}>
                    <Popup>Mindanao State University - Naawan</Popup>
                </Marker>
                {LOCATIONS.map((locations, index) => {
                    return (
                        <Polygon
                            id={index}
                            key={index}
                            weight={2}
                            pathOptions={locations.colorIdentifier}
                            positions={locations.coords}
                        >
                            {/* <SVGOverlay bounds={locations.coords}>
                                <text x="40%" y="40%" stroke="white" className="text-[10px] font-light">
                                    text
                                </text>
                            </SVGOverlay> */}
                            <Popup>
                                <img src={locations.image} alt="" />
                                <Typography variant="h5" className="mt-5">
                                    {locations.title}
                                </Typography>
                                <Typography variant="small">
                                    {locations.description}
                                </Typography>
                            </Popup>
                        </Polygon>
                    );
                })}
            </MapContainer>
        </section>
    );
}
