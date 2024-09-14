import Header from "@/components/header";
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />

            <div className="container mx-auto flex-1 py-10">
                <Outlet />
            </div>
        </div>
    );
};

export default Layout;
