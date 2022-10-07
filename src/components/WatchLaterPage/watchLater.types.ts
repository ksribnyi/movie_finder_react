import { WatchLaterApiTypes } from "../../api/WatchLaterMovie/watchLaterMovieApi.types";

export namespace WatchLaterTypes {
    export interface IGridProps {
        movie: WatchLaterApiTypes.requestMovieLater.Response,
        resFinished: boolean,
        buttonEffect: (id: number) => void
    }
    export interface IWatchLaterContainer {
        movieLater: {
            movieS: WatchLaterApiTypes.requestMovieLater.Response,
        }
    }

    export interface IWatchLaterProps {
        Later: WatchLaterApiTypes.requestMovieLater.Response,
        requestMovieLater: (callback: any) => void,
        setMovieWatchLater: (data: any) => void,
    }
}