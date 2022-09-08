import {AxiosResponse} from "axios";
import api from "./InstanseHTTP_Auth";
import {AuthResponseUser, RegistrationResponse, TokenResponse} from "../../models/response/Response";

export const AuthAPI = {
    login(email: string, password: string): Promise<AxiosResponse<AuthResponseUser, AuthResponseUser>> {
        return api.post("login/", {email: email, password: password})
    },
    registration(email: string, password: string, username: string): Promise<AxiosResponse<RegistrationResponse, RegistrationResponse>> {
        return api.post("registration/", {email: email, password: password, username: username})
    },
    getToken(username: string, password: string): Promise<AxiosResponse<TokenResponse, TokenResponse>> {
        return api.post("api/token/", {email: username, password: password})
    }


}
