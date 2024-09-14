import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./layouts/layout";
import HomePage from "./pages/home-page";
import AuthCallbackPage from "./pages/auth-callback-page";
import UserProfilePage from "./pages/user-profile-page";

const AppRoutes = () => {
    return (
        <Routes>
            <Route
                path="/"
                element={
                    <Layout showHero={true}>
                        <HomePage />
                    </Layout>
                }
            />
            <Route
                path="/user-profile"
                element={
                    <Layout>
                        <UserProfilePage />
                    </Layout>
                }
            />
            <Route path="/auth/callback" element={<AuthCallbackPage />} />
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    );
};

export default AppRoutes;
