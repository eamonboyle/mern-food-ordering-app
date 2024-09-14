import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./globals.css";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./app-routes";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <Router>
            <AppRoutes />
        </Router>
    </StrictMode>
);
