import React, {useState, Fragment, Component} from 'react'
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import { useHistory } from "react-router-dom";

interface text{
    text: string
}
interface style{
    style: string
}

interface Props{
    linkPage: string
}

export default function ButtonAccept ({text}: text){
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

interface textAndLink
{
    text: string;
    ruta: string;
}

export function ButtonBack ({text, ruta}: textAndLink){

    let history = useHistory();

    return (
        <Fragment>
            <button onClick={() => {history.push(ruta);}} className="buttonLogin btn btn-secondary" type="button">{text}</button>
        </Fragment>
    );
}

export function ButtonAcceptRedirect ({text, ruta}: textAndLink){

    let history = useHistory();

    return (
        <Fragment>
            <button onClick={() => {history.push(ruta);}} className="buttonLogin btn btn-primary" type="button">{text}</button>
        </Fragment>
    );
}



