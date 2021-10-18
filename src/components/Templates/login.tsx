import React , {Fragment} from 'react'
import GenericTextbox from "../Atoms/textbox/textbox";
import Password from "../Atoms/textbox/textbox";
import TitleTextbox from "../Atoms/labels/labels";
import ButtonLogin from '../Atoms/buttons/buttons';
import ButtonRegistrer from '../Atoms/buttons/buttons';
import ButtonLoginAux from '../Atoms/buttons/buttonsAux';


function Login() {
  return (
    <Fragment>
        <div className ="formLogin">
            <form>
                <div className="forCompleteLogin">
                    <div className="form-group">
                        <TitleTextbox  
                            text = 'Ingrese Email'
                        />
                        <GenericTextbox 
                            title = 'Email'
                        />
                    </div>
                    <div className="form-group">
                        <TitleTextbox 
                            text = 'Ingrese Contraseña'
                        />
                        <Password
                            title = 'Contraseña'
                        />
                    </div>
                </div>
                <div className="buttonsLogin">
                    <ButtonRegistrer 
                        text = 'Registrarse'
                    />
                    <ButtonLogin 
                        text = 'Login'
                    />
                </div>
            </form>
        </div>
    </Fragment>
  );
}

export default Login;
