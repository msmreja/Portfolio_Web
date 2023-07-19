import React from 'react';
import PopOver from './PopOver';

const ProjectItems = ({item}) => {
    return (
        <div className='work__card' key={item}>
            <img src={item.image} alt='' className='work__img'></img>
            <h3 className="work__title">{item.title}</h3>
            <button onClick={console.log("Pop UP")} className='work__button'>
                Details <i className="bx bx-right-arrow-alt work__button-icon"></i>
            </button>
            <PopOver />
        </div>
    );
};

export default ProjectItems;