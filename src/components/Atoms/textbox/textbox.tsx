import React, {Fragment } from 'react';

interface Props{
    title: string
}

function GenericTextbox ({title}: Props) {
        return (
            <Fragment>
                <input type="email" className="form-control" aria-describedby="emailHelp" placeholder={title}></input>
            </Fragment>
        );
}

function Password({title}: Props){
    <Fragment>
        <input type="password" className="form-control" placeholder={title}></input>
    </Fragment>
}

export default GenericTextbox;
export {Password};