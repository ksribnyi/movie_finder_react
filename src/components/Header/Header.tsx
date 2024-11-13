import React, {useEffect} from "react";
import "./Header.scss"
import {connect, useDispatch} from "react-redux";
import {clearMovie, clearUserData, setLoginStatus, setSearchBody} from "../../redux/ActionsCreators";
import {HeaderTypes} from "../../types/header.types";
import {findmoviePatch} from "../../constants/constants";
import {NavLink} from "react-router-dom";
import {useNavigate} from "react-router";
import Logo from "../../../src/assets/image/logo.png"
import {Button, TextField} from "@mui/material";
import {requestMovie} from "../../redux/Movie/findMovieThunk";
import DropDownMenu from "../DropDownMenu/DropDownMenu";


const NavBar = ({
                    loginStatus,
                    clearUserData,
                    setLoginStatus,
                    movie,
                    requestMovie,
                }: HeaderTypes.IHeaderProps) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        return () => {
            dispatch(clearMovie([]))
            dispatch(setSearchBody(""))
        }
    }, [dispatch, setSearchBody, clearMovie])

    const findMovie = async () => {
        await requestMovie(movie.bodyInput)
        // dispatch(setSearchBody(""))
    }

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let body = e.target.value
        dispatch(setSearchBody(body))
    }

    const logoutClick = () => {
        clearUserData(null, null)
        localStorage.removeItem("token")
        setLoginStatus(false)
        navigate("/findmovie")
    }
    return (
        <div className={"header_wrapper"}>
            <div className={"logo_wrapper"}>
                <NavLink to={findmoviePatch}><img className={"logo"} alt={"logo"} src={Logo}/></NavLink>
            </div>
            <div className={"control"}>
                <TextField variant={"outlined"} size={"small"} autoComplete={"off"} onChange={onChange}
                           value={movie.bodyInput} placeholder={"Search movie"}/>
                <Button onClick={() => findMovie()} variant="contained">FIND</Button>
            </div>
            <div className={"nav"}>
                <DropDownMenu loginStatus={loginStatus} logoutClick={logoutClick}/>
            </div>

        </div>
    )
}

const StateProps = (state: HeaderTypes.IStateProps) => ({
    loginStatus: state.auth.loginStatus,
    username: state.auth.userData.username,
    movie: state.movie
})

export default connect(StateProps, {clearUserData, setLoginStatus, requestMovie, clearMovie, setSearchBody})(NavBar)