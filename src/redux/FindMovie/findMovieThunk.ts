import {AnyAction, Dispatch} from "redux";
import {setMovie} from "../ActionsCreators";
import {FindMovieAPI} from "../../api/FindMovie/FindMovieAPI";

export const requestMovie = (name: string) => {
    return async (dispatch: Dispatch<AnyAction>) => {
        const data = await FindMovieAPI.requestMovie(name)
        dispatch(setMovie(data));
    }
}