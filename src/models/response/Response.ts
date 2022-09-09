export interface TokenResponse {
    access: string;
    refresh: string;
}

export interface RegistrationResponse {
    email: string,
    username: string
}

export interface AuthResponseUser {
    email: string,
    username: string
}

export interface responseMovie {
    count: number,
    results: Array<StateMovie>
}

export interface StateMovie {
    results: {
        id: number,
        likes_count: number,
        title: string,
        imdb_id: string,
        wiki_link?: string,
        year: string,
        type?: string
        poster?: string,
        created_at: string,
        updated_at: string
    }
}

export interface responseMovieWatchLater {
    count: number,
    results: Array<StateMovieWatchLater>
}

export interface StateMovieWatchLater {
    id:number,
    movie: {
        id: number,
        likes_count: number,
        title: string,
        imdb_id: string,
        wiki_link?: string,
        year: string,
        type?: string
        poster?: string,
        created_at: string,
        updated_at: string
    }
}

export interface WatchLater {
    id: number
}