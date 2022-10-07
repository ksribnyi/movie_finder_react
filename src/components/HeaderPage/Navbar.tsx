import Button from '@mui/material/Button';
import Popover from '@mui/material/Popover';
import PopupState, {bindPopover, bindTrigger} from 'material-ui-popup-state';
import {HeaderTypes} from "./header.types";
import {useNavigate} from "react-router";
import {createTheme, ThemeProvider} from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            light: '#999999',
            main: '#808080',
            dark: '#595959',
            contrastText: '#fff',
        }
    }
});

const Navbar = ({username, logoutClick}: HeaderTypes.INavbar) => {
    const navigate = useNavigate()
    return (
        <ThemeProvider theme={theme}>
            <PopupState variant="popover" popupId="demo-popup-popover">
                {(popupState: any) => (
                    <div>
                        <Button style={{width: 150, marginRight: 20}} variant="contained"
                                size={"large"} {...bindTrigger(popupState)}>
                            {username}
                        </Button>
                        <Popover
                            {...bindPopover(popupState)}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'center',
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'center',
                            }}
                        >
                            <div style={{display: "flex", flexDirection: "column", width: 150}}>
                                <Button style={{borderRadius: 0}} size={"large"} color={"primary"} variant="contained"
                                        onClick={() => navigate("/favorite")}>Favorite</Button>
                                <Button style={{borderRadius: 0}} size={"large"} variant="contained"
                                        onClick={() => logoutClick()}>Logout</Button>
                            </div>
                        </Popover>
                    </div>
                )}
            </PopupState>
        </ThemeProvider>
    )
}

export default Navbar