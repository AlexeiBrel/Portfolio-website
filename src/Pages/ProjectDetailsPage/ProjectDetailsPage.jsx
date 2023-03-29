import React from 'react';
import { useParams } from 'react-router-dom';
import { BsGithub } from 'react-icons/bs';
import cl from './ProjectDetailsPage.module.scss';

const ProjectDetailsPage = () => {
    const { id } = useParams();

    return (
        <>
            <section className={cl.container}>
                <h1>Quiz</h1>
                <div className={cl.details}>
                    <div className={cl.picture}>
                        <img src='/img/projects/02-2.png' alt='picture' />
                    </div>
                    <div className={cl.desc}>
                        <p>Skills:</p>
                        <p>React, Node.js, MongoDB</p>
                    </div>
                    <a href='#' target='_blank'><BsGithub />GitHub repo</a>
                </div>
            </section>
        </>
    );
};

export default ProjectDetailsPage;