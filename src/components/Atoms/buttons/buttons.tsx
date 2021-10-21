import React, {useState, Fragment, Component} from 'react' //useState = para inicializar una variable, Fragment = para no encapsular el html en un div
import Button from 'react-bootstrap/Button';
import Register from "../../Templates/register";
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';


interface text{
    text: string
}
interface style{
    style: string
}

interface Props{
    linkPage: string
}

function ButtonAccept ({text}: text){
    return (
        <Fragment>
                <button type="button" className="buttonLogin btn btn-primary">{text}</button>
        </Fragment>
    );
}

export const ButtonRegister  = ({text}: text, {linkPage}: Props) => {
    return (
        <Fragment> 
            <button type="button" className="buttonLogin btn btn-secondary">{text}</button>
        </Fragment>
    );
}

export function ButtonCancel ({text}: text){
    return (
        <Fragment>
            <button className="buttonCancel" type="button">{text}</button>
        </Fragment>
    );
}

export function ButtonBack ({text}: text){
    return (
        <Fragment>
            <button className="buttonLogin btn btn-secondary" type="button">{text}</button>
        </Fragment>
    );
}

export default ButtonAccept;

