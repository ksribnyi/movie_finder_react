import {MovieAPI} from "../api/api";

const SET_MOVIE = "SET_MOVIE"
const SET_SEARCH_BODY = "SET_SEARCH_BODY"

let initialState = {
    movie: [],
    newSearchBody: ''

}
const FindMovieReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_MOVIE :
            return {
                ...state,
                movie: action.movie
            }
        case SET_SEARCH_BODY :
            return {
                ...state,
                newSearchBody: action.body
            }
        default:
            return state
    }

}

export const setMovie = (movie) => ({type: SET_MOVIE, movie})
export const setSearchBody = (body) => ({type: SET_SEARCH_BODY, body})

export const requestMovie = (name) => {
    return async (dispatch) => {
        let data = await MovieAPI.requestMovie(name)
        console.log(data)
        dispatch(setMovie(data));
    }
}

export default FindMovieReducer