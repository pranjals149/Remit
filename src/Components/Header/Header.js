import React from 'react'
import './Header.css';

import SearchIcon from '@material-ui/icons/Search'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import AppsIcon from '@material-ui/icons/Apps'
import { IconButton, Avatar } from '@material-ui/core';
import NotificationsIcon from '@material-ui/icons/Notifications';
import LoginImg from '../../assets/Login.svg';
import { logout, selectUser } from '../../features/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from '../../firebase';

const Header = () => {

    const user = useSelector(selectUser);
    const dispatch = useDispatch();

    const signOut = () => {
        auth.signOut().then(() => {
            dispatch(logout());
        })
    }

    return (
        <div className='header'>
            <div className='header__left'>
                <img src={LoginImg} alt='' />
            </div>

            <div className='header__middle'>
                <SearchIcon />
                <input placeholder='Search' type='text' />
                <ArrowDropDownIcon className='header__inputCaret' />
            </div>

            <div className='header__right'>
                <IconButton>
                    <AppsIcon />
                </IconButton>

                <IconButton>
                    <NotificationsIcon />
                </IconButton>

                <Avatar className='header__avatar' onClick={signOut} src={user?.photoUrl} />
            </div>
        </div>
    )
}

export default Header
