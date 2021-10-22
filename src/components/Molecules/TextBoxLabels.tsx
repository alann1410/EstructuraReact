import React, {Fragment, useState} from 'react';
import TitleTextbox from '../Atoms/labels/labels';
import GenericTextbox, { Password, EmailTextbox } from '../Atoms/textbox/textbox';

interface PropsTextbox{
    title: string;
    placeholder: string;
}

interface PropsEmail{
    title: string;
    placeholder: string;
    setEmail: (string: string)=> void;
}

interface PropsPassword{
    title: string;
    placeholder: string;
    setPassword: (string: string)=> void;
}


export default function TextBoxLabels({title, placeholder}: PropsTextbox) {
    
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

export function PasswordLabel({title, placeholder, setPassword}: PropsPassword){
    return(
        <>
            <TitleTextbox title={title} />
            <Password 
                placeholder={placeholder} 
                setMyPassword = {setPassword}
            />
        </>
    )
}


export function EmailLabel({title, placeholder, setEmail}: PropsEmail) {
    
    return (
        <>
            <TitleTextbox  
                title = {title}
            />
            <EmailTextbox 
                placeholder = {placeholder}
                setMyEmail = {setEmail}
            />
        </>
    )
}