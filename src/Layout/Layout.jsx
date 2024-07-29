import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";
import Germany_Banner from "../Components/Germany_Banner/Germany_Banner";
import Germany_Purpose from "../Components/Germany_Purpose/Germany_Purpose";
import Germany_StudyInGermany from "../Components/Germany_StudyInGermany/Germany_StudyInGermany";















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