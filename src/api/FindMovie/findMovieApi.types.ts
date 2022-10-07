export namespace FindMovieApiTypes {
    export namespace requestMovie {
        export interface Request {
            name: string
        }

        export interface Response {
            count: number,
            results: [IMovieElement]
        }
    }

    export namespace likeMovie {
        export interface Request {
            id: number
        }
    }

    export namespace unlikeMovie {
        export interface Request {
            id: number
        }
    }
}

export interface IMovieElement {
    movie: {
        id: number,
        likes_count: number,
        is_liked: boolean,
        title: string,
        imdb_id: string,
        wiki_link: string,
        year: string,
        type: string
        poster: string,
        created_at: string,
        updated_at: string
    }
}