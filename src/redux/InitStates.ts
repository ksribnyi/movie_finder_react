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
        movie: [],
        bodyInput: ""
    }
    export const WatchLater = {
        movieS: [],
    }
}