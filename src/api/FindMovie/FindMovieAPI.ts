import {instance} from "./InstanseApi_FindMovie";
import {AxiosResponse} from "axios";
import {responseMovie} from "../../models/response/Response";
import {$apiWatchLaterMovie} from "../WatchLaterMovie/InstanseApi_WatchLaterMovie";

export const FindMovieAPI = {
    requestMovie(name: string): Promise<AxiosResponse<responseMovie, responseMovie>> {
        return instance.get(`find_movie/${name}/`).then(response => response.data)
    },
    likeMovie(id: number) {
        return $apiWatchLaterMovie.post(`movie/${id}/like/`)
    },
    unlikeMovie(id: number) {
        return $apiWatchLaterMovie.post(`movie/${id}/unlike/`)
    }
}