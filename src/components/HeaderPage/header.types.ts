export namespace HeaderTypes {
    export interface IHeaderProps {
        loginStatus: boolean,
        username?: string,
        clearUserData: (email: null, username: null) => { type: string, email: null, username: null },
        setLoginStatus: (status: boolean) => { type: string, status: boolean }
    }

    export interface IStateProps {
        auth: {
            loginStatus: boolean,
            userData: {
                username: string
            }
        }
    }

    export interface IAuthBlock {
        loginStatus: boolean, 
        username?: string,
        logoutClick: () => void
    }

    export interface INavbar {
        username?: string,
        logoutClick: () => void
    }

}