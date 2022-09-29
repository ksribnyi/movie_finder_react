import {instance} from "./InstanseApi_FindMovie";
import {AxiosResponse} from "axios";
import {responseMovie} from "../../models/response/Response";

export const FindMovieAPI = {
    requestMovie(name: string): Promise<AxiosResponse<responseMovie, responseMovie>> {
        return instance.get(`find_movie/${name}/`).then(response => response.data)
    },
    requestMovieMore(url: string): Promise<AxiosResponse<responseMovie, responseMovie>> {
        return instance.get(url).then(response => response.data)
    }
}