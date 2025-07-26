import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router';
import CommentList from '../comments/CommentList';
import { selectUpVoteCt, selectDownVoteCt, selectCommentCt, selectTitle } from './postSlice';

const Post = ({ postId, mainPage }) => {

    const upVoteCt = useSelector(selectUpVoteCt(postId));
    const downVoteCt = useSelector(selectDownVoteCt(postId));
    const commentCt = useSelector(selectCommentCt(postId));
    const title = useSelector(selectTitle(postId));
    // add selectors for the following
    //  text
    //  subreddit
    //  img
    //  timePosted
    //  user

    return (
        <div className='post'>
            {
                mainPage ? <Link to={`/post/${postId}`}>{title}</Link> : <p>{title}</p>
            }
            <ul>
                <li>Upvotes: {upVoteCt}</li>
                <li>Downvotes: {downVoteCt}</li>
                <li>Comment Count: {commentCt}</li>
            </ul>
            Time and <span className='user'>user</span>
            <hr />
            {!mainPage && <CommentList />}
        </div>
    );
};

export default Post;