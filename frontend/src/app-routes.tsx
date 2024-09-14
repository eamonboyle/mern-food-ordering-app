import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./layouts/layout";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<p>Home Page</p>} />
                <Route path="user-profile" element={<p>User Profile Page</p>} />
                <Route path="*" element={<Navigate to="/" />} />
            </Route>
        </Routes>
    );
};

export default AppRoutes;
