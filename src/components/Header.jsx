import React from 'react';
import './../../public/css/main.css'
import Button from './../components/Button';
import LiLink from './LiLink';
import { IoMenu } from "react-icons/io5";

const Header = () => {
    return (
        <header id="header" className="header d-flex align-items-center fixed-top">
            <div className="container-fluid container-xl position-relative d-flex align-items-center">

                <a href="index.html" className="logo d-flex align-items-center me-auto">
                    <img src="./images/gtl-logo-white.png" alt="" />
                </a>

                <nav id="navmenu" className="navmenu">
                    <ul>
                        <LiLink />
                    </ul>
                    {/* <i className="mobile-nav-toggle d-xl-none bi bi-list"></i> */}
                    <IoMenu className="mobile-nav-toggle d-xl-none bi bi-list"/>
                </nav>

                <Button />

            </div>
        </header>
    )
}

export default Header