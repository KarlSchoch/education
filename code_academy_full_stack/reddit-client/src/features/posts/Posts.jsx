import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectPostIds } from './postSlice';
import Post from './Post';

const Posts = () => {
    const [userWarning, setUserWarning] = useState(false);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const url = 'https://www.reddit.com/r/popular.json'
                const res = await fetch(url)
                if (!res.ok) {
                    setUserWarning(true);
                    return;
                }
                const data = await res.json()
            } catch(err) {
                setUserWarning(true);
            }
        };

        fetchPosts();
    })

    // Define parameters for rendering post content
    let idList;
    let mainPage = false;
    // Attempt to pull the postId out of the params
    let { id } = useParams();
    idList = [id]
    // If id is null, because we are on the main page, create the list based on the state
    if (!id) {
        idList = useSelector(selectPostIds)
        mainPage = true;
    }
    
    return (
        <div className='posts'>
            {userWarning && (
                <div data-testid='post-fetch-warning' className='stale-content-warning'>
                    Oops!  We are displaying cached posts becuase we couldn't fetch from the server.
                </div>
            )}
            {
                idList.map((id) => {
                    return <Post key={id} postId={id} mainPage={mainPage} />
                })
            }
        </div>
    );
};

export default Posts;