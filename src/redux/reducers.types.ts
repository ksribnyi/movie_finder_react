import {StateMovie} from "../models/response/Response";

export namespace ReducersTypes {
    export interface IAuth {
        loginStatus: boolean
    }
    export interface IFindMovie {
        next: string,
        previous: string,
        movie: Array<StateMovie>,
        bodyInput: string,
    }
    export interface IWatchLater {
        movieS: Array<StateMovie>
    }
}
