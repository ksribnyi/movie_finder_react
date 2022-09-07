import {StateMovie} from "../models/response/Response";

export namespace ReducersTypes {
    export interface IAuth {
        loginStatus: boolean
    }
    export interface IFindMovie {
        movie?: Array<StateMovie>,
        bodyInput?: string,
    }
}
