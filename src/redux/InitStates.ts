export namespace InitStates {
    export const Auth = {
        loginStatus: false,
        userData: {
            email: null,
            username: null
        }
    }
    export const FindMovie = {
        next: "",
        previous: "",
        movie: {
            results: []
        },
        bodyInput: ""
    }
    export const WatchLater = {
        movieS: [],
    }
}