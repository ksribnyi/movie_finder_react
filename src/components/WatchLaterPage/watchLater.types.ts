import {responseMovieWatchLater} from "../../models/response/Response";

export namespace WatchLaterTypes {
    export interface IGridProps {
        movie: responseMovieWatchLater,
        resFinished: boolean,
        buttonEffect: (id: number) => void
    }
    export interface IWatchLaterContainer {
        movieLater: {
            movieS: responseMovieWatchLater,
        }
    }

    export interface IWatchLaterProps {
        Later: responseMovieWatchLater,
        requestMovieLater: (callback: any) => void,
        setMovieWatchLater: (data: any) => void,
    }
}