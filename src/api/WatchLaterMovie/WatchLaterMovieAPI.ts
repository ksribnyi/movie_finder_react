import {$apiWatchLaterMovie} from "./InstanseApi_WatchLaterMovie";
import {AxiosResponse} from "axios";
import {responseMovieWatchLater, WatchLater} from "../../models/response/Response";

export const WatchLaterMovieAPI = {
    requestMovieLater(): Promise<AxiosResponse<responseMovieWatchLater, responseMovieWatchLater>> {
        return $apiWatchLaterMovie.get(`watch_later/list/`).then(response => response.data)
    },
    addWatchLater(id: string | number): Promise<AxiosResponse<WatchLater, WatchLater>> {
        return $apiWatchLaterMovie.post(`watch_later/create/`, {'movie': id}).then(response => response.data)
    },
    deleteWatchLater(id: string | number): Promise<AxiosResponse<WatchLater, WatchLater>> {
        return $apiWatchLaterMovie.delete(`watch_later/${id}/destroy/`)
    }
}