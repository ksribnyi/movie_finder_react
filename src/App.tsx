import React, {useEffect} from "react";
import "./App.css";
import Header from "./components/Header/Header";
import {Navigate, Route, Routes} from "react-router";
import {connect} from "react-redux";
import {useSnackbar} from "notistack";
import {findmoviePatch, registrationPatch} from "./constants/constants";
import WatchLater from "./pages/WatchLater/WatchLater";
import {checkAuth} from "./redux/Auth/loginThunk";
import {AppTypes} from "./app.types";
import LoginContainer from "./components/LoginPage/LoginContainer";
import Settings from "./pages/Settings/Settings";
import FindMovie from "./pages/FindMovie/FindMovie";
import Registration from "./components/Registration/Registration";
import {HeaderTypes} from "./types/header.types";

const App = ({checkAuth, showLoginModal}: AppTypes.IAppProps) => {
    const {enqueueSnackbar} = useSnackbar()
    useEffect(() => {
        checkAuth(enqueueSnackbar)
    }, [checkAuth, enqueueSnackbar]);
    return (
        <div className="app-wrapper">
            <Header/>
            <div className="app-wrapper-content">
                <Routes>
                    <Route path="/" element={<Navigate to={findmoviePatch}/>}/>
                    <Route path="/login" element={<LoginContainer/>}/>
                    <Route path={registrationPatch} element={<Registration/>}/>
                    <Route path={findmoviePatch} element={<FindMovie/>}/>
                    <Route path="/favorite" element={<WatchLater/>}/>
                    <Route path="/settings" element={<Settings/>}/>
                </Routes>
                {showLoginModal && <LoginContainer/>}
            </div>
        </div>
    )
}

const StateProps = (state: HeaderTypes.IStateProps) => ({
    showLoginModal: state.auth.showLoginModal
})

export default connect(StateProps, {checkAuth})(App);