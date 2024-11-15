import {IMovieElement} from "../api/FindMovie/findMovieApi.types";

export namespace ReducersTypes {
    export interface IAuth {
        loginStatus: boolean,
        showLoginModal: boolean
    }

    export interface IFindMovie {
        next: string,
        previous: string,
        movie: {
            results: Array<IMovieElement>
        },
        bodyInput: string
    }

    export interface IWatchLater {
        movieLater: {
            next: string,
            count: number,
            previous: string,
            results: Array<IMovieElement>
        }
    }
}