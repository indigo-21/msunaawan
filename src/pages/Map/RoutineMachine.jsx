import L from "leaflet";
import { createControlComponent } from "@react-leaflet/core";
import "leaflet-routing-machine";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";

const createRoutineMachineLayer = ({start, end}) => {
  console.log(start);
  const instance = L.Routing.control({
    waypoints: [
      L.latLng(start),
      L.latLng(end),
    ],
    lineOptions: {
      styles: [{ color: "#6FA1EC", weight: 4 }],
    },
    // show: true,
    addWaypoints: false,
    routeWhileDragging: true,
    // draggableWaypoints: true,
    // fitSelectedRoutes: true,
    // showAlternatives: true,
  });

  return instance;
};

const RoutingMachine = createControlComponent(createRoutineMachineLayer);

export default RoutingMachine;