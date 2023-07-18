import React from 'react';
import Projects from './projects';

const Project = () => {
    return (
        <div>
            <section className='work section' id='portfolio'>
                <h2 className="section__title">Projects</h2>
                <span className="section__subtitle">Recent Projects</span>
                <Projects />
            </section>
        </div>
    );
};

export default Project;