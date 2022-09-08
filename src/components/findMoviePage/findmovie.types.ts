import React from "react";
import {StateMovie} from "../../models/response/Response";

export namespace FindmovieTypes {
    export interface IMovieProps {
        findMovie: React.MouseEventHandler,
        movie: Array<StateMovie>,
        onChange: React.ChangeEventHandler,
        bodyInput: string
    }
    export interface IMovieContainer {
        movie: {
            movie: Array<StateMovie>,
            bodyInput: string,
        },
        requestMovie: (name: string) => Promise<void>,
        setSearchBody: (body: string) => {type: string, body: string}
    }
}