export namespace InitStates {
    export const Auth = {
        loginStatus: false,
        userData: {
            email: null,
            username: null
        },
        showLoginModal: false
    }

    export const Movie = {
        next: "",
        previous: "",
        movie: {
            results: []
        },
        bodyInput: ""
    }

    export const WatchLater = {
        movieLater: {
            next: "",
            previous: "",
            results: []
        }
    }
}