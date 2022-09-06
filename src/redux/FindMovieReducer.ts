import {FindMovieAPI} from "../api/FindMovie/FindMovieAPI";
import {AnyAction, Dispatch} from "redux";
import {responseMovie} from "../models/response/Response";
import {AxiosResponse} from "axios";

const SET_MOVIE = "SET_MOVIE"
const SET_SEARCH_BODY = "SET_SEARCH_BODY"

export interface Search {
    movie: responseMovie
    bodyInput: string
}

const initialState = {
    movie: {
        count: 0,
        results: []
    },
    bodyInput: ""
}

const FindMovieReducer = (state: Search = initialState, action: AnyAction) => {
    switch (action.type) {
        case SET_MOVIE :
            return {
                ...state,
                movie: action.movie
            }
        case SET_SEARCH_BODY :
            return {
                ...state,
                bodyInput: action.body
            }
        default:
            return state
    }
}

export const setMovie = (movie: AxiosResponse<responseMovie, responseMovie>) => ({type: SET_MOVIE, movie})
export const setSearchBody = (body: string) => ({type: SET_SEARCH_BODY, body})

export const requestMovie = (name: string) => {
    return async (dispatch: Dispatch<AnyAction>) => {
        await FindMovieAPI.requestMovie(name).then((data) => {
                console.log('find movie', data)
                dispatch(setMovie(data))
            }
        )
    }
}

export default FindMovieReducer