import RootLayout from "../layout/RootLayout";
import Home from "../pages/Home/Home";
import MapCustom from "../pages/Map/MapCustom";

const AppRoutes = [
    {
        path: '/',
        element: <RootLayout />,
        children: [
            {index: true, element: <Home />},
            {path: '/map', element: <MapCustom />},
        ]
    }
];

export default AppRoutes;