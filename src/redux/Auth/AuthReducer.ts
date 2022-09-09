import {AnyAction} from "redux";
import {AuthActions} from "../ActionsType";
import {ReducersTypes} from "../reducers.types";
import {InitStates} from "../InitStates";

const AuthReducer = (state: ReducersTypes.IAuth = InitStates.Auth, action: AnyAction) => {
    switch (action.type) {
        case AuthActions.SET_LOGIN_STATUS:
            return {
                ...state,
                loginStatus: action.status
            }
        case AuthActions.SET_USER_DATA:
            return {
                ...state,
                userData: {
                    email: action.email,
                    username: action.username
                },
            }
        case AuthActions.CLEAR_USER_DATA:
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

export default AuthReducer