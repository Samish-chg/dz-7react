import React from 'react';
import {Link, Outlet} from "react-router-dom";
import "./Layout.css"


const Layout = () => {
    return (
        <div>

            <header>
                <Link to="/">Главная</Link>
                <Link to="/about">Инфо</Link>
                <Link to="/posts">Посты</Link>
                <Link to="/images">Картинки</Link>
            </header>


            <Outlet/>

        </div>
    );
};

export default Layout;
