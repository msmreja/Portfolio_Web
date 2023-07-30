import React from 'react';
import PopOver from './PopOver';

const ProjectItems = ({item}) => {
    return (
        <div className='work__card' key={item}>
            <img src={item.image} alt='' className='work__img'></img>
            <h3 className="work__title">{item.title}</h3>
            <button onClick={console.log("Pop UP")} className='work__button'>
                <PopOver 
                title={item.title} 
                description={item.description} 
                gitlink={item.gitLink} 
                frontend={item.frontend} 
                backend={item.backend}
                />
            </button>
        </div>
    );
};

export default ProjectItems;