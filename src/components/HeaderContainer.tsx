import React from "react";
import "./findMoviePage/FindMovie.css"
import {useNavigate} from "react-router";
import {NavLink} from "react-router-dom";

const logo = "./image/movies_logo.png"

const HeaderContainer: React.FC = () => {
    const navigate = useNavigate()
    return (
        <div className={"header"}>
            <div>
                <img className={"logo"} alt={"logo"} src={logo}/>
            </div>
            <nav>
                <div>
                    <NavLink to={"/findmovie"}
                             style={({isActive}: { isActive: boolean }) => ({
                                 color: isActive ? "#186d74" : "",
                                 fontWeight: isActive ? "bold" : ""
                             })}>Find movie</NavLink>
                </div>
                <div>
                    <NavLink to="/favorite" style={({isActive}: { isActive: boolean }) => ({
                        color: isActive ? "#186d74" :" ''",
                        fontWeight: isActive ? "bold" : ""
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