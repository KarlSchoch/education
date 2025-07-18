import React from 'react';
import Posts from '../features/posts/Posts';
import Subreddits from '../features/subreddits/Subreddits'
import SubredditsMobile from '../features/subreddits/SubredditsMobile'

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