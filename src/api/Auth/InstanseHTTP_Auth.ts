import axios from "axios";
import {API_URL} from "../../utils/variables";

const api = axios.create({
    withCredentials: true,
    baseURL: API_URL,
})

export default api;