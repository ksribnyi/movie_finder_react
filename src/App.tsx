import React, {useEffect} from "react";
import "./App.css";
import FindMovieContainer from "./components/findMoviePage/FindMovieContainer";
import HeaderContainer from "./components/HeaderPage/HeaderContainer";
import FavoriteMovie from "./components/FavoriteMovie";
import LoginContainer from "./components/LoginPage/LoginContainer";
import Registration from "./components/RegistrationPage/RegistrationForm"
import {Navigate, Route, Routes} from "react-router";
import {connect} from "react-redux";
import {useSnackbar} from "notistack";
import {findmoviePatch, registrationPatch} from "./utils/variables";
import {AppTypes} from "./app.types";
import {checkAuth} from "./redux/Auth/loginThunk";

const App = ({loginStatus, checkAuth}: AppTypes.IAppProps) => {
    const {enqueueSnackbar} = useSnackbar()
    useEffect(() => {
        checkAuth(enqueueSnackbar)
    }, [checkAuth, enqueueSnackbar]);
    return (
        <div className="app-wrapper">
            <HeaderContainer/>
            <div className="app-wrapper-content">
                <Routes>
                    <Route path="/" element={<Navigate to={findmoviePatch}/>}/>
                    <Route path="/login" element={<LoginContainer/>}/>
                    <Route path={registrationPatch} element={<Registration/>}/>
                    <Route path={findmoviePatch} element={<FindMovieContainer/>}/>
                    {(loginStatus) && <Route path="/favorite " element={<FavoriteMovie/>}/>}
                </Routes>
            </div>
        </div>
    )
}

const StateProps = (state: AppTypes.IAuthStatus) => ({
    loginStatus: state.auth.loginStatus
})

export default connect(StateProps, {checkAuth})(App);
