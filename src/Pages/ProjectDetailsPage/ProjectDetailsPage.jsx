import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import ProjectDetailsCard from '../../components/ProjectDetailsCard/ProjectDetailsCard';
import cl from './ProjectDetailsPage.module.scss';


const ProjectDetailsPage = () => {
    const { id } = useParams();
    const [project, setProject] = useState([
        { id: 1, title: 'Aperture', picture: '/img/projects/01-1.png', pictureMobile: '/img/projects/01.png', technologies: 'HTML, CSS, JavaScript', gitlink: 'https://github.com/AlexeiBrel/Aperture' },
        { id: 2, title: 'Quiz', picture: '/img/projects/02-2.png', pictureMobile: '/img/projects/02.png', technologies: 'HTML, CSS, SCSS, JS, jQuery', gitlink: 'https://github.com/AlexeiBrel/quiz' },
        { id: 3, title: 'Спаси жизнь', picture: '/img/projects/03-3.png', pictureMobile: '/img/projects/03.png', technologies: 'HTML, CSS, SCSS, JS', gitlink: 'https://github.com/AlexeiBrel/Save-life' },
        { id: 4, title: 'MBox', picture: '/img/projects/04-4.png', pictureMobile: '/img/projects/04.png', technologies: 'HTML, CSS, SCSS', gitlink: 'https://github.com/AlexeiBrel/M-Box-TV' },
        { id: 5, title: 'Ремонт бытовой техники', picture: '/img/projects/05-5.png', pictureMobile: '/img/projects/05.png', technologies: 'HTML, CSS, SCSS, Bootstrap, JS, jQuery, ', gitlink: 'https://github.com/AlexeiBrel/Version' },
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