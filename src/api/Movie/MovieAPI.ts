import {instance} from "./InstanseApi_Movie";
import {AxiosResponse} from "axios";
import {StateMovie} from "../../models/response/Response";


export const MovieAPI = {
    requestMovie(name: string): Promise<AxiosResponse<StateMovie, StateMovie>> {
        return instance.get(`find_movie/${name}/`).then(response => response.data)
    }
}
