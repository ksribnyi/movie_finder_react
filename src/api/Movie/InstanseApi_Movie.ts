import axios from "axios";
import {API_URL} from "../../utils/variables";


export const instance = axios.create({
    withCredentials: true,
    baseURL: API_URL
})

