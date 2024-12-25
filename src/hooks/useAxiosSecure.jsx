import axios from "axios";
import { useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthProvider";

const axiosSecure = axios.create({
  baseURL: "https://need-volunteer-server.vercel.app/",
  withCredentials: true,
});

const useAxiosSecure = () => {
    const {logOut} = useContext(AuthContext)
  useEffect(()=>{
    axiosSecure.interceptors.response.use((res) => {
        return res;
      },  error =>{
        ('error from hook', error);
        if (error.response.status === 401 || error.response.status === 403) {
            ('getout');
            logOut()
            
        }
      });
  },[])
  return axiosSecure
};

export default useAxiosSecure;
