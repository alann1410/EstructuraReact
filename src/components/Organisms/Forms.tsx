import React, { useState } from 'react'
import Generalcheckbox from '../Atoms/checkbox/checkbox'
import TitleTextbox, { LabelForCheckbox } from '../Atoms/labels/labels'
import SBSexo from '../Atoms/selectBox/selectBox'
import CheckboxLabels from '../Molecules/CheckboxLabels'
import TextBoxLabels, {PasswordLabel, EmailLabel} from '../Molecules/TextBoxLabels'

export function FormLogin() {

    let [userEmail, setUserEmail] = useState("");
    let [userPassword, setUserPassword] = useState("");

    return (
        <>
            <div className="forCompleteLogin">
                <div className="form-group">
                    <EmailLabel
                        title = "Ingrese Email"
                        placeholder = "Email"
                        setEmail = {setUserEmail}
                    />
                </div>
                <div className="form-group">
                    <PasswordLabel 
                        title= "Ingrese contraseña"
                        placeholder = "Contraseña"
                        setPassword = {setUserPassword}
                    />
                </div>
            </div>
        </>
    )
}





export default function FormRegister() {
    return (
        <>
            <div className="form-row">
                    <div className="form-group col-md-6">
                        <TextBoxLabels
                            title = "Ingrese Nombre"
                            placeholder = "Nombre"
                        />
                    </div>
                    <div className="form-group col-md-6">
                    <TextBoxLabels
                            title = "Ingrese Apellido"
                            placeholder = "Apellido"
                        />
                        </div>
                    </div>
                    <div className="form-group">
                    <TextBoxLabels
                            title = "Ingrese Direccion"
                            placeholder = "Direccion"
                        />
                    </div>
                    <div className="form-group">
                    <TextBoxLabels
                            title = "Segunda Dirección"
                            placeholder = "Dirección 2"
                        />
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                        <TextBoxLabels
                            title = "Ciudad"
                            placeholder = "Ciudad"
                        />
                        </div>
                        <div className="form-group col-md-2">
                        <TextBoxLabels
                            title = "Codigo Postal"
                            placeholder = "Codigo Postal"
                        />
                        </div>
                        <div className="form-group col-md-4">
                        <TitleTextbox  
                                title = 'Sexo'
                            />
                        <SBSexo />
                        </div>
                    </div>
                        <CheckboxLabels 
                            text = "Guardar información"
                        />   
        </>
    )
}


