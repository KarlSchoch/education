import React from 'react';

const Comment = ({ timestamp, user, text }) => {
    return (
        <div className='comment' data-testid='comment-class'>
            Comment's {timestamp} and <span className='user'>{user}</span>
            <br />
            Comment {text}
        </div>
    );
};

export default Comment;
