import React, {Fragment } from 'react';

interface Props{
    placeholder: string
}

interface Email
{
    placeholder: string;
    setMyEmail: (string: string)=> void;
}

interface Password
{
    placeholder: string;
    setMyPassword: (string: string)=> void;
}


function GenericTextbox ({placeholder}: Props) {
    return (
        <Fragment>
            <input type="text" className="form-control" aria-describedby="emailHelp" placeholder={placeholder}></input>
        </Fragment>
    );
}

export function EmailTextbox ({placeholder, setMyEmail}: Email) {
    return (
        <Fragment>
            <input type="email" className="form-control" aria-describedby="emailHelp" placeholder={placeholder}
                onChange={(event) =>
                {
                    setMyEmail(event.target.value)
                }}
            />
        </Fragment>
    );
}

export function Password({placeholder, setMyPassword}: Password){
    return(
        <Fragment>
            <input type="password" className="form-control" placeholder={placeholder}
                    onChange={(event) =>
                    {
                        setMyPassword(event.target.value)
                    }}
            />
        </Fragment>
    )
}

export default GenericTextbox;