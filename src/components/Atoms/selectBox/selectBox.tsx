import React, {useState, Fragment, Component} from 'react' //useState = para inicializar una variable, Fragment = para no encapsular el html en un div
import Button from 'react-bootstrap/Button';
import Register from "../../Templates/register";


function SBSexo (){
    return (
        <Fragment>
                <select className="form-control" defaultValue={'DEFAULT'}>
                            <option value="DEFAULT" disabled>Indique su género ...</option>
                            <option value="male">Hombre</option>
                            <option value="female">Mujer</option>
                            <option value="other">Otro</option>
                </select>
        </Fragment>
    );
}

export default SBSexo;