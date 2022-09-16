import {ThunkAction} from "redux-thunk";
import {TStore} from "../redux-store";
import {AnyAction} from "redux";
import {ThunkDispatch} from "redux-thunk/src/types";
import {WatchLaterMovieAPI} from "../../api/WatchLaterMovie/WatchLaterMovieAPI";
import {setMovieWatchLater} from "../ActionsCreators";

export const requestMovieLater = (setResFin: (status:boolean)=> boolean): ThunkAction<void, TStore, unknown, AnyAction> => {
    return async (dispatch: ThunkDispatch<TStore, unknown, AnyAction>) => {
        await WatchLaterMovieAPI.requestMovieLater().then((data) => {
            dispatch(setMovieWatchLater(data))
            setResFin(true)
        })
    }
}