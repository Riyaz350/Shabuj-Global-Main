import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";















const Layout = () => {
    return (
        <div>
            <Navbar/>
            
            
            <Outlet/>
            
            <Footer/>
        </div>
    );
};

export default Layout;