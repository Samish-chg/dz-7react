import React from 'react';
import {Link, Route, Routes} from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Posts from "./pages/Posts.jsx";
import NotFound from "./pages/NotFound.jsx";
import Layout from "./Components/Layout.jsx";
import Images from "./pages/Images.jsx";

const App = () => {
    return (
        <div>
            <Routes>
                <Route path = '/' element={<Layout/>}>
                    <Route index element={<Home/>}/>
                    <Route path = '/about' element={<About/>}/>
                    <Route path = '/posts' element={<Posts/>}/>
                    <Route path= '*' element={<NotFound/>}/>
                    <Route path= '/images' element={<Images/>}/>
                </Route>
            </Routes>
        </div>
    );
};

export default App;