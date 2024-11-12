export namespace AuthApiTypes {
    export namespace login {
        export interface Request {
            email: string, 
            password: string
        }

        export interface Response {
            email: string,
            username: string
        }
    }

    export namespace registration {
        export interface Request {
            email: string, 
            password: string,
        }
        export interface Response {
            email: string,
            username: string
        }
    }

    export namespace getToken {
        export interface Request {
            email: string,
            password: string
        }
        export interface Response {
            access: string;
            refresh: string;
        }
    }
}