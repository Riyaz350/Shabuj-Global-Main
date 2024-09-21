import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useChatData = (token) => {
    const axiosPublic = useAxiosPublic()
    const {data: chatData=[], refetch, isLoading:loading} =useQuery({
        queryKey:['chatData'],
        queryFn: async()=>{
                const res = await axiosPublic.get(`/chat/${token}`)
                return res.data
        },
        refetchInterval: 1000
    })
    return [chatData, refetch, loading]
};

export default useChatData;