import React , {Fragment} from 'react'
import GenericTextbox from "../Atoms/textbox/textbox";
import SBSexo from '../Atoms/selectBox/selectBox';
import ButtonLogin, {ButtonBack} from '../Atoms/buttons/buttons';
import TitleTextbox, {TitlePage} from "../Atoms/labels/labels";

function Register () {



    return(
    <Fragment>
        <TitlePage 
                text = 'Application'
                />
        <div className ="formRegister">
            <form>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <TitleTextbox  
                            text = 'Ingrese Nombre'
                        />
                        <GenericTextbox 
                            title = 'Nombre'
                        />
                    </div>
                        <div className="form-group col-md-6">
                        <TitleTextbox  
                            text = 'Ingrese Apellido'
                        />
                        <GenericTextbox 
                            title = 'Apellido'
                        />
                        </div>
                    </div>
                    <div className="form-group">
                        <TitleTextbox  
                            text = 'Ingrese dirección'
                        />
                        <GenericTextbox 
                            title = 'Dirección'
                        />
                    </div>
                    <div className="form-group">
                        <TitleTextbox  
                            text = 'Segunda dirección'
                        />
                        <GenericTextbox 
                            title = 'Dirección 2'
                        />
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <TitleTextbox  
                                text = 'Ciudad'
                            />
                            <GenericTextbox 
                                title = 'Ciudad'
                            />
                        </div>
                        <div className="form-group col-md-2">
                        <TitleTextbox  
                            text = 'Codigo Postal'
                        />
                        <GenericTextbox 
                            title = 'Codigo postal'
                        />
                        </div>
                        <div className="form-group col-md-4">
                        <TitleTextbox  
                                text = 'Sexo'
                            />
                        <SBSexo />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="form-check">
                        <input className="form-check-input" type="checkbox"></input>
                        <label className="form-check-label">
                            Guardar información
                        </label>
                        </div>
                    </div>
                    <div className="buttonsLogin">
                    <ButtonBack 
                        text = 'Volver'
                        ruta = "/login"
                    />
                    <ButtonLogin
                    text = 'Hecho!'
                    />
                    </div>
            </form>
        </div>
    </Fragment>
    )};
  
  export default Register;
