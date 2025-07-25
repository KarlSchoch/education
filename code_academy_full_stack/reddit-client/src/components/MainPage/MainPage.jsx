import React from 'react';
import Posts from '../../features/posts/Posts';
import Subreddits from '../../features/subreddits/Subreddits'
import SubredditsMobile from '../../features/subreddits/SubredditsMobile'

const MainPage = () => {
    
    return (
        <div className='main-page'>
            <SubredditsMobile />
            <Posts />
            <Subreddits />
        </div>
    );
};

export default MainPage;