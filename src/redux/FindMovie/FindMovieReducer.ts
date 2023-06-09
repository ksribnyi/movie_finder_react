import {AnyAction} from "redux";
import {FindMovieActions} from "../ActionsType";
import {ReducersTypes} from "../reducers.types";
import {InitStates} from "../InitStates";

const FindMovieReducer = (state: ReducersTypes.IFindMovie = InitStates.FindMovie, action: AnyAction) => {
    switch (action.type) {
        case FindMovieActions.SET_MOVIE :
            return {
                ...state,
                next: action.movie.next,
                previous: action.movie.previous,
                movie: action.movie
            }
        case FindMovieActions.SET_MOVIE_MORE :
            return {
                ...state,
                next: action.movie.next,
                previous: action.movie.previous,
                movie: {
                    results: [...state.movie.results, ...action.movie.results]
                }
            }
        case FindMovieActions.CLEAR_MOVIE :
            return {
                ...state,
                movie: action.movie
            }
        case FindMovieActions.SET_SEARCH_BODY :
            return {
                ...state,
                bodyInput: action.body
            }
        default:
            return state
    }
}

export default FindMovieReducer