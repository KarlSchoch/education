import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Content from '../components/Content/Content';
import MainPage from '../components/MainPage/MainPage';
import PostDetails from '../components/PostDetails/PostDetails';

export default function AppRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Content />}>
                <Route index element={<MainPage />} />
                <Route path='post/:id' element={<PostDetails />} />
            </Route>
        </Routes>
    )
}