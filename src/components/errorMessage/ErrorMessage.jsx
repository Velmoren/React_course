import React from 'react';

// style
import classesCommon from '../app/App.module.css';
import classes from './ErrorMessage.module.css'

const { title } = classesCommon;
const { error } = classes;

const ErrorMessage = () => {
  return (
    <div className={`${title} ${error}`} >Oooups, it is error! No cards!</div>
  )
}

export default ErrorMessage;