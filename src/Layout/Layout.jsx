import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import Navbar2 from "../Shared/Navbar/Navbar2";
import ChatBot from "../Components/chatbot/ChatBot";


const Layout = () => {
    return (
        <div className="font-poppins relative min-h-screen">
            <Navbar2/>   
            <Outlet/>
            <div className=''>
                <div className='z-50 fixed bottom-0 right-0 w-full'>
                    <ChatBot />
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Layout;