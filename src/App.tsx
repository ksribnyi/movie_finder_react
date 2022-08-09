import React from "react";
import "./App.css";
import FindMovieContainer from "./components/findMoviePage/FindMovieContainer";
import HeaderContainer from "./components/HeaderContainer";
import FavoriteMovie from "./components/FavoriteMovie";
import LoginContainer from "./components/LoginPage/LoginContainer";
import Registration from "./components/RegistrationPage/RegistrationForm"
import {Navigate, Route, Routes} from "react-router";

function App() {
    return (
        <div className="app-wrapper">
            <HeaderContainer/>
            <div className="app-wrapper-content">
                <Routes>
                    <Route path="/" element={<Navigate to={"/findmovie"}/>}/>
                    <Route path="/findmovie" element={<FindMovieContainer/>}/>
                    <Route path="/favorite " element={<FavoriteMovie/>}/>
                    <Route path="/login" element={<LoginContainer/>}/>
                    <Route path="/registration" element={<Registration/>}/>
                </Routes>
            </div>
        </div>
    )
}

export default App;
