import { Avatar } from '@material-ui/core'
import React from 'react'
import { selectUser } from '../../features/UserSlice'
import './HeaderOption.css'
import { useSelector } from 'react-redux'

function HeaderOption({onclick, avatar, Icon, title}) {
    const user = useSelector(selectUser)
    return (
        <div className='headerOption'>
            {Icon && <Icon className='headerOption_icon' />}
            {avatar && <Avatar className='headerOption_icon' src={user?.photoURL} onClick={onclick}
            >{user?.email[0]}</Avatar>}
            <h3 className='headerOption_title'>{title}</h3>
        </div>
    )
}

export default HeaderOption
