import React from "react";
import logo from "./../asets/image/movies_logo.png"
import "./FindMovie.css"
import {useNavigate} from "react-router";
import {NavLink} from "react-router-dom";

const HeaderContainer = () => {
    const navigate = useNavigate()
    return (
        <div className={'header'}>
            <div>
                <img className={'logo'} alt={"logo"} src={logo}/>
            </div>
            <nav >
                <div >
                    <NavLink to={'/findmovie'}
                             style={({isActive}) => ({
                                 color: isActive ? '#186d74' : null,
                                 fontWeight: isActive ? 'bold' : null
                             })}>Find movie</NavLink>
                </div>
                <div >
                    <NavLink to='/favorite' style={({isActive}) => ({
                        color: isActive ? '#186d74' : null,
                        fontWeight: isActive ? 'bold' : null
                    })}>My favorite</NavLink>
                </div>
            </nav>
            <div>
                <button onClick={() => navigate("/login")}>Login</button>
            </div>
        </div>
    )
}

export default HeaderContainer