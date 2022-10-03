import {AxiosResponse} from "axios";
import $apiUser from "./InstanseAPI_User";
import { UserApiTypes } from "./userApi.types";

export const UserAPI = {
    user(): Promise<AxiosResponse<UserApiTypes.user.Response, UserApiTypes.user.Response>> {
        return $apiUser.get("user/")
    }
}