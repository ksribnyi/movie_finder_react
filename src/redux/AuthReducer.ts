import {AuthAPI} from "../api/Auth/AuthAPI";
import {AnyAction, Dispatch} from "redux";
import {UserAPI} from "../api/User/UserAPI";
import {TStore} from "./redux-store";
import {ThunkAction} from "redux-thunk";
import {ThunkDispatch} from "redux-thunk/src/types";

const SET_LOGIN_STATUS = "SET_LOGIN_STATUS"
const SET_USER_DATA = "SET_USER_DATA"
const CLEAR_USER_DATA = "CLEAR_USER_DATA"

type Search = {
    loginStatus: boolean
}

const initialState = {
    loginStatus: false,
    userData: {
        email: null,
        username: null
    }
}

const AuthReducer = (state: Search = initialState, action: AnyAction) => {
    switch (action.type) {
        case SET_LOGIN_STATUS:
            return {
                ...state,
                loginStatus: action.status
            }
        case SET_USER_DATA:
            return {
                ...state,
                userData: {
                    email: action.email,
                    username: action.username
                },
            }
        case CLEAR_USER_DATA:
            return {
                ...state,
                userData: {
                    email: action.email,
                    username: action.username
                },
            }
        default:
            return state
    }
}

export const setLoginStatus = (status: boolean) => ({type: SET_LOGIN_STATUS, status})
export const setUserData = (email: string, username: string) => ({type: SET_USER_DATA, email, username})
export const clearUserData = (email: null, username: null) => ({type: CLEAR_USER_DATA, email, username})

export const login = (email: string, password: string, navigate: (patch: string) => void) => {
    return async (dispatch: Dispatch<AnyAction>) => {
        const token = await AuthAPI.getToken(email, password)
        const tokenData = {
            access: token.data.access,
            refresh: token.data.refresh
        }
        localStorage.setItem("token", JSON.stringify(tokenData))
        const res = await AuthAPI.login(email, password)
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

export default AuthReducer