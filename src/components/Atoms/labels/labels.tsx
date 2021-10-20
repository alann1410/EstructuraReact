import React, {Fragment } from 'react';

interface text{
    text: string
}

function TitleTextbox({text}: text){
    return (
    <Fragment>
        <label className="labelTextbox">{text}</label>
    </Fragment>
    );
}

function TitlePage({text}: text){
    return (
    <Fragment>
       <div className="titleLogin">
            <h1>{text}</h1>
      </div>
    </Fragment>
    );
}


export default TitleTextbox;
export {TitlePage};