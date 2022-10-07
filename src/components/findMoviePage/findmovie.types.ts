import React, {Dispatch, ReactElement, SetStateAction} from "react";
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
        clearMovie: (data: any) => any,
        setSearchBody: (body: string) => { type: string, body: string },
    }

    export interface IGridMovie {
        key: number,
        id: number,
        movieData: movieData,
        buttonEffect: (id: number) => void,
        textBtn: ReactElement<any, any>
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
        buttonEffect: (id: number) => void
    }

    export interface IMoviePhoto {
        poster: string,
        linkImdb: string,
        id: number,
        buttonEffect: (id: number) => void,
        textBtn: ReactElement<any, any>
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