import React from 'react';
import cl from './ProjectsPage.module.scss';

const ProjectsPage = () => {
    return (
        <>
            <section className={cl.container}>
                <h1>Projects</h1>
                <div className={cl.projects__wrapper}>
                    <div className={cl.card}>
                        <div className={cl.picture}>
                            <img src='/img/projects/01.jpg' alt='picture' />
                        </div>
                        <div className={cl.body}>
                            <h3>Gaming streaming portal</h3>
                        </div>
                    </div>
                    <div className={cl.card}>
                        <div className={cl.picture}>
                            <img src='/img/projects/01.jpg' alt='picture' />
                        </div>
                        <div className={cl.body}>
                            <h3>Gaming streaming portal</h3>
                        </div>
                    </div>
                    <div className={cl.card}>
                        <div className={cl.picture}>
                            <img src='/img/projects/01.jpg' alt='picture' />
                        </div>
                        <div className={cl.body}>
                            <h3>Gaming streaming portal</h3>
                        </div>
                    </div>
                    <div className={cl.card}>
                        <div className={cl.picture}>
                            <img src='/img/projects/01.jpg' alt='picture' />
                        </div>
                        <div className={cl.body}>
                            <h3>Gaming streaming portal</h3>
                        </div>
                    </div>
                    <div className={cl.card}>
                        <div className={cl.picture}>
                            <img src='/img/projects/01.jpg' alt='picture' />
                        </div>
                        <div className={cl.body}>
                            <h3>Gaming streaming portal</h3>
                        </div>
                    </div>
                    <div className={cl.card}>
                        <div className={cl.picture}>
                            <img src='/img/projects/01.jpg' alt='picture' />
                        </div>
                        <div className={cl.body}>
                            <h3>Gaming streaming portal</h3>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ProjectsPage;