// import RootLayout from "../layout/RootLayout";
// import Home from "../pages/Home/Home";
import MapCustom from "../pages/Map/MapCustom";
import MsunMap from "../pages/MSUNaawanMap/MsunMap";
// import MapCustom2 from "../pages/Map/MapCustom-backup-new";

const AppRoutes = [
    {
        path: '/',
        element: <MsunMap />,
        children: [
            {index: true, element: <MapCustom />},
            // {index: true, element: <Home />},
            {path: '/msunaawan', element: <MsunMap />},
            // {path: '/map2', element: <MapCustom />},
        ]
    }
];

export default AppRoutes;