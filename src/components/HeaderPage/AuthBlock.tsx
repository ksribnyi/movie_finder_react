import { Button } from "@mui/material"
import { useNavigate } from "react-router"
import { registrationPatch } from "../../utils/variables"
import { HeaderTypes } from "./header.types"
import Navbar from "./Navbar";

const AuthBlock = ({loginStatus, username, logoutClick}: HeaderTypes.IAuthBlock) => {
    const navigate = useNavigate()
    return (
        <div className={"authBlock"}>
            {loginStatus ?
                <div style={{width: 225, display: "flex", justifyContent: "flex-end"}}>
                    <Navbar logoutClick={logoutClick} username={username}/>
                </div>
                :
                <div>
                    <Button variant="contained" size="medium" style={{background: "gray", marginRight: 5}} onClick={() => navigate("/login")}>Login</Button>
                    <Button variant="contained" size="medium" style={{background: "gray", marginRight: 5}} onClick={() => navigate(registrationPatch)}>Registration</Button>
                </div>
            }
        </div>
    )
}

export default AuthBlock