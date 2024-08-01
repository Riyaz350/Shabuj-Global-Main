import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";
import Australia_Banner from "../Components/Australia_Banner/Australia_Banner";















const Layout = () => {
    return (
        <div>
            <Navbar/>
            
            
            <Outlet/>
            
            <Footer/>
            <Australia_Banner></Australia_Banner>
        </div>
    );
};

export default Layout;