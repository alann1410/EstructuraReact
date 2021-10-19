import React, {useState, Fragment, Component} from 'react' //useState = para inicializar una variable, Fragment = para no encapsular el html en un div
import Button from 'react-bootstrap/Button';
import Register from "../../Templates/register";


interface text{
    text: string
}
interface style{
    style: string
}

function ButtonLogin ({text}: text){
    return (
        <Fragment>
                <button type="button" className="buttonLogin btn btn-primary">{text}</button>
        </Fragment>
    );
}

const ButtonRegistrer  = ({text}: text) => {
    return (
        <Fragment>
                <button type="button" className="btn btn-secondary">{text}</button>
        </Fragment>
    );
}

function ButtonCancel ({text}: text){
    return (
        <Fragment>
            <button className="buttonLogin" type="button">{text}</button>
        </Fragment>
    );
}
export default ButtonLogin;
export {ButtonRegistrer};
export {ButtonCancel};
