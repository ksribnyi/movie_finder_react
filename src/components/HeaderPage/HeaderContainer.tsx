import React from "react";
import "../findMoviePage/FindMovie.css";
import {connect} from "react-redux";
import {clearUserData, setLoginStatus} from "../../redux/ActionsCreators";
import {HeaderTypes} from "./header.types";
import AuthBlock from "./AuthBlock";
import {findmoviePatch} from "../../utils/variables";
import {NavLink} from "react-router-dom";
import {useNavigate} from "react-router";

const logo = require("../../../src/assets/image/logo.png")

const HeaderContainer = ({loginStatus, username, clearUserData, setLoginStatus}: HeaderTypes.IHeaderProps) => {
    const navigate = useNavigate()
    const logoutClick = () => {
        clearUserData(null, null)
        localStorage.removeItem("token")
        setLoginStatus(false)
        navigate("/findmovie")
    }
    return (
        <div className={"header"}>
            <div className={"logoBlock"}>
                <NavLink to={findmoviePatch}><img className={"logo"} alt={"logo"} src={logo}/></NavLink>
            </div>
            <AuthBlock loginStatus={loginStatus} username={username} logoutClick={logoutClick}/>
        </div>
    )
}

const StateProps = (state: HeaderTypes.IStateProps) => ({
    loginStatus: state.auth.loginStatus,
    username: state.auth.userData.username
})

export default connect(StateProps, {clearUserData, setLoginStatus})(HeaderContainer)