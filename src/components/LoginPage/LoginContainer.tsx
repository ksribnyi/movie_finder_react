import React from "react";
import LoginForm from "./LoginForm/LoginForm";
import {connect} from "react-redux";
import {LoginTypes} from "../../types/login.types";
import {login} from "../../redux/Auth/loginThunk";
import Modal from '@mui/joy/Modal'
import {Sheet} from "@mui/joy";
import {useNavigate} from "react-router";
import {findmoviePatch} from "../../constants/constants";
import {setShowLoginModal} from "../../redux/ActionsCreators";


const LoginContainer = ({login, setShowLoginModal}: LoginTypes.ILoginContainer) => {
    const navigate = useNavigate()

    const handleCloseModal = () => {
        navigate(findmoviePatch)
        setShowLoginModal(false)
    }

    return (
        <Modal aria-labelledby="modal-title"
               aria-describedby="modal-desc"
               open={true}
               onClose={handleCloseModal}
               sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', minWidth: 300}}>

            <Sheet
                variant="outlined"
                sx={{width: 300, borderRadius: 'md', p: 3, boxShadow: 'lg'}}
            >
                <LoginForm login={login} setShowLoginModal={setShowLoginModal}/>
            </Sheet>

        </Modal>
    )
}


export default connect( null,{login, setShowLoginModal})(LoginContainer);