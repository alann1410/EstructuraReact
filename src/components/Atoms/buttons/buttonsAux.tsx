import React, {useState, Fragment, Component} from 'react'
import Button from 'react-bootstrap/Button';

interface text{
    text: string
}




function ButtonLoginAux ({text}: text){
    return (
        <Fragment>
            <button type="button" className="btn btn-secondary">{text}</button>
        </Fragment>
    );
}

export default ButtonLoginAux;