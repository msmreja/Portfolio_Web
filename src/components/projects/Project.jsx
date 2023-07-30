import React from 'react';
import Projects from './projects';

const Project = () => {
    return (
            <section className='work section' id='projects'>
                <h2 className="section__title">Projects</h2>
                <span className="section__subtitle">Recent Projects</span>
                <Projects />
            </section>
    );
};

export default Project;