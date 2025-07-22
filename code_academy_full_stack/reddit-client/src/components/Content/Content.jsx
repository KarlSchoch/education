import React from 'react';
import { Outlet } from 'react-router-dom';
import Posts from '../../features/posts/Posts';
import Subreddits from '../../features/subreddits/Subreddits'
import SubredditsMobile from '../../features/subreddits/SubredditsMobile'

const Content = () => {
    console.log("showing content component")
    return (
        <div className='content'>
            <Outlet />
        </div>
    );
};

export default Content;