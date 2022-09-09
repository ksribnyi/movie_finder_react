import React from "react";
import "../findMoviePage/FindMovie.css";
import {useNavigate} from "react-router";
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import {Button} from "@mui/material";
import {findmoviePatch} from "../../utils/variables";
import {clearUserData, setLoginStatus} from "../../redux/ActionsCreators";
import {HeaderTypes} from "./header.types";

const logo = "../assets/image/movies_logo.png"

const HeaderContainer = ({loginStatus, username, clearUserData, setLoginStatus}: HeaderTypes.IHeaderProps) => {
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
                    })}>My favorite</NavLink>
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

const StateProps = (state: HeaderTypes.StateProps) => ({
    loginStatus: state.auth.loginStatus,
    username: state.auth.userData.username
})

export default connect(StateProps, {clearUserData, setLoginStatus})(HeaderContainer)
