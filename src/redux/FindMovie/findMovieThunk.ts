import {AnyAction, Dispatch} from "redux";
import {MovieAPI} from "../../api/Movie/MovieAPI";
import {setMovie} from "../ActionsCreators";

export const requestMovie = (name: string) => {
    return async (dispatch: Dispatch<AnyAction>) => {
        const data = await MovieAPI.requestMovie(name)
        dispatch(setMovie(data));
    }
}