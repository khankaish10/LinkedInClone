import { Create } from '@material-ui/icons'
import React, { useState, useEffect } from 'react'
import './Feed.css'
import InputOption from './InputOption'
import ImageIcon from '@material-ui/icons/Image';
import YouTubeIcon from '@material-ui/icons/YouTube';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import Post from './Post';
import firebase from 'firebase'
import { db } from '../../../firebase'
import { selectUser } from '../../../features/UserSlice';
import { useSelector } from 'react-redux'

function Feed() {
    const  user = useSelector(selectUser)
    const [input, setInput] = useState('')
    const [posts, setPosts] = useState([])


    useEffect(() => {
        db.collection("posts").orderBy("timestamp","desc").onSnapshot(snapshot => (
            setPosts(snapshot.docs.map(doc => (
                {
                    id: doc.id,
                    data: doc.data()
                }
            )))
        ))
    }, [])
    const sendPost = e => {
        e.preventDefault();

        db.collection("posts").add({
            name: user.displayName,
            description: user.email,
            message: input,
            photoUrl: user.photoURL,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        })
        setInput('')
    }
    return (
        <div className='feed'>
            <div className='feed_inputContainer'>
                <div className='feed_input'>
                    <Create />
                    <form>
                        <input type='text' value={input} onChange={(e) => setInput(e.target.value)} />
                        <button onClick={sendPost} type='submit'>Send</button>
                    </form>
                </div>
                <div className='feed_inputOptions'>
                    <InputOption Icon={ImageIcon} title='Photos' color='#7885f9' />
                    <InputOption Icon={YouTubeIcon} title='Video' color='#E7a33e' />
                    <InputOption Icon={EventNoteIcon} title='Event' color='#edbb71' />
                    <InputOption Icon={CalendarTodayIcon} title='Write article' color='#f5987e' />
                </div>
            </div>
            { posts &&  posts.map(({ id, data: { name, description, message, photoUrl } }) => {
                return <Post
                    key={id}
                    name={name}
                    description={description}
                    message={message}
                    photoUrl={photoUrl}
                />
            })}


        </div>
    )
}

export default Feed
