import {AxiosResponse} from "axios";
import api from "./InstanseHTTP_Auth";
import {AuthApiTypes} from "./authApi.types";

export const AuthAPI = {
    login({email, password} : AuthApiTypes.login.Request): Promise<AxiosResponse<AuthApiTypes.login.Response, AuthApiTypes.login.Response>> {
        return api.post("signin/", {email: email, password: password})
    },
    registration({email, password} : AuthApiTypes.registration.Request): Promise<AxiosResponse<AuthApiTypes.registration.Response, AuthApiTypes.registration.Response>> {
        return api.post("signup/", {email: email, password: password})
    },
    getToken({email, password} : AuthApiTypes.getToken.Request): Promise<AxiosResponse<AuthApiTypes.getToken.Response, AuthApiTypes.getToken.Response>> {
        return api.post("api/token/", {email: email, password: password})
    }
}