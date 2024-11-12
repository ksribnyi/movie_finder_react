import {AnyAction} from "redux";
import {WatchLaterActions} from "../ActionsType";
import {InitStates} from "../InitStates";


const WatchLaterReducer = (state: {
    movieLater: { next: string; previous: string; results: any[] }
} = InitStates.WatchLater, action: AnyAction) => {
    switch (action.type) {
        case WatchLaterActions.SET_MOVIE_WATCH_LATER :
            return {
                ...state,
                movieLater: action.movie
            }
        case WatchLaterActions.SET_MOVIE_LATER_MORE :
            return {
                ...state,
                movieLater: {
                    results: [...state.movieLater.results, ...action.movie]
                }
            }
        default:
            return state
    }
}

export default WatchLaterReducer