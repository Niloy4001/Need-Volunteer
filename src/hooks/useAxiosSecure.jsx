import axios from "axios";
import { useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthProvider";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
  baseURL: "https://need-volunteer-server.vercel.app/",
  withCredentials: true,
});

const useAxiosSecure = () => {
    const {logOut} = useContext(AuthContext)
    const navigate = useNavigate()
  useEffect(()=>{
    axiosSecure.interceptors.response.use((res) => {
        return res;
      },  error =>{
        // ('error from hook', error);
        if (error.response.status === 401 || error.response.status === 403) {
            
            logOut()
            navigate('/login')
            
        }
      });
  },[logOut,navigate])
  return axiosSecure
};

export default useAxiosSecure;
