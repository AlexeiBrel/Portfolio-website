import React from 'react';
import cl from './ContactsPage.module.scss';

const ContactsPage = () => {
    return (
        <>
            <section className={cl.container}>
                <h1>Contacts</h1>
                <ul className={cl.contact__list}>
                    <li className={cl.cantact__item}>
                        <h2>Location</h2>
                        <p>Minsk, Belarus</p>
                    </li>
                    <li className={cl.cantact__item}>
                        <h2>Phone / Telegram</h2>
                        <p><a href="tel:+375336803591">+375(33) 680-35-91</a></p>
                    </li>
                    <li className={cl.cantact__item}>
                        <h2>Email</h2>
                        <p><a href="mailto:alexei.brel@mail.ru">alexei.brel@mail.ru</a></p>
                    </li>
                </ul>
            </section>
        </>
    );
};

export default ContactsPage;