import axios from "axios";


const instance = axios.create({
    baseURL: 'http://127.0.0.1:8000/find_movie/'
})

export const MovieAPI = {
    requestMovie(name:string) {
        return instance.get(`${name}/`).then(response => response.data)
    }
}