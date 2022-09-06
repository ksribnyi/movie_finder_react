import React from "react";
import LoginForm from "./LoginForm";
import {connect} from "react-redux";
import {login} from "../../redux/AuthReducer";

type LoginPropsType = {
    login: (email: string, password: string, navigate: (patch: string) => void) => Promise<void>
}

const StyleContainerLogin = {
    LogBlock: {
        width: 300,
        height: 350,
        background: "gray",
        marginTop: 50,
        marginLeft: "auto",
        marginRight: "auto"
    }
}

const LoginContainer = ({login}: LoginPropsType) => {
    return (
        <div style={StyleContainerLogin.LogBlock}>
            <LoginForm login={login}/>
        </div>
    )
}

export default connect(null, {login})(LoginContainer);