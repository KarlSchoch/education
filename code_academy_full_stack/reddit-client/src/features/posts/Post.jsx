import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import CommentList from '../comments/CommentList';
import { selectUpVoteCt, selectDownVoteCt, selectCommentCt } from './postSlice';

const Post = () => {
    const { postId } = useParams();

    const upVoteCt = useSelector(selectUpVoteCt(postId));
    const downVoteCt = useSelector(selectDownVoteCt(postId));
    const commentCt = useSelector(selectCommentCt(postId));

    return (
        <div className='post'>
            {/* Add conditional making text a link if you're on the main page */}
            Main body of the post that includes text, photo
            <br />
            <ul>
                <li>Upvotes: {upVoteCt}</li>
                <li>Downvotes: {downVoteCt}</li>
                <li>Comment Count: {commentCt}</li>
            </ul>
            Time and <span className='user'>user</span>
            <hr />
            {postId && <CommentList />}
        </div>
    );
};

export default Post;