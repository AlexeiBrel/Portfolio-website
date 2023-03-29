import React from 'react';
import { useNavigate } from 'react-router-dom';
import cl from './ProjectCard.module.scss';

const ProjectCard = (props) => {
    const nav = useNavigate();

    return (
        <div className={cl.card}>
            <div className={cl.picture}>
                <img src={props.projects.picture} alt='picture' />
            </div>
            <div className={cl.body}>
                <h3>{props.projects.title}</h3>
            </div>
            <div className={cl.blackout}>
                <button onClick={() => nav(`/projectdetails/${props.projects.id}`)}>Details</button>
            </div>
        </div>
    );
};

export default ProjectCard;