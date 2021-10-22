import React from 'react'

interface Values
{
    user:string;
    pass:string;
}
export default function LoginValidation({ user, pass }: Values) {

    const dbEmail = "toty@toty.com";
    const dbPassword = "toty123";

    return (user === dbEmail && pass === dbPassword)
}