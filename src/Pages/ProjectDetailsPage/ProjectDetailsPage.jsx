import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import ProjectDetailsCard from '../../components/ProjectDetailsCard/ProjectDetailsCard';
import cl from './ProjectDetailsPage.module.scss';


const ProjectDetailsPage = () => {
    const { id } = useParams();
    const [project, setProject] = useState([
        { id: 1, title: 'Aperture', picture: '/img/projects/02-2.png', technologies: 'HTML, CSS, JavaScript', gitlink: '#' },
        { id: 2, title: 'Quiz', picture: '/img/projects/02-2.png', technologies: 'ReactJS, Node.js', gitlink: '#' },
    ])

    return (
        <>
            <section className={cl.container}>
                {project.map(item => (item.id === +id ? <ProjectDetailsCard project={item} key={item.id} /> : ''))}
            </section>
        </>
    );
};

export default ProjectDetailsPage;