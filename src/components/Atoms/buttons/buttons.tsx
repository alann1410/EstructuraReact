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

function ButtonLogin ({text}: text){
    return (
        <Fragment>
                <button type="button" className="buttonLogin btn btn-primary">{text}</button>
        </Fragment>
    );
}

const ButtonRegister  = ({text}: text, {linkPage}: Props) => {
    return (
        <Fragment>
             <Link to='../Templates/register'> 
                <button type="button" className="btn btn-secondary">{text}</button>
            </Link> 
        </Fragment>
    );
}

function ButtonCancel ({text}: text){
    return (
        <Fragment>
            <button className="buttonCancel" type="button">{text}</button>
        </Fragment>
    );
}
export default ButtonLogin;
export {ButtonRegister};
export {ButtonCancel};
