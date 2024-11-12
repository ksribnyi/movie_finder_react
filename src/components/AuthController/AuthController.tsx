import {Button} from "@mui/material"
import {useNavigate} from "react-router"
import {HeaderTypes} from "../../types/header.types"
import "./AuthController.scss"

const AuthController = ({loginStatus, logoutClick}: HeaderTypes.IAuthBlock) => {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate("/login")
    }
    return (
        <div className={"auth_wrapper"}>
            {loginStatus ?
                <Button variant="contained"
                        onClick={() => logoutClick()}>Sign up</Button>
                :
                <>
                    <Button variant="contained"
                            onClick={handleClick}>Sign in</Button>
                </>
            }
        </div>
    )
}

export default AuthController