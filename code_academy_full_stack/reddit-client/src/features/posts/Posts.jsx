import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectPostIds } from './postSlice';
import Post from './Post';

const Posts = () => {

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
            {
                idList.map((id) => {
                    return <Post key={id} postId={id} mainPage={mainPage} />
                })
            }
        </div>
    );
};

export default Posts;