import {$apiFindMovie} from "./InstanseApi_FindMovie";
import {AxiosResponse} from "axios";
import {FindMovieApiTypes} from "./findMovieApi.types";

export const FindMovieAPI = {
    requestMovie({name}: FindMovieApiTypes.requestMovie.Request): Promise<AxiosResponse<FindMovieApiTypes.requestMovie.Response, FindMovieApiTypes.requestMovie.Response>> {
        return $apiFindMovie.get(`find_movie/${name}/`).then(response => response.data)
    },
    likeMovie({id}: FindMovieApiTypes.likeMovie.Request) {
        return $apiFindMovie.post(`movie/${id}/like/`)
    },
    unlikeMovie({id}: FindMovieApiTypes.unlikeMovie.Request) {
        return $apiFindMovie.post(`movie/${id}/unlike/`)
    },
    requestMovieMore(url: string): Promise<AxiosResponse<FindMovieApiTypes.requestMovie.Response, FindMovieApiTypes.requestMovie.Response>> {
        return $apiFindMovie.get(url).then(response => response.data)
    }
}