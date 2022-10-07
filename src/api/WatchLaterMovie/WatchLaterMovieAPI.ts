import {$apiWatchLaterMovie} from "./InstanseApi_WatchLaterMovie";
import {AxiosResponse} from "axios";
import {WatchLaterApiTypes} from "./watchLaterMovieApi.types";

export const WatchLaterMovieAPI = {
    requestMovieLater(): Promise<AxiosResponse<WatchLaterApiTypes.requestMovieLater.Response, WatchLaterApiTypes.requestMovieLater.Response>> {
        return $apiWatchLaterMovie.get(`watch_later/list/`).then(response => response.data)
    },
    addWatchLater({id}: WatchLaterApiTypes.addWatchLater.Request): Promise<AxiosResponse<WatchLaterApiTypes.addWatchLater.Response, WatchLaterApiTypes.addWatchLater.Response>> {
        return $apiWatchLaterMovie.post(`watch_later/create/`, {'movie': id}).then(response => response.data)
    },
    deleteWatchLater({id}: WatchLaterApiTypes.deleteWatchLater.Request): Promise<AxiosResponse<WatchLaterApiTypes.deleteWatchLater.Response, WatchLaterApiTypes.deleteWatchLater.Response>> {
        return $apiWatchLaterMovie.delete(`watch_later/${id}/destroy/`)
    }
}