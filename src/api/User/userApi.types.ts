export namespace UserApiTypes {
    export namespace user {
        export interface Response {
            email: string,
            username: string
        }
    }
  
    export namespace changePassword {
        export interface Request {
            oldPassword: string,
            newPassword: string
        }
    }
}