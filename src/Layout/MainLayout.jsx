import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar";

const MainLayout = () => {
    return (
        <div>
            <div className="">
                <Navbar></Navbar>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default MainLayout;