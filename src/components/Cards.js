import React from 'react';
import  './Cards.css'





function Cards(props){
    return(
        <>
       
        <div  className='cards'>
        <div className='card'>
        <img src={props.imgsrc} alt=" " className='card__img'/>
        <div className="card__info'">
            <span className='card__category'>{props.title}</span>
            <h3 className='card__title'>{props.sname}</h3>
            <h3 className='button'>BUY</h3>
        </div>
        </div>
        </div>
        </>
    );
}

export default Cards;