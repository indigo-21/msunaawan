// import RootLayout from "../layout/RootLayout";
// import Home from "../pages/Home/Home";
// import MapCustom from "../pages/Map/MapCustom";
import MsuGensanCalendar from "../pages/Calendar/MsuGensanCalendar";
import MsuGensanMap from "../pages/Map/MSUGensanMap/MsuGensanMap";
import MsunMap from "../pages/Map/MSUNaawanMap/MsunMap";
import MsuSuluMap from "../pages/Map/MSUSuluMap/MsuSuluMap";
import MsuTawiMap from "../pages/Map/MSUTawiMap/MSUTawiMap";
// import MapCustom2 from "../pages/Map/MapCustom-backup-new";

const AppRoutes = [
    {
        path: "/",
        element: <MsunMap />,
    },
    { path: "/msunaawan", element: <MsunMap /> },
    { path: "/msugensan", element: <MsuGensanMap /> },
    { path: "/msusulu", element: <MsuSuluMap /> },
    { path: "/msutawi", element: <MsuTawiMap /> },
    { path: "/msugensan-calendar", element: <MsuGensanCalendar /> },
];

export default AppRoutes;
