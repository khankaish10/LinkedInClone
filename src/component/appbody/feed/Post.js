import Avatar  from '@material-ui/core/Avatar'
import React from 'react'
import InputOption from './InputOption'
import ThumbUpOutlinedIcon from '@material-ui/icons/ThumbUpOutlined';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import './Post.css'

function Post({ name, description, message, photoUrl }) {
    return (
        <div className='post'>
            <div className='post_header'>
                <Avatar src={photoUrl}>{name[0]}</Avatar>
                <div className='post_info'>
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
            </div>
            <div className='post_body'>
                <p>{message}</p>
            </div>
            <div className='post_buttons'>
                <InputOption Icon={ThumbUpOutlinedIcon} title='Like' color='gray' />
                <InputOption Icon={ChatBubbleOutlineOutlinedIcon} title='Comment' color='gray' />
                <InputOption Icon={ShareOutlinedIcon} title='Like' color='Share' />
                <InputOption Icon={SendOutlinedIcon} title='Like' color='Send' />
            </div>
        </div>
    )
}

export default Post
