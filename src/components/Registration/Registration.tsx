import React from "react";
import Modal from '@mui/joy/Modal'
import {Sheet} from "@mui/joy";
import {useNavigate} from "react-router";
import {findmoviePatch} from "../../constants/constants";
import RegistrationForm from "./RegistrationForm/RegistrationForm";


const Registration = () => {
    const navigate = useNavigate()

    const handleCloseModal = () => {
        navigate(findmoviePatch)
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
                <RegistrationForm/>
            </Sheet>

        </Modal>
    )
}

export default Registration