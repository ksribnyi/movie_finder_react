import axios from "axios";
import {API_URL, loginPatch, refreshTokenPatch, tokenKey} from "../../constants/constants";
import {setLoginStatus} from "../../redux/ActionsCreators";

const $apiUser = axios.create({
    withCredentials: true,
    baseURL: API_URL,
})

$apiUser.interceptors.request.use((config) => {
    let token
    const value: string | null = localStorage.getItem(tokenKey)
    if (typeof value === "string") {
        token = JSON.parse(value)
    }
    config.headers!.Authorization = `Bearer ${token.access}`
    return config
})

$apiUser.interceptors.response.use(
    (res) => {
        return res;
    },
    async (err) => {
        const originalConfig = err.config;
        if (originalConfig.url !== loginPatch && err.response) {
            if (err.response.status === 401 && !originalConfig._retry) {
                originalConfig._retry = true;
                let tokens
                try {
                    const value: string | null = localStorage.getItem(tokenKey)
                    if (typeof value === "string") {
                        tokens = JSON.parse(value)
                    }
                    const rs = await axios.post(`${API_URL}${refreshTokenPatch}`, {refresh: tokens.refresh}, {withCredentials: true})
                        .catch(() => {
                            if (err.response.status === 401) {
                                setLoginStatus(false)
                            }
                        })
                    localStorage.setItem(tokenKey, JSON.stringify({access: rs?.data.access, refresh: tokens.refresh}))
                    setLoginStatus(true)
                    return $apiUser(originalConfig);

                } catch (_error) {
                    return Promise.reject(_error);
                }
            }
        }
        return Promise.reject(err);
    }
)

export default $apiUser;