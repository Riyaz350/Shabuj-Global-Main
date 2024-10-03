import { useState } from 'react';
import ChatBot from './chatbot/ChatBot';
import WhatsappChat from './WhatsApp/WhatsApp';
import { IoChatboxOutline } from "react-icons/io5";

const Chats = () => {
    const [chatHover, setChatHover] = useState(false)
    const [showChat, setShowChat] = useState(false);
    return (
        <div className={`cursor-pointer  fixed -bottom-40 -right-40 z-50 ${chatHover? 'w-[350px] h-[350px] rounded-full    ':'w-[250px] h-[250px]'} rounded-full' `} onMouseEnter={()=>setChatHover(!chatHover)} onMouseLeave={()=>setChatHover(false)}>
            <div style={{background:'linear-gradient(264deg, rgba(38,140,255,0.6026785714285714) 20%, rgba(253,106,255,0.6138830532212884) 100%)'}} className={`fixed -bottom-40 -right-40 z-10 ${chatHover? 'w-[350px] h-[350px] rounded-full  transition-all duration-200   ':'w-[0px] h-[0px]'} rounded-full'`}>

            </div>
            <div className={`${showChat? 'hidden': 'flex'} text-xl w-12 h-12 text-center fixed bottom-10 right-10 z-50 items-center text-white border-2 border-white rounded-full  p-3 bg-black  `}>
                <IoChatboxOutline />
            </div>
            <ChatBot chatHover={chatHover} showChat={showChat} setShowChat={setShowChat}/>
            <WhatsappChat chatHover={chatHover}/>
        </div>
    );
};

export default Chats;