import React from 'react';
import Posts from './Posts';
import Subreddits from './Subreddits'
import SubredditsMobile from './SubredditsMobile'

const Content = () => {
    return (
        <div className='content'>
            <SubredditsMobile />
            <Posts />
            <Subreddits />
      </div>
    );
};

export default Content;