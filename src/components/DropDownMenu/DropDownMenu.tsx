import React from 'react';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import ListDivider from '@mui/joy/ListDivider';
import Home from "../../assets/image/home.png";
import Favorite from "../../../src/assets/image/favorite.png";
import Settings from "../../assets/image/settings.png";
import "./DropDownMenu.scss";
import {NavLink} from "react-router-dom";
import {Dropdown, Menu, MenuButton, MenuItem} from "@mui/joy";
import MenuIcon from '@mui/icons-material/Menu';
import AuthController from "../AuthController/AuthController";


const options = [
    {value: '/findmovie', label: 'Home', src: Home},
    {value: '/favorite', label: 'Favorite', src: Favorite},
    {value: '/settings', label: 'Settings', src: Settings},
];


const DropDownMenu = ({loginStatus, logoutClick}: {
    loginStatus: boolean,
    logoutClick: () => void,
}) => {

    return (
        <Dropdown>
            <MenuButton>
                <MenuIcon/>
            </MenuButton>
            <Menu className={"menu"}>
                {options.map((option, index) => (
                    <NavLink to={option.value} key={option.value} className={"link"}>
                        <MenuItem>
                            <ListItemDecorator>
                                <figure className={"icon"}>
                                    <img alt={option.label} src={option.src}/>
                                </figure>
                            </ListItemDecorator>
                            {option.label}
                        </MenuItem>
                        <ListDivider className={"divider"} role="none" inset="startContent"/>
                    </NavLink>
                ))}
                <AuthController loginStatus={loginStatus} logoutClick={logoutClick}/>
            </Menu>
        </Dropdown>
    );
}

export default DropDownMenu;
