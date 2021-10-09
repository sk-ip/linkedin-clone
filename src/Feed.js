import React, { useState, useEffect } from 'react'
import './Feed.css';
import CreateIcon from '@material-ui/icons/Create';
import InputOption from './InputOption';
import Post from './Post';
import ImageIcon from '@material-ui/icons/Image';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import {db} from './firebase';
import firebase from 'firebase';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice'
import FlipMove from 'react-flip-move';

function Feed() {
    const [posts, setPosts] =  useState([]);
    const [message, setMessage] = useState('');

    const user = useSelector(selectUser);

    useEffect(() => {
        db.collection("posts")
        .orderBy('timestamp', 'desc')
        .onSnapshot(snapshot => (
            setPosts(snapshot.docs.map(doc => (
                {
                    id: doc.id,
                    data: doc.data(),
                }
            )))
        ))
    }, [])

    const sendPost = (event) => {
        event.preventDefault();

        db.collection("posts").add({
            name: user.displayName,
            description: user.email,
            message: message,
            photoUrl: user.photoUrl || "",
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });

        setMessage('');
    }

    return (
        <div className="feed">
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon />
                    <div className="feed__inputForm">
                        <input value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Message" type="text" />
                        <button onClick={sendPost} type="submit">Send</button>
                    </div>
                </div>
                <div className="feed__inputOptions">
                    <InputOption Icon={ImageIcon} title="Photo" color="#70B5F9"/>
                    <InputOption Icon={SubscriptionsIcon} title="Video" color="#E7A33E"/>
                    <InputOption Icon={EventNoteIcon} title="Event" color="#C0CBCD"/>
                    <InputOption Icon={CalendarViewDayIcon} title="Write Article" color="#7FC15E"/>
                </div>
            </div>

            {/* Posts */}
            <FlipMove>
            {
                posts.map(({id, data: {name, description, message, photoUrl }}) => (
                    <Post key={id} name={name} description={description} message={message} photoUrl={photoUrl} />
                ))
            }
            </FlipMove>
        </div>
    )
}

export default Feed
