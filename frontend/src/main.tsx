import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./globals.css";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./app-routes";
import Auth0ProviderWithNavigate from "./auth/auth0-provider-with-navigate";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <Router>
            <Auth0ProviderWithNavigate>
                <AppRoutes />
            </Auth0ProviderWithNavigate>
        </Router>
    </StrictMode>
);
