export namespace AppTypes {
    export interface IAuthStatus {
        auth: {
            loginStatus: boolean,
        }
    }

    export interface IAppProps  {
        loginStatus?: boolean,
        checkAuth: (enqueueSnackbar:any) => void
    }
}