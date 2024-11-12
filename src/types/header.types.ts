import {FindMovieApiTypes} from "../api/FindMovie/findMovieApi.types";

export namespace HeaderTypes {
    export interface IHeaderProps {
        loginStatus: boolean,
        clearUserData: (email: null, username: null) => { type: string, email: null, username: null },
        setLoginStatus: (status: boolean) => { type: string, status: boolean },
        movie: {
            next: string,
            movie: FindMovieApiTypes.requestMovie.Response,
            bodyInput: string,
        },
        requestMovie: (name: string) => void,
    }

    export interface IStateProps {
        auth: {
            loginStatus: boolean,
            userData: {
                username: string
            },
            showLoginModal:boolean
        }
        movie: {
            next: string,
            movie: FindMovieApiTypes.requestMovie.Response,
            bodyInput: string,
        }
    }

    export interface IAuthBlock {
        loginStatus: boolean,
        username?: string,
        logoutClick: () => void,
    }

    export interface INavbar {
        username?: string,
        logoutClick: () => void
    }

}