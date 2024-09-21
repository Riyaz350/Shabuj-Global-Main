import axios from "axios";

const axiosPublic = axios.create({
    baseURL:'https://nodebot-umber.vercel.app'
    // baseURL:'http://localhost:5003'
})
const useAxiosPublic = () => {
    return axiosPublic
};

export default useAxiosPublic;