import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";
import Navbar2 from "../Shared/Navbar/Navbar2";
import Privacy from "../Components/Privacy/Privacy";








const Layout = () => {
    return (
        <div className="font-poppins">
            <Navbar2/>
            
            
            <Outlet/>
            
            <Footer/>
        </div>
    );
};

export default Layout;