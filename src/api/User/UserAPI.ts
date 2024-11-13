import {AxiosResponse} from "axios";
import $apiUser from "./InstanseAPI_User";
import {UserApiTypes} from "./userApi.types";


export const UserAPI = {
    user(): Promise<AxiosResponse<UserApiTypes.user.Response, UserApiTypes.user.Response>> {
        return $apiUser.get("users/")
    },
    changePassword(values: UserApiTypes.changePassword.Request) {
        return $apiUser.patch("users/change_password/", {old_password: values.oldPassword, new_password: values.newPassword})
    }
}