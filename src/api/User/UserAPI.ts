import {AxiosResponse} from "axios";
import {AuthResponseUser} from "../../models/response/Response";
import $apiUser from "./InstanseAPI_User";

export const UserAPI = {
    user(): Promise<AxiosResponse<AuthResponseUser, AuthResponseUser>> {
        return $apiUser.get("user/")
    },

}