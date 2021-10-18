import React, {Fragment } from 'react';

interface text{
    text: string
}

function TitleTextbox({text}: text){
    return (
    <Fragment>
        <label>{text}</label>
    </Fragment>
    );
}

export default TitleTextbox;