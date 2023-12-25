import axios from "axios";

const axiosPublic=axios.create({
    baseURL:'https://task-pro-server-dun.vercel.app'
    
})

const useAxiosPublic = () => {
    return axiosPublic
};

export default useAxiosPublic;