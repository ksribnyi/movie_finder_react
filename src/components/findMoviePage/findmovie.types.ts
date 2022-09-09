import React from "react";
import {responseMovie} from "../../models/response/Response";

export namespace FindmovieTypes {
    export interface IMovieProps {
        findMovie: React.MouseEventHandler,
        movie: responseMovie,
        onChange: React.ChangeEventHandler,
        bodyInput: string
    }
    export interface IMovieContainer {
        movie: {
            movie: responseMovie,
            bodyInput: string,
        },
        requestMovie: (name: string) => Promise<void>,
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