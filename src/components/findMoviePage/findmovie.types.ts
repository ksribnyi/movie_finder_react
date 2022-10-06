import React from "react";
import {StateMovie} from "../../models/response/Response";

export namespace FindmovieTypes {
    export interface IMovieProps {
        findMovie: React.MouseEventHandler,
        movie: Array<StateMovie>,
        next: string,
        onChange: React.ChangeEventHandler,
        bodyInput: string,
        requestMovieMore: (name: string) => Promise<void>,
    }
    export interface IMovieContainer {
        movie: {
            next: string,
            movie: Array<StateMovie>,
            bodyInput: string,
        },
        requestMovie: (name: string) => Promise<void>,
        requestMovieMore: (name: string) => Promise<void>,
        setSearchBody: (body: string) => {type: string, body: string}
    }
    export interface IGridMovie {
        id: number,
        key: number,
        poster: string,
        imdb_id: string,
        year: string,
        title: string,
        buttonEffect: (id: number) => void,
        textBtn: string
    }
}