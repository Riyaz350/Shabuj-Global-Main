import axios from "axios";

const axiosPublic = axios.create({
    // baseURL:'https://nodebot-umber.vercel.app'
    baseURL:'https://api.studyuk.today'
})
const useAxiosPublic = () => {
    return axiosPublic
};

export default useAxiosPublic;