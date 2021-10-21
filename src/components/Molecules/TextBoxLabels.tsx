import React, {Fragment} from 'react';
import TitleTextbox from '../Atoms/labels/labels';
import GenericTextbox, { Password } from '../Atoms/textbox/textbox';

interface Props{
    title: string;
    placeholder: string;
}

export default function TextBoxLabels({title, placeholder}: Props) {
    return (
        <>
            <TitleTextbox  
                title = {title}
            />
            <GenericTextbox 
                placeholder = {placeholder}
            />
        </>
    )
}

export function PasswordLabel({title, placeholder}: Props){
    return(
        <>
            <TitleTextbox title={title} />
            <Password 
                placeholder={placeholder} 
            />
        </>
    )
}
