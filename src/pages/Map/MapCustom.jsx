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
import { Icon, LatLngBounds } from "leaflet";
import { MSU_COORDS, LOCATIONS } from "./MapCoords";
import MapList from "./MapList";
import marker from "../../assets/marker.png";
import "./MapStyle.css";
import "leaflet/dist/leaflet.css";
import MapPopUp from "./MapPopUp";

const myIcon = new Icon({
    iconUrl: marker,
    iconSize: [42, 42],
});

export default function MapCustom() {
    const bounds = new LatLngBounds([8.4247, 124.28599], [8.43197, 124.29189]);
    const [mapMarker, setMapMarker] = useState([0, 0]);
    // const [isLoading, setIsLoading] = useState(true);

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
        setMapMarker([data[0], data[1]]);
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
                        // opacity={0.2}
                    />
                    {/* <ImageOverlay
                        url="../../images/msunaawan.png"
                        bounds={bounds}
                        opacity={1}
                        zIndex={10}
                    /> */}
                    {LOCATIONS.map((locations, index) => {
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
                                <Marker
                                    position={mapMarker}
                                    icon={myIcon}
                                ></Marker>
                                <Popup>
                                    <MapPopUp locations={locations} />
                                </Popup>
                            </Polygon>
                        );
                    })}
                </MapContainer>
            </section>
            {/* </>
            ) : (
                <div className="flex justify-center items-center w-screen h-screen">
                    <div className="rounded-full h-20 w-20 bg-black animate-ping"></div>
                </div>
            )} */}
        </div>
    );
}
