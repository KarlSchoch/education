import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectPostIds, fetchPosts } from './postSlice';
import Post from './Post';

const Posts = () => {
    const [userWarning, setUserWarning] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPosts())
            .unwrap()
            .catch(() => setUserWarning(true));
        fetchPosts();
    }, [dispatch])

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