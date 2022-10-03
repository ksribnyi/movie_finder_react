import {AuthActions, FindMovieActions, WatchLaterActions} from "./ActionsType";
import {AxiosResponse} from "axios";
import {FindMovieApiTypes} from "../api/FindMovie/findMovieApi.types";
import { WatchLaterApiTypes } from "../api/WatchLaterMovie/watchLaterMovieApi.types";

//Auth reducer
export const setLoginStatus = (status: boolean) => ({type: AuthActions.SET_LOGIN_STATUS, status})
export const setUserData = (email: string, username: string) => ({type: AuthActions.SET_USER_DATA, email, username})
export const clearUserData = (email: null, username: null) => ({type: AuthActions.CLEAR_USER_DATA, email, username})

//FindMovie reducer
export const setMovie = (movie: AxiosResponse<FindMovieApiTypes.requestMovie.Response, FindMovieApiTypes.requestMovie.Response>) => ({
    type: FindMovieActions.SET_MOVIE,
    movie
})
export const setSearchBody = (body: string) => ({type: FindMovieActions.SET_SEARCH_BODY, body})

//WatchLater reducer
export const setMovieWatchLater = (movie: AxiosResponse<WatchLaterApiTypes.requestMovieLater.Response, WatchLaterApiTypes.requestMovieLater.Response>) => ({
    type: WatchLaterActions.SET_MOVIE_WATCH_LATER,
    movie
})