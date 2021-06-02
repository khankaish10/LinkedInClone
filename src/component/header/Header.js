import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import './Header.css'
import HeaderOption from './HeaderOption';
import HomeIcon from '@material-ui/icons/Home';
import PeopleIcon from '@material-ui/icons/People';
import WorkIcon from '@material-ui/icons/Work';
import MessageIcon from '@material-ui/icons/Message';
import NotificationsIcon from '@material-ui/icons/Notifications';

import {useDispatch} from 'react-redux'
import {logout} from '../../features/UserSlice'
import { auth } from '../../firebase'

function Header() {
    
    const dispatch = useDispatch()

    const logoutOfApp = () => {
        dispatch(logout())
        auth.signOut();
    }
    return (
        <div className='header'>
           
           <div className='header_left'>
                <img 
                    className='logo'
                    src='https://image.flaticon.com/icons/png/512/174/174857.png'
                    alt='linkedIn logo' 
                />
                <div className='header_search'>
                    <SearchIcon />
                    <input type='text' placeholder='Search' />
                </div>
            </div>
            <div className='header_right'>
                <HeaderOption Icon={HomeIcon} title='Home' />
                <HeaderOption Icon={PeopleIcon} title='My Network' />
                <HeaderOption Icon={WorkIcon} title='Jobs' />
                <HeaderOption Icon={MessageIcon} title='Messaging' />
                <HeaderOption Icon={NotificationsIcon} title='Notifications' />
                <HeaderOption onclick={logoutOfApp} avatar title='logout' />
            </div>
           
        </div>
    )
}

export default Header
