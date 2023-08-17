import {useState} from 'react';

const Card = (props) => {

  return (
    <div className="card">
      <p>Hola: {props.nombre}</p>
      <p>Tu animal elegido es: {props.animal}</p>
    </div>
  );
};

export default Card;
