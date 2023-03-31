import React from 'react';
import cl from './HomePage.module.scss';

const HomePage = () => {
    return (
        <>
            <section className={cl.hero}>
                <div className={cl.container}>
                    <h1>
                        <strong>Hi, my name is <em>Alexey</em></strong><br />
                        a frontend developer
                    </h1>
                    <p> with passion for learning and creating. </p>
                    <a href='/public/Resume.pdf' download className={cl.btn}>Download CV</a>
                </div>
            </section>
            <section className={cl.technologies}>
                <div className={cl.container}>
                    <div className={cl.list__item}>
                        <div className={cl.item}>
                            <h2 className={cl.item__title}>Frontend</h2>
                            <p>JavaScript, ReactJS, jQuery, AJAX, HTML, CSS, SCSS, BootStrap, TailwindCSS, PWA, Postman</p>
                        </div>
                        <div className={cl.item}>
                            <h2 className={cl.item__title}>Backend</h2>
                            <p>Coming soon</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default HomePage;