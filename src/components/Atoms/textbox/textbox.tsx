import React, {Fragment } from 'react';

interface Props{
    placeholder: string
}

function GenericTextbox ({placeholder}: Props) {
        return (
            <Fragment>
                <input type="email" className="form-control" aria-describedby="emailHelp" placeholder={placeholder}></input>
            </Fragment>
        );
}

export function Password({placeholder}: Props){
    return(
    <Fragment>
        <input type="password" className="form-control" placeholder={placeholder}></input>
    </Fragment>
    );
}

export default GenericTextbox;