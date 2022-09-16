import {AnyAction} from "redux";
import {WatchLaterActions} from "../ActionsType";
import {InitStates} from "../InitStates";
import {ReducersTypes} from "../reducers.types";

const WatchLaterReducer = (state: ReducersTypes.IWatchLater = InitStates.WatchLater, action: AnyAction) => {
    switch (action.type) {
        case WatchLaterActions.SET_MOVIE_WATCH_LATER :
            return {
                ...state,
                movieS: action.movie
            }
        default:
            return state
    }
}

export default WatchLaterReducer