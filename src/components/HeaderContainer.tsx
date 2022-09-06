import React from "react";
import "./findMoviePage/FindMovie.css";
import {useNavigate} from "react-router";
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import {clearUserData, setLoginStatus,} from "../redux/AuthReducer";
import {Button} from "@mui/material";
import {findmoviePatch} from "../utils/variables";

type HeaderPropsType = {
    loginStatus: boolean,
    username?: string,
    clearUserData: (email: null, username: null) => { type: string, email: null, username: null },
    setLoginStatus: (status: boolean) => { type: string, status: boolean }
}

type AuthStatus = {
    auth: {
        loginStatus: boolean,
        userData: {
            username: string
        }
    }
}

const logo = "../assets/image/movies_logo.png"

const HeaderContainer = ({loginStatus, username, clearUserData, setLoginStatus}: HeaderPropsType) => {
    const logClick = () => {
        clearUserData(null, null)
        localStorage.removeItem("token")
        setLoginStatus(false)
    }
    const navigate = useNavigate()
    return (
        <div className={"header"}>
            <div className={"logoBlock"}>
                <img className={"logo"} alt={"logo"} src={logo}/>
            </div>
            <nav className={"navigate"}>
                <div>
                    <NavLink to={findmoviePatch}
                             style={({isActive}: { isActive: boolean }) => ({
                                 color: isActive ? "#186d74" : "",
                                 fontWeight: isActive ? "bold" : ""
                             })}>Find movie</NavLink>
                </div>
                {loginStatus && <div>
                    <NavLink to="/favorite" style={({isActive}: { isActive: boolean }) => ({
                        color: isActive ? "#186d74" : "",
                        fontWeight: isActive ? "bold" : ""
                    })}>Watch Later</NavLink>
                </div>}
            </nav>
            {loginStatus && <div>{username}</div>}
            <div>
                {loginStatus ?
                    <Button className={"LogIn"} onClick={() => logClick()}>Logout</Button> :
                    <p className={"LogIn"} onClick={() => navigate("/login")}>login</p>
                }

            </div>
        </div>
    )
}

const mapStateToProps = (state: AuthStatus) => ({
    loginStatus: state.auth.loginStatus,
    username: state.auth.userData.username
})

export default connect(mapStateToProps, {clearUserData, setLoginStatus})(HeaderContainer)
