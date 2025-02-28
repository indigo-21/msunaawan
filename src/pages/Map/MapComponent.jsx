import { MapContainer, TileLayer } from 'react-leaflet';

const MapComponent = () => {
  return (
    <MapContainer center={[14.63924676903792, 121.04372231980823]} zoom={6} style={{ height: "100vh", width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
    </MapContainer>
  );
};

export default MapComponent;
