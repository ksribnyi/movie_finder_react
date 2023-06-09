import React, {Dispatch, SetStateAction} from "react";
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
        clearMovie: (data: any) => any,
    }

    export interface IGridMovie {
        id: number,
        movieData: movieData,
        buttonEffect: (id: number) => void,
        typeIcon: string
    }

    export interface ILikeMovie {
        likesCount: number,
        isLiked: boolean,
        id: number
    }

    export interface ILikeIcon {
        liked: boolean,
        id: number,
        setLIke: Dispatch<SetStateAction<boolean>>,
        setCount: Dispatch<SetStateAction<number>>,
        count: number
    }

    export interface IGridConstructor {
        movie: FindMovieApiTypes.requestMovie.Response,
        buttonEffect: (id: number) => void,
        requestMovieMore: (name: string) => Promise<void>,
        next: string
    }

    export interface IMoviePhoto {
        poster: string,
        linkImdb: string,
        id: number,
        buttonEffect: (id: number) => void,
        typeIcon: string
    }

    export interface movieData {
        poster: string,
        imdb_id: string,
        title: string,
        year: string,
        likes_count: number,
        is_liked: boolean
    }

    export interface ILikeButton {
        id: number,
        setLIke:Dispatch<SetStateAction<boolean>>,
        setCount:Dispatch<SetStateAction<number>>,
        count: number
    }
}