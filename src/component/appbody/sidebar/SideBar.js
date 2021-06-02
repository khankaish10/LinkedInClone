import { Avatar } from '@material-ui/core'
import React from 'react'
import { selectUser } from '../../../features/UserSlice'
import './SideBar.css'

import { useSelector } from 'react-redux'

function SideBar() {
    const user = useSelector(selectUser)
    const recentItem = (topic) => {
        return <div className='sidebar_recentItem'>
            <span className='sidebar_hash'>#</span>
            <p>{topic}</p>
        </div>
    }
    return (
        <>
        <div className='sidebar'>
            <div className='sidebar_top'>
                <img
                    src='https://images.unsplash.com/photo-1579546929662-711aa81148cf?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHw%3D&w=1000&q=80'
                    alt=''
                />
                <Avatar src={user.photoURL} className='sidebar_avatar'>
                    {user.email[0]}
                </Avatar>
                <h2>{user?.displayName}</h2>
                <h4>{user?.email}</h4>
            </div>
            <div className='sidebar_stats'>
                <div className='sidebar_stat'>
                    <p>Who viewes you </p>
                    <p className='sidebar_statNumber'>2,435</p>
                </div>
                <div className='sidebar_stat'>
                    <p>Views of your post</p>
                    <p className='sidebar_statNumber'>2,475</p>
                </div>
            </div>
            <div className='sidebar_bottom'>
                <p>Recent</p>
                {recentItem('Reactjs')}
                {recentItem('programming')}
                {recentItem('html')}
                {recentItem('css')}
                {recentItem('nodejs')}
            </div>
        </div>
        </>
    )
}

export default SideBar
