import React from "react";
import "./findMoviePage/FindMovie.css";
import {useNavigate} from "react-router";
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import {setLoginStatus} from "../redux/ActionsCreators";

type HeaderPropsType = {
    status: boolean,
    setLoginStatus: any
}
type HeaderContainerType = {
    movie: {
        loginStatus: boolean
    },
    setLoginStatus: any
}

const logo = "../assets/image/movies_logo.png"

const HeaderContainer = ({status, setLoginStatus}: HeaderPropsType) => {
    const logClick = (status:boolean) => {
        setLoginStatus(status)
        navigate("/login")
    }

    const navigate = useNavigate()
    return (
        <div className={"header"}>
            <div className={"logoBlock"}>
                <img className={"logo"} alt={"logo"} src={logo}/>
            </div>
            <nav className={"navigate"}>
                <div>
                    <NavLink to={"/findmovie"}
                             style={({isActive}: { isActive: boolean }) => ({
                                 color: isActive ? "#186d74" : "",
                                 fontWeight: isActive ? "bold" : ""
                             })}>Find movie</NavLink>
                </div>
                <div>
                    <NavLink to="/favorite" style={({isActive}: { isActive: boolean }) => ({
                        color: isActive ? "#186d74" : "",
                        fontWeight: isActive ? "bold" : ""
                    })}>My favorite</NavLink>
                </div>
            </nav>
            <div >
                {
                    status ? <p className={"LogIn"} onClick={() => logClick(false)}>Logout</p> :

                        <p className={"LogIn"} onClick={() => logClick(false)}>Login</p>
                }

            </div>
        </div>
    )
}

const mapStateToProps = (state: HeaderContainerType) => ({
    status: state.movie.loginStatus,
})

export default connect(mapStateToProps, {setLoginStatus})(HeaderContainer)
