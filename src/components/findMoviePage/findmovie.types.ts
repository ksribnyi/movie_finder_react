import React from "react";
import {FindMovieApiTypes} from "../../api/FindMovie/findMovieApi.types";

export namespace FindmovieTypes {
    export interface IMovieProps {
        findMovie: React.MouseEventHandler,
        movie: FindMovieApiTypes.requestMovie.Response,
        next: string,
        onChange: React.ChangeEventHandler,
        bodyInput: string,
        requestMovieMore: (name: string) => Promise<void>,
    }

    export interface IMovieContainer {
        movie: {
            next: string,
            movie: FindMovieApiTypes.requestMovie.Response,
            bodyInput: string,
        },
        requestMovie: (name: string) => Promise<void>,
        setSearchBody: (body: string) => { type: string, body: string }
        requestMovieMore: (name: string) => Promise<void>,
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
        buttonEffect: (id: number) => void,
        requestMovieMore: (name: string) => Promise<void>,
        next: string
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