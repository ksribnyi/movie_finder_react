import {MovieAPI} from "../api/api";
import {AnyAction} from "redux";

const SET_MOVIE = "SET_MOVIE"
const SET_SEARCH_BODY = "SET_SEARCH_BODY"

export interface StateMovie {
    id: number,
    title: string,
    imdb_id: string,
    poster?: string,
    year: string,
}

type Search = {
    movie?: Array<StateMovie>,
    bodyInput?: string,
}

const initialState = {
    movie: [],
    bodyInput: ""
}

const FindMovieReducer = (state:Search = initialState, action:AnyAction)=> {
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

export const setMovie = (movie: string) => ({type: SET_MOVIE, movie})
export const setSearchBody = (body: string) => ({type: SET_SEARCH_BODY, body})

export const requestMovie = (name: string) => {
    return async (dispatch: any) => {
        let data:any = await MovieAPI.requestMovie(name)
        dispatch(setMovie(data));
    }
}

export default FindMovieReducer