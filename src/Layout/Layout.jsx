import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";
import Navbar2 from "../Shared/Navbar/Navbar2";
import UAE_GuidanceBanner from "../Components/UAE/UAE_GuidanceBanner";
import UAE_FaqSVG from "../Components/UAE/UAE_Faq/UAE_FaqSVG";


const Layout = () => {
    return (
        <div>
            <Navbar2/>
            
            
            <Outlet/>
            
            <Footer/>
        </div>
    );
};

export default Layout;