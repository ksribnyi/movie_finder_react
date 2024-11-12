import {ThunkAction} from "redux-thunk";
import {TStore} from "../redux-store";
import {AnyAction, Dispatch} from "redux";
import {ThunkDispatch} from "redux-thunk/src/types";
import {WatchLaterMovieAPI} from "../../api/WatchLaterMovie/WatchLaterMovieAPI";
import {setMovieLaterMore, setMovieWatchLater} from "../ActionsCreators";

export const requestMovieLater = (): ThunkAction<void, TStore, unknown, AnyAction> => {
    return async (dispatch: ThunkDispatch<TStore, unknown, AnyAction>) => {
        await WatchLaterMovieAPI.requestMovieLater().then((data) => {
            dispatch(setMovieWatchLater(data))
        })
    }
}

export const requestMovieLaterMore = (url: string) => {
    return async (dispatch: Dispatch<AnyAction>) => {
        const data = await WatchLaterMovieAPI.requestMovieLaterMore(url).then((res : any) => res.results)
        dispatch(setMovieLaterMore(data));
    }
}