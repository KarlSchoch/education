import React from 'react';
import Comment from './Comment';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import { selectComments } from '../posts/postSlice'

const CommentList = () => {

    const { id } = useParams();
    console.log('id', id)
    const commentList = useSelector(selectComments(id));
    console.log('commentList', commentList)

    return (
        <div className='comment-list'>
            { }
            <Comment />
            <Comment />
        </div>
    );
};

export default CommentList;
