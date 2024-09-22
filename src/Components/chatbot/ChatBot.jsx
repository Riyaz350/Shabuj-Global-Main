import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import { motion } from "framer-motion"
import useChatData from '../../Hooks/useChatData';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import logo from '../../assets/Group.svg'
import { IoChatboxOutline } from "react-icons/io5";
import { v4 as uuidv4 } from 'uuid';
const ChatBot = () => {
    // const [chat, setChat] = useState([])
    const [clientMessage, setClientMessage] = useState("")
    const chatContainerRef = useRef(null);
    const [token, setToken] = useState(null);
    const [chatData, refetch] = useChatData(token)
    const axiosPublic = useAxiosPublic()
    const [showChat, setShowChat] = useState(false)

    const generateToken = () => {
        return uuidv4();
    };




    const handleSubmit = (e) => {
        e.preventDefault();
        if (clientMessage.trim()) {
            setClientMessage("")
            axiosPublic.post('/text_query', { "text": clientMessage, "userId": 'riyaz333' })
                .then(res => {
                    axiosPublic.patch(`/chats/${token}`, { clientResponse: clientMessage, user: "user" })
                        .then(rest => {
                            setClientMessage('')
                            if (rest.status == 200) {
                                refetch()
                                axiosPublic.patch(`/chats/${token}`, { botResponse: res.data, user: "bot", queryText: res.data.queryText ? res.data.queryText : 0 })
                                    .then(res => {
                                        if (res.status == 200) {
                                            refetch()
                                        }
                                    })

                            }
                        })
                })
        }
    };



    useEffect(() => {

        const savedToken = localStorage.getItem('user-token');

        if (savedToken) {
            setToken(savedToken)
            axiosPublic.get(`/chats/${savedToken}`)
                .then(res => {
                    if (!res.data && savedToken) {
                        axiosPublic.post('/chat', { id: savedToken, messages: [{ clientResponse: clientMessage, user: "user" }] })
                            .then(clientRes => {
                                if (clientRes.status == 200) {
                                    refetch()
                                }
                            })
                    }
                })

        } else {
            const newToken = generateToken();
            localStorage.setItem('user-token', newToken);
            setToken(newToken);
            axiosPublic.get(`/chats/${newToken}`)
                .then(res => {
                    if (!res.data && newToken) {
                        axiosPublic.post('/chat', { id: token, messages: [{ clientResponse: clientMessage, user: "user" }] })
                            .then(clientRes => {
                                if (clientRes.status == 200) {
                                    refetch()
                                }
                            })
                    }
                })

        }

        if (showChat) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
    }, [chatData, showChat, token, clientMessage, refetch, axiosPublic,])


    return (
        <div className={`${showChat? 'w-[350px] lg:w-[500px]': 'w-0'} z-50    fixed bottom-0 right-0`}>
            {token ?

                <div className='overflow-hidden '>
                    <div onClick={() => setShowChat(true)} className={`${showChat ? 'hidden' : 'flex flex-col'} cursor-pointer fixed  right-10 bottom-10`}>
                        <p style={{
                            "-webkit-transform": `scaleX(-1)`,
                            "transform": `scaleX(-1)`
                        }} className='text-3xl text-white border-white border-2 rounded-2xl p-1 lg:p-2 bg-black'><IoChatboxOutline /></p>

                    </div>
                    <motion.div initial={{ scale: 0, x: 400, y: 400 }} animate={showChat ? { scale: 1, x: 0, y: 0 } : { scale: 0, x: 400, y: 400 }} transition={{ duration: .2 }} className={` border-2 bg-white border-blue-500 rounded-2xl max-w-xl lg:ml-auto  m-2 lg:mb-5 lg:mr-5 overflow-hidden`}>
                        <div className='flex items-center justify-between   shadow-lg border-b-2 border-blue-500'>
                            <div className='flex items-center text-lg font-semibold  '>
                                <img className='w-[25px] mx-2' src={logo} alt="" />
                                <p >Shabuj Global Education</p>
                            </div>
                            <button onClick={() => setShowChat(false)} className=' py-2 px-5 text-md font-bold text-white bg-red-300 hover:bg-red-500'>X</button>
                        </div>

                        <div ref={chatContainerRef} className='h-[500px] overflow-hidden  space-y-2 mb-2 overflow-y-scroll'>
                            {chatData.messages ? <div>
                                {chatData?.messages?.map((message, index) => (
                                    <div key={index}>
                                        {message?.clientResponse ?
                                            <motion.div initial={{ scale: 0, x: 100, y: 100 }} animate={{ scale: 1, x: 0, y: 0 }} transition={{ duration: 0.5 }}
                                                className={`mr-2 ml-auto bg-blue-500 text-white border-[1px] border-blue-500 w-fit my-2 rounded-lg p-2 `}>
                                                {message.clientResponse}
                                            </motion.div>
                                            :
                                            message?.botResponse?.fulfillmentMessages && message?.botResponse?.action !== 'input.unknown' ?
                                                <motion.div className='max-w-xs pl-1 lg:pl-2 flex items-start' initial={{ scale: 0, x: -300, y: 100 }} animate={{ scale: 1, x: 0, y: 0 }} transition={{ duration: 0.5, delay: .2 }}   >
                                                    <img className='w-[35px] mr-1  rounded-full p-[2px]' src={logo} alt="" />
                                                    {message?.botResponse?.fulfillmentMessages.length == 1 ?
                                                        <div>
                                                            <p className={`${message?.user == "user" ? 'ml-auto bg-blue-500 text-white border-[1px] border-blue-500 w-fit' : 'mr-auto   bg-white text-black border-[1px] border-black'}     rounded-lg p-2 `}>{message?.botResponse?.fulfillmentMessages[0].text.text[0]}</p>

                                                        </div> :
                                                        <div>
                                                            <p className={`mb-2     mr-auto bg-white text-black border-[1px] border-black     rounded-lg p-2 `}>{message?.botResponse?.fulfillmentMessages[0].text.text[0]}</p>
                                                            <div className=' '>
                                                                {parseFloat(message?.queryText) >= 3.00 ?
                                                                    <div className={`flex flex-col  mr-auto bg-white text-black border-[1px] border-black     rounded-lg p-2 `}>
                                                                        {message?.botResponse?.fulfillmentMessages[1].payload.fields.cards.listValue.values.filter(uniVal => uniVal.structValue.fields.rank.stringValue == 'high').map((value, index) => (
                                                                            <Link target='blank' to={value?.structValue.fields.link?.stringValue} className='bg-blue-100 hover:bg-blue-500 hover:text-white p-2 rounded-xl' key={index}>{value.structValue.fields.header.stringValue}<span>  {value.structValue.fields.description ? (value.structValue.fields.description.stringValue) : ''}</span></Link>
                                                                        ))}
                                                                    </div>
                                                                    :
                                                                    <div className={`flex flex-col gap-1 mr-auto bg-white text-black border-[1px] border-black   rounded-lg p-2 `}>
                                                                        {message?.botResponse.fulfillmentMessages[1].payload.fields.cards.listValue.values.filter(uniVal => uniVal.structValue.fields.rank.stringValue == "low").map((value, index) => (
                                                                            <Link target='blank' to={value.structValue.fields.link.stringValue} className='bg-blue-100 hover:bg-blue-500 hover:text-white p-2 rounded-xl' key={index}>{value.structValue.fields.header.stringValue}<span>  {value.structValue.fields.description ? (value.structValue.fields.description.stringValue) : ''}</span></Link>
                                                                        ))}
                                                                    </div>
                                                                }
                                                            </div>
                                                        </div>

                                                    }
                                                </motion.div>
                                                :
                                                message?.botResponse?.action == 'input.unknown' ?
                                                    <motion.div initial={{ scale: 0, x: -300, y: 100 }} animate={{ scale: 1, x: 0, y: 0 }} transition={{ duration: 0.5, delay: .2 }} className='max-w-xs mr-auto bg-white text-black border-[1px] border-black   rounded-lg p-2' >
                                                        <p className='pb-2'>Sorry I am still training.</p>
                                                        <p className='pb-2'>If you want more information then please contact our counsellor via </p>
                                                        <a target='blank' className='bg-blue-500 p-2 text-white font-medium rounded-xl  ' href="https://www.facebook.com/ShabujGlobaleducationuk/">Facebook</a>
                                                    </motion.div> :
                                                    <div className='hidden'>s</div>
                                        }
                                    </div>
                                ))}
                            </div> :
                                <div className='w-1/2 mx-auto'><p><span className="loading loading-dots loading-lg"></span></p></div>
                            }
                        </div>
                        <form onSubmit={handleSubmit} className='flex  '>
                            <input
                                className='border-t-2 border-blue-500 p-2  w-full rounded-bl-2xl  h-10 outline-none'
                                value={clientMessage}
                                onChange={(e) => setClientMessage(e.target.value)}
                                type="text"
                            />
                            <button
                                type="submit"
                                className='px-5 bg-blue-500 text-white w-2/5  '
                            >
                                Send
                            </button>
                        </form>
                    </motion.div>
                </div> :
                <div>
                    <p>loading...</p>
                </div>
            }
        </div>
    );
};

export default ChatBot;