import axios from "axios";

let adminUrl = "https://wtsacademy.dedicateddevelopers.us/api/";
export const baseURL = adminUrl
let axiosInstance = axios.create({
  baseURL,
});
export default axiosInstance

axiosInstance.interceptors.request.use((request) => {

    const token = localStorage.getItem("token") || sessionStorage.getItem("token");
    if (token !== null || token !== undefined) {
      request.headers["x-access-token"] = token
    }
    return request;
  });
  export const profile_pic = (media) => {
    return `https://wtsacademy.dedicateddevelopers.us`+`/uploads/user/profile_pic/${media}`;
  }