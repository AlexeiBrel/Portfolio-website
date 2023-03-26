import React from 'react';
import { NavLink } from 'react-router-dom';

import cl from './Navigate.module.scss';

const MENU = [
    { id: 1, title: 'Home', path: '/' },
    { id: 2, title: 'Projects', path: '/projects' },
    { id: 3, title: 'Contacts', path: '/contacts' },
]

const setActive = ({ isActive }) => isActive ? cl.active : undefined;

const Navigate = () => {
    return (
        <nav className={cl.nav}>
            <ul>
                {
                    MENU.map(item => <li key={item.id}><NavLink className={setActive} to={item.path}>{item.title}</NavLink></li>)
                }
            </ul>
        </nav>
    );
};

export default Navigate;