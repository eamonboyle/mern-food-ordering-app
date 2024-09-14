import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./layouts/layout";
import HomePage from "./pages/home-page";

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
                        <p>User Profile Page</p>
                    </Layout>
                }
            />
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    );
};

export default AppRoutes;
