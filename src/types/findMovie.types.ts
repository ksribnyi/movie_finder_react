import {Dispatch, SetStateAction} from "react";
import {FindMovieApiTypes} from "../api/FindMovie/findMovieApi.types";


export namespace FindmovieTypes {
    export interface IMovieProps {
        movie: FindMovieApiTypes.requestMovie.Response,
        next: string,
        requestMovieMore: (name: string) => Promise<void>,
    }

    export interface IMovieContainer {
        movie: {
            next: string,
            movie: FindMovieApiTypes.requestMovie.Response,
            bodyInput: string,
        },
        setSearchBody: (body: string) => { type: string, body: string }
        requestMovieMore: (name: string) => Promise<void>,
        clearMovie: (data: any) => any,
    }

    export interface IGridMovie {
        id: number,
        movieData: movieData,
        buttonEffect: (id: number) => void,
        isWatchLater: boolean,
        setShowLoginModal: (status: boolean) => void
    }

    export interface ILikesCounter {
        likesCount: number,
        isLiked: boolean,
        id: number,
        setShowLoginModal: (status: boolean) => void
    }

    export interface ILikeIcon {
        liked: boolean,
        id: number,
        setLike: Dispatch<SetStateAction<boolean>>,
        setCount: Dispatch<SetStateAction<number>>,
        count: number,
        setShowLoginModal: (status: boolean) => void
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
        isWatchLater: boolean,
        setShowLoginModal: (status: boolean) => void
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
        setLike: Dispatch<SetStateAction<boolean>>,
        setCount: Dispatch<SetStateAction<number>>,
        count: number,
        setShowLoginModal: (status: boolean) => void
    }
}