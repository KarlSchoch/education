import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router';
import CommentList from '../comments/CommentList';
import { 
    selectUpVoteCt,
    selectDownVoteCt,
    selectCommentCt,
    selectTitle,
    fetchPostDetails,
    selectSubreddit,
    selectStatus,
} from './postSlice';

const Post = ({ postId, mainPage }) => {
    const dispatch = useDispatch();

    const upVoteCt = useSelector(selectUpVoteCt(postId));
    const downVoteCt = useSelector(selectDownVoteCt(postId));
    const commentCt = useSelector(selectCommentCt(postId));
    const title = useSelector(selectTitle(postId));
    const subreddit = useSelector(selectSubreddit(postId));
    const status = useSelector(selectStatus)

    console.log("subreddit", subreddit);
    console.log("postId", postId);
    
    useEffect(() => {
        dispatch(fetchPostDetails(postId, subreddit))
    }, [dispatch, postId, subreddit])
    // useEffect()
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
            {!mainPage && status !== 'succeeded' && (
                <div data-testid='comment-fetch-warning' className='stale-content-warning'>
                    Oops!  We are not displaying comments becuase we couldn't fetch  them from the server.
                </div>
            )}
            {!mainPage && <CommentList />}
        </div>
    );
};

export default Post;