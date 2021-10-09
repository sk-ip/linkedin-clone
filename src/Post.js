import { Avatar } from '@material-ui/core';
import React, { forwardRef } from 'react'
import './Post.css';
import InputOption from './InputOption';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';

const Post = forwardRef(({ data }, ref) => {
    return (
        <div ref={ref} className="post">
            <div className="post__header">
                <Avatar src={data.photoUrl}>{data.name[0]}</Avatar>
                <div className="post__info">
                    <h3>{data.name}</h3>
                    <p>{data.description}</p>
                </div>
            </div>

            <div className="post__body">
                <p>{data.message}</p>
                {
                    data.imageUrl
                    ? <img className="post__image" src={data.imageUrl} />
                    : ""
                }
            </div>

            <div className="post__buttons">
                <InputOption Icon={ThumbUpAltOutlinedIcon} title="Like" color="gray" />
                <InputOption Icon={ChatOutlinedIcon} title="Comment" color="gray" />
                <InputOption Icon={ShareOutlinedIcon} title="Share" color="gray" />
                <InputOption Icon={SendOutlinedIcon} title="Send" color="gray" />
            </div>
        </div>
    )
})

export default Post
