// import RootLayout from "../layout/RootLayout";
// import Home from "../pages/Home/Home";
// import MapCustom from "../pages/Map/MapCustom";
import MsuGensanMap from "../pages/Map/MSUGensanMap/MsuGensanMap";
import MsunMap from "../pages/MSUNaawanMap/MsunMap";
// import MapCustom2 from "../pages/Map/MapCustom-backup-new";

const AppRoutes = [
    {
        path: "/",
        element: <MsunMap />,
    },
    { path: "/msunaawan", element: <MsunMap /> },
    { path: "/msugensan", element: <MsuGensanMap /> },
];

export default AppRoutes;
