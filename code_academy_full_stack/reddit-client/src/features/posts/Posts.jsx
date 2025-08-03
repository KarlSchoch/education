import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectPostIds, fetchPosts } from './postSlice';
import Post from './Post';

const Posts = () => {
    const [userWarning, setUserWarning] = useState(false);
    const dispatch = useDispatch();

    let mainPage = false;
    let idList;

    const { id } = useParams();
    const idListFromStore = useSelector(selectPostIds);

    if (!id) {
        mainPage = true;
        idList = idListFromStore;
    }  else {
        idList = [id]
    }

    useEffect(() => {
        if (mainPage) {
            dispatch(fetchPosts())
                .unwrap()
                .catch(() => setUserWarning(true));
        }
        
    }, [dispatch, mainPage])
    
    
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