import axios from "axios";

const api = axios.create ({
    baseURL:"http://192.168.6.181:3001"
})

export default api;