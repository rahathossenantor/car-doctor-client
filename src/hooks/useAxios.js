import axios from "axios";
import { useEffect } from "react";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

const axiosInterceptor = axios.create({
    baseURL: "https://cardoctors-server.vercel.app",
    withCredentials: true
});

const useAxios = () => {
    const { signOutUser } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        axiosInterceptor.interceptors.response.use(res => res, err => {
            if (err.response.status === 401 || err.response.status === 403) {
                signOutUser()
                    .then(() => {
                        navigate("/login");
                    })
                    .catch(err => {
                        console.error(err.message);
                    });
            }
        });
    }, [signOutUser, navigate]);
    
    return axiosInterceptor;
};

export default useAxios;
