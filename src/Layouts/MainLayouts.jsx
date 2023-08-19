import { Outlet } from "react-router-dom";
import Header from "../pages/SharedPages/Header/Header";
import Footer from "../pages/SharedPages/Footer/Footer";


const MainLayouts = () => {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};

export default MainLayouts;