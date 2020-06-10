import React from 'react';
import "./styles.css"

export default function Avatar(props){
  return (
    <img className="circle-img" src={props.img} alt=""/>
  );
}