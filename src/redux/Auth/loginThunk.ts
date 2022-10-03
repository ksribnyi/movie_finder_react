import {AnyAction, Dispatch} from "redux";
import {AuthAPI} from "../../api/Auth/AuthAPI";
import {setLoginStatus, setUserData} from "../ActionsCreators";
import {ThunkAction} from "redux-thunk";
import {TStore} from "../redux-store";
import {ThunkDispatch} from "redux-thunk/src/types";
import {UserAPI} from "../../api/User/UserAPI";

export const login = (email: string, password: string, navigate: (patch: string) => void) => {
    return async (dispatch: Dispatch<AnyAction>) => {
        const token = await AuthAPI.getToken({email, password})
        const tokenData = {
            access: token.data.access,
            refresh: token.data.refresh
        }
        localStorage.setItem("token", JSON.stringify(tokenData))
        const res = await AuthAPI.login({email, password})
        dispatch(setLoginStatus(true))
        navigate("/findmovie")
        dispatch(setUserData(res.data.email, res.data.username))
    }
}

export const checkAuth = (enqueueSnackbar: (massage: string) => void): ThunkAction<void, TStore, unknown, AnyAction> => {
    return async (dispatch: ThunkDispatch<TStore, unknown, AnyAction>) => {
        await UserAPI.user()
            .then((result) => {
                dispatch(setLoginStatus(true))
                dispatch(setUserData(result.data.email, result.data.username))
            })
            .catch(() => {
                dispatch(setLoginStatus(false))
                enqueueSnackbar("You are not authorized")
            });
    }
}