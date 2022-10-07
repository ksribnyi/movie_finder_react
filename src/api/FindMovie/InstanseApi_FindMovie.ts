import axios from "axios";
import {API_URL, tokenKey} from "../../utils/variables";

export const $apiFindMovie = axios.create({
    withCredentials: true,
    baseURL: API_URL
})

$apiFindMovie.interceptors.request.use((config) => {
    const value: string | null = localStorage.getItem(tokenKey)
    if (typeof value === "string") {
        const token = JSON.parse(value)
        config.headers!.Authorization = `Bearer ${token.access}`
        return config
    }
    return config
})