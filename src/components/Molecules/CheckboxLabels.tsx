import React from 'react'
import Generalcheckbox from '../Atoms/checkbox/checkbox'
import { LabelForCheckbox } from '../Atoms/labels/labels'

interface Props{
    text: string
}

export default function CheckboxLabels({text}: Props) {
    return (
        <>
            <div className="form-group">
                <div className="form-check">
                    <Generalcheckbox />
                    <LabelForCheckbox 
                        title = {text}
                    />
                </div>
            </div>
        </>
    )
}
