import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import FindMovieReducer from "./FindMovieReducer";


let reducers = combineReducers({
    movie: FindMovieReducer
})

type RootReducerType = typeof reducers
export type AppStateType = ReturnType<RootReducerType>

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store
