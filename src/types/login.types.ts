import {OptionsObject, SnackbarKey, SnackbarMessage} from "notistack";
import {FindMovieApiTypes} from "../api/FindMovie/findMovieApi.types";

export namespace LoginTypes {
    export interface ILoginContainer {
        login: (email: string, password: string, navigate: (patch: string) => void) => Promise<void>,
        setShowLoginModal: (status: boolean) => void,
        bodyInput: string,
        requestMovie: (value: string) => void
    }

    export interface enqueueMassage {
        response: {
            data: {
                detail: string
            }
        }
    }

    export interface ILoginForm {
        login: (email: string, password: string, navigate: (patch: string) =>
            void, enqueueSnackbar: (message: SnackbarMessage, options?: OptionsObject) => SnackbarKey) => Promise<void>,
        setShowLoginModal: (status: boolean) => void,
        bodyInput: string,
        requestMovie: (value: string) => void
    }

    export interface IStateProps {
        movie: {
            bodyInput: string
        }
    }
}