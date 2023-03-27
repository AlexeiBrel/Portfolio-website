import React from 'react';
import Navigate from '../Navigate/Navigate';
import cl from './Header.module.scss';

import logo from '/img/logo.png'

const Header = () => {
    return (
        <header className={cl.header}>
            <div className={cl.container}>
                <div className={cl.picture}>
                    <img src={logo} alt='Logo' />
                </div>
                <Navigate />
            </div>
        </header>
    );
};

export default Header;