import {OptionsObject, SnackbarKey, SnackbarMessage} from "notistack";

export namespace LoginTypes {
    export interface ILoginContainer {
        login: (email: string, password: string, navigate: (patch: string) => void) => Promise<void>
    }
    export interface enqueueMassage {
        response: {
            data: {
                detail: string
            }
        }
    }
    export interface ILoginContainer {
        login: (email: string, password: string, navigate: (patch: string) => void) => Promise<void>
    }
    export interface ILoginForm {
        login: (email: string, password: string, navigate: (patch: string) =>
            void, enqueueSnackbar: (message: SnackbarMessage, options?: OptionsObject) => SnackbarKey) => Promise<void>
    }
}