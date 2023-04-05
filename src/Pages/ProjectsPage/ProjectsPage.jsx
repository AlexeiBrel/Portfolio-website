import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import cl from './ProjectsPage.module.scss';

const ProjectsPage = () => {
    const nav = useNavigate();
    const [projects, setProjects] = useState([
        { id: 1, title: 'Aperture', picture: '/img/projects/01.png' },
        { id: 2, title: 'Quiz', picture: '/img/projects/02.png' },
        { id: 3, title: 'Save-life', picture: '/img/projects/03.png' },
        { id: 4, title: 'MBox', picture: '/img/projects/04.png' },
        { id: 5, title: 'Ремонт бытовой техники', picture: '/img/projects/05.png' },
    ])

    return (
        <>
            <section className={cl.container}>
                <h1>Projects</h1>
                <div className={cl.projects__wrapper}>
                    {projects.map(item => <ProjectCard projects={item} key={item.id} />)}
                </div>
            </section>
        </>
    );
};

export default ProjectsPage;