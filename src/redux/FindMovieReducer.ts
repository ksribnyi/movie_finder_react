import {MovieAPI} from "../api/api";

const SET_MOVIE = "SET_MOVIE"
const SET_SEARCH_BODY = "SET_SEARCH_BODY"

interface initialStateMovie {
    id: number,
    title: string,
    imdb_id: string,
    year: string,
}

let initialState = {
    movie: [] as Array<initialStateMovie>,
    newSearchBody: 'Shrek' as string
}

const FindMovieReducer = (state = initialState, action: any)=> {
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

export const setMovie = (movie: string) => ({type: SET_MOVIE, movie})
export const setSearchBody = (body: string) => ({type: SET_SEARCH_BODY, body})

export const requestMovie = (name: string) => {
    return async (dispatch: any) => {
        let data:any = await MovieAPI.requestMovie(name)
        console.log(data)
        dispatch(setMovie(data));
    }
}

export default FindMovieReducer