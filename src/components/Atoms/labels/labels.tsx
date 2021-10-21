import React, {Fragment } from 'react';

interface text{
    title: string
}

function TitleTextbox({title}: text){
    return (
    <Fragment>
        <label className="labelTextbox">{title}</label>
    </Fragment>
    );
}

function TitlePage({title}: text){
    return (
    <Fragment>
       <div className="titleLogin">
            <h1>{title}</h1>
      </div>
    </Fragment>
    );
}

export function LabelForCheckbox({title}: text){
    return(
        <label className="form-check-label">
              {title}
        </label>
    )
}


export default TitleTextbox;
export {TitlePage};