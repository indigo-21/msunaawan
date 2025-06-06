import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";


import { ThemeProvider } from "@material-tailwind/react";
import CustomTheme from "./CustomTheme.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <ThemeProvider value={CustomTheme}>
            <App />
        </ThemeProvider>
    </React.StrictMode>
);
