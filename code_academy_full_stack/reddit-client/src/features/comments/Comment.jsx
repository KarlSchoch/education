import React from 'react';

const Comment = () => {
    return (
        <div className='comment' data-testid='comment-class'>
            Comment's Time and <span className='user'>user</span>
            <br />
            Comment text
        </div>
    );
};

export default Comment;
