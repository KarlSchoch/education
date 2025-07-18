import React from 'react';
import CommentToggle from '../comments/CommentToggle';
import CommentList from '../comments/CommentList';
import { useSelector, useDispatch } from 'react-redux';
import { selectUpVoteCt, selectDownVoteCt } from './postSlice';

const Post = ({ id }) => {
    console.log('hitting the post')
    console.log('id', id)
    const upVoteCt = useSelector(selectUpVoteCt(id));
    const downVoteCt = useSelector(selectDownVoteCt(id));
    console.log('upVoteCt', upVoteCt)
    console.log('downVoteCt', downVoteCt)

    return (
        <div className='post'>
            Main body of the post that includes text, photo
            <br />
            <ul>
                <li>Upvotes: {upVoteCt}</li>
                <li>Downvotes: {downVoteCt}</li>
            </ul>
            Time and <span className='user'>user</span>
            <hr />
            <CommentToggle />
            <CommentList />
        </div>
    );
};

export default Post;