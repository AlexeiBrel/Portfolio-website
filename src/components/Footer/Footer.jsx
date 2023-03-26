import React from 'react';
import { BsGithub, BsTelegram, BsLinkedin } from 'react-icons/bs';
import cl from './Footer.module.scss';

const Footer = () => {
    return (
        <footer className={cl.footer}>
            <div className={cl.container}>
                <div className={cl.social__link}>
                    <a href='#'><BsGithub /></a>
                    <a href='#'><BsTelegram /></a>
                    <a href='#'><BsLinkedin /></a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;