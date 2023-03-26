import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';

import cl from './LayoutPage.module.scss';

const LayoutPage = () => {
    return (
        <div className={cl.wrapper}>
            <Header />
            <main className={cl.main}>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default LayoutPage;