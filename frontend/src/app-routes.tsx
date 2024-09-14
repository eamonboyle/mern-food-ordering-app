import { Navigate, Route, Routes } from "react-router-dom";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<p>Home Page</p>} />
            <Route path="/user-profile" element={<p>User Profile Page</p>} />
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    );
};

export default AppRoutes;
