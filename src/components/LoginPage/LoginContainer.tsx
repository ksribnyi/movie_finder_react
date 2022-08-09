import React from "react";
import LoginForm from "./LoginForm";
import {connect} from "react-redux";
import {setLoginStatus} from "../../redux/FindMovieReducer";

type LoginContainerType = {
    movie: {
        loginStatus: boolean
    },
    setLoginStatus: any
}

type LoginPropsType = {
    status: boolean,
    setLoginStatus: any
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


const LoginContainer = ({setLoginStatus}:LoginPropsType) => {
    return (
        <div style={StyleContainerLogin.LogBlock}>
            <LoginForm setLoginStatus={setLoginStatus}/>
        </div>
    )
}

const mapStateToProps = (state: LoginContainerType) => ({
    status: state.movie.loginStatus,
})

export default connect(mapStateToProps, {setLoginStatus})(LoginContainer);