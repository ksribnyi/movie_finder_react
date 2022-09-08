import {AnyAction, applyMiddleware, combineReducers, createStore, Store} from "redux";
import thunkMiddleware, {ThunkDispatch} from "redux-thunk";
import FindMovieReducer from "./FindMovie/FindMovieReducer";
import AuthReducer from "./Auth/AuthReducer";

export type TAppState = ReturnType<typeof reducers>;
export type TDispatch = ThunkDispatch<TAppState, Promise<void>, AnyAction>;
export type TStore = Store<TAppState, AnyAction> & { dispatch: TDispatch };
export type TGetState = () => TAppState;


let reducers = combineReducers({
    movie: FindMovieReducer,
    auth: AuthReducer
})

let store: TStore = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store
