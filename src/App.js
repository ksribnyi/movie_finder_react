import React from "react";
import { Route, Routes} from "react-router-dom";
import {Navigate} from "react-router";
import HeaderContainer from "./components/HeaderContainer";
import FindMovieContainer from "./components/FindMovieContainer";
import './App.css';
import Login from "./components/Login";
import FavoriteMovie from "./components/FavoriteMovie";

const App = (props) => {
    return (
        <div className='app-wrapper'>
            <HeaderContainer/>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path="/" element={<Navigate to={`/findmovie`}/>}/>
                    <Route path='/findmovie' element={<FindMovieContainer />}/>
                    <Route path='/favorite' element={<FavoriteMovie/>}/>
                    <Route path='/login' element={<Login />}/>
                </Routes>
            </div>

        </div>
    )
}

export default App

