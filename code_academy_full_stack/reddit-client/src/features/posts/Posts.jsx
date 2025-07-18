import React from 'react';
import Post from './Post';

const Posts = () => {
    return (
        <div className='posts'>
            <Post id='123' />
            <Post id='456' />
        </div>
    );
};

export default Posts;