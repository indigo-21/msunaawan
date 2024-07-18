import RootLayout from "../layout/RootLayout";
import Home from "../pages/Home";

const AppRoutes = [
    {
        path: '/',
        element: <RootLayout />,
        children: [
            {index: true, element: <Home />},
        ]
    }
];

export default AppRoutes;