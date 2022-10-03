import React from "react";
import {FindMovieApiTypes} from "../../api/FindMovie/findMovieApi.types";

export namespace FindmovieTypes {
    export interface IMovieProps {
        findMovie: React.MouseEventHandler,
        movie: FindMovieApiTypes.requestMovie.Response,
        onChange: React.ChangeEventHandler,
        bodyInput: string
    }

    export interface IMovieContainer {
        movie: {
            movie: FindMovieApiTypes.requestMovie.Response,
            bodyInput: string
        },
        requestMovie: (name: string) => Promise<void>,
        setSearchBody: (body: string) => { type: string, body: string }
    }

    export interface IGridMovie {
        key: number,
        id: number,
        movieData: movieData,
        buttonEffect: (id: number) => void,
        textBtn: string
    }

    export interface ILikeMovie {
        likesCount: number,
        isLiked: boolean,
        id: number
    }

    export interface ILikeIcon {
        isLiked: boolean,
        id: number
    }

    export interface IGridConstructor {
        movie: FindMovieApiTypes.requestMovie.Response,
        buttonEffect: (id: number) => void
    }
    
    export interface IMoviePhoto {
        poster: string, 
        linkImdb: string
    }

    export interface movieData {
        poster: string,
        imdb_id: string,
        title: string,
        year: string,
        likes_count: number,
        is_liked: boolean
    }
}