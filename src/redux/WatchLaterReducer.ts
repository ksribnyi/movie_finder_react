import {AnyAction} from "redux";
import {responseMovieWatchLater, StateMovie} from "../models/response/Response";
import {AxiosResponse} from "axios";
import {ThunkAction} from "redux-thunk";
import {TStore} from "./redux-store";
import {ThunkDispatch} from "redux-thunk/src/types";
import {WatchLaterMovieAPI} from "../api/WatchLaterMovie/WatchLaterMovieAPI";

const SET_MOVIE_WATCH_LATER = "SET_MOVIE"

type Searches = {
    movieS: Array<StateMovie>,
}

const initialState = {
    movieS: [],
}

const WatchLaterReducer = (state: Searches = initialState, action: AnyAction) => {
    switch (action.type) {
        case SET_MOVIE_WATCH_LATER :
            return {
                ...state,
                movieS: action.movie
            }
        default:
            return state
    }
}

export const setMovieWatchLater = (movie: AxiosResponse<responseMovieWatchLater, responseMovieWatchLater>) => ({type: SET_MOVIE_WATCH_LATER, movie})

export const requestMovieLater = (setResFin: (status:boolean)=> boolean): ThunkAction<void, TStore, unknown, AnyAction> => {
    return async (dispatch: ThunkDispatch<TStore, unknown, AnyAction>) => {
        await WatchLaterMovieAPI.requestMovieLater().then((data) => {
            console.log('request movie later', data)
            dispatch(setMovieWatchLater(data))
            setResFin(true)
        })
    }
}

export default WatchLaterReducer