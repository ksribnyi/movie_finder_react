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

export interface StateMovie {
    id: number,
    title: string,
    imdb_id: string,
    wiki_link?: string,
    year: string,
    type?: string
    poster?: string,
    created_at: string,
    updated_at: string
}
