import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import Navbar2 from "../Shared/Navbar/Navbar2";
<<<<<<< HEAD
=======








>>>>>>> ec7bfc1dba66689aa07143a882b899da861cd951

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