import React from "react";
import LoginForm from "./LoginForm";
import {connect} from "react-redux";
import {LoginTypes} from "./login.types";
import {login} from "../../redux/Auth/loginThunk";

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

const LoginContainer = ({login}: LoginTypes.ILoginContainer) => {
    return (
        <div style={StyleContainerLogin.LogBlock}>
            <LoginForm login={login}/>
        </div>
    )
}

export default connect(null, {login})(LoginContainer);