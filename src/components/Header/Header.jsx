import React from 'react';
import Navigate from '../Navigate/Navigate';
import cl from './Header.module.scss';

const Header = () => {
    return (
        <header className={cl.header}>
            <div className={cl.container}>
                <h2>Portfolio</h2>
                <Navigate />
            </div>
        </header>
    );
};

export default Header;