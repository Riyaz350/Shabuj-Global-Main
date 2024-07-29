import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";
import Germany_Banner from "../Components/Germany_Banner/Germany_Banner";















const Layout = () => {
    return (
        <div>
            <Navbar/>
            
            
            <Outlet/>
            
            <Footer/>
            <Germany_Banner></Germany_Banner>
        </div>
    );
};

export default Layout;