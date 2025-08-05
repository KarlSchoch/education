import React from 'react';
import Comment from './Comment';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import { selectComments } from '../posts/postSlice'

const CommentList = () => {

    const { id } = useParams();
    const commentList = useSelector(selectComments(id));

    return (
        commentList?.length > 0 ? (
            <div className='comment-list'>
                {
                    commentList.map((comment, idx) => {
                        return (
                            <Comment 
                                timestamp={comment.timestamp} 
                                user={comment.user}
                                text={comment.text}
                                key={idx}
                            />
                        )
                    })
                }
            </div>
        ) : (
            <div data-testid='no-content-warning' className='no-content-warning'>
                No comments found for this post.
            </div>
        )
    );
};

export default CommentList;
