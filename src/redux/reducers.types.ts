import { IMovieElement } from "../api/FindMovie/findMovieApi.types";

export namespace ReducersTypes {
    export interface IAuth {
        loginStatus: boolean
    }
    export interface IFindMovie {
        movie?: Array<IMovieElement>,
        bodyInput?: string,
    }
    export interface IWatchLater {
        movieS: Array<IMovieElement>
    }
}