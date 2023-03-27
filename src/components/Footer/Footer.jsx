import React from 'react';
import { BsGithub, BsTelegram, BsLinkedin } from 'react-icons/bs';
import cl from './Footer.module.scss';

const CONTACTS = [
    { id: 1, link: 'https://github.com/AlexeiBrel', icon: <BsGithub /> },
    { id: 2, link: 'https://t.me/Alexei_017', icon: <BsTelegram /> },
    { id: 3, link: 'https://www.linkedin.com/in/alexeibrel', icon: <BsLinkedin /> },
]

const Footer = () => {
    return (
        <footer className={cl.footer}>
            <div className={cl.container}>
                <div className={cl.social__link}>
                    {CONTACTS.map(item => <a key={item.id} target="_blank" href={item.link}>{item.icon}</a>)}
                </div>
            </div>
        </footer>
    );
};

export default Footer;