import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";

const router = createBrowserRouter(AppRoutes);

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
