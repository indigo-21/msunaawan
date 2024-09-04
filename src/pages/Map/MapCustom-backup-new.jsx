import {
    MapContainer,
    Polygon,
    Popup,
    // SVGOverlay,
    TileLayer,
    useMapEvents,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useState } from "react";
import { LOCATIONS } from "./MapCoords.jsx";
import { Typography } from "@material-tailwind/react";

export default function MapCustom2() {
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

    console.log(location);

    return (
        <section className="container mt-10 flex">
            <MapContainer
                center={[0, 0]}
                minZoom={2.5}
                maxZoom={6}
                zoom={3}
                maxBounds={[
                    [-80, -100],
                    [80, 100],
                ]}
                scrollWheelZoom={false}
            >
                <LocationFinderDummy />
                <TileLayer
                    attribution="test"
                    noWrap={true}
                    url={"../../MapTile2/{z}/{x}/{y}.png"}
                ></TileLayer>
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
                            <Popup >
                                <div className="text-center">
                                    <img src={locations.image} alt="" />
                                    <Typography variant="h5" className="mt-5">
                                        <a href="https://indigo21uk.sharepoint.com/sites/MSU-test9/SitePages/College-Marine-and-Allied-Sciences.aspx" target="_blank">
                                            College Marine and Allied Sciences
                                        </a>
                                    </Typography>
                                </div>
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
