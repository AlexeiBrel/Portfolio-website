import React from 'react';
import { BsGithub } from 'react-icons/bs';
import cl from './ProjectDetailsCard.module.scss';

const ProjectDetailsCard = (props) => {
    return (
        <>
            <h1>{props.project.title}</h1>
            <div className={cl.details}>
                <div className={cl.picture}>
                    <img src={window.innerWidth > 510 ? props.project.picture : props.project.pictureMobile} alt='picture' />
                </div>
                <div className={cl.desc}>
                    <p>Skills:</p>
                    <p>{props.project.technologies}</p>
                </div>
                <a href={props.project.gitlink} target='_blank'><BsGithub />GitHub repo</a>
            </div>
        </>
    );
};

export default ProjectDetailsCard;