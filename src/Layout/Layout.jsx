import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import Navbar2 from "../Shared/Navbar/Navbar2";
import Chats from "../Components/Chats/Chats";


const Layout = () => {
    return (
        <div className="font-poppins relative min-h-screen">
            <Navbar2/>   
            <Outlet/>
            <div className=''>
                <div className=''>
                    <Chats />
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Layout;