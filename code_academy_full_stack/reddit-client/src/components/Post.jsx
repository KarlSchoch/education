import React from 'react';
import CommentToggle from './CommentToggle';
import CommentList from './CommentList';

const Post = () => {
    return (
        <div className='post'>
            Main body of the post that includes text, photo
            <br />
            Time and <span className='user'>user</span>
            <hr />
            <CommentToggle />
            <CommentList />
        </div>
    );
};

export default Post;