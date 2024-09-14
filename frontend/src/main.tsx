import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./globals.css";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./app-routes";
import Auth0ProviderWithNavigate from "./auth/auth0-provider-with-navigate";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
        },
    },
});

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <Router>
            <QueryClientProvider client={queryClient}>
                <Auth0ProviderWithNavigate>
                    <AppRoutes />
                </Auth0ProviderWithNavigate>
            </QueryClientProvider>
        </Router>
    </StrictMode>
);
