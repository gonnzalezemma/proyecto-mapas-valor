import React from "react";

//comentario..
const Cards = (props) => {
  return (
    <div className='card mb-3'>
      <img src={props.url} className='card-img-top' alt='' height='400' />
      <div className='card-body'>
        <h5 className='card-title'>{props.tittle}</h5>
        <p className='card-text'>{props.paragraph}</p>
        {/*  <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p> */}
      </div>
    </div>
  );
};

export default Cards;
