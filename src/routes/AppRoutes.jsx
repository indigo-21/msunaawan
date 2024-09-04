import RootLayout from "../layout/RootLayout";
import Home from "../pages/Home/Home";
import MapCustom from "../pages/Map/MapCustom";
// import MapCustom2 from "../pages/Map/MapCustom-backup-new";

const AppRoutes = [
    {
        path: '/',
        element: <RootLayout />,
        children: [
            {index: true, element: <Home />},
            // {index: true, element: <Home />},
            {path: '/map', element: <MapCustom />},
            {path: '/map2', element: <Home />},
        ]
    }
];

export default AppRoutes;