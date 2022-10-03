import { IMovieElement } from "../FindMovie/findMovieApi.types";

export namespace WatchLaterApiTypes {
    export namespace requestMovieLater {
        export interface Response {
            count: number,
            results: [
                {
                    id: number,
                    movie: IMovieElement
                }
            ]
        }
    }

    export namespace addWatchLater {
        export interface Request {
            id: number
        }

        export interface Response {
            id: number
        }
    }

    export namespace deleteWatchLater {
        export interface Request {
            id: number
        }

        export interface Response {
            id: number
        }
    }
}