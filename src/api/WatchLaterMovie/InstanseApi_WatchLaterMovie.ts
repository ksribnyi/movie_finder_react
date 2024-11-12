import axios from "axios";
import {API_URL, tokenKey} from "../../constants/constants";

export const $apiWatchLaterMovie = axios.create({
    withCredentials: true,
    baseURL: API_URL
})

$apiWatchLaterMovie.interceptors.request.use((config) => {
    let token
    const value: string | null = localStorage.getItem(tokenKey)
    if (typeof value === "string") {
        token = JSON.parse(value)
    }

    config.headers!.Authorization = `Bearer ${token.access}`
    return config
})
