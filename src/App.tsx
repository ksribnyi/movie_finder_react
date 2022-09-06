import React, {useEffect} from "react";
import "./App.css";
import FindMovieContainer from "./components/findMoviePage/FindMovieContainer";
import HeaderContainer from "./components/HeaderContainer";
import LoginContainer from "./components/LoginPage/LoginContainer";
import Registration from "./components/RegistrationPage/RegistrationForm"
import {Navigate, Route, Routes} from "react-router";
import {connect} from "react-redux";
import {checkAuth} from "./redux/AuthReducer";
import {useSnackbar} from "notistack";
import {findmoviePatch, registrationPatch} from "./utils/variables";
import WatchLaterContainer from "./components/WatchLaterPage/WatchLaterContainer";

type AppProps = {
    checkAuth: (enqueueSnackbar: any) => void
}

const App = ({checkAuth}: AppProps) => {
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
                    <Route path="/favorite" element={<WatchLaterContainer/>}/>
                </Routes>
            </div>
        </div>
    )
}

export default connect(null, {checkAuth})(App);