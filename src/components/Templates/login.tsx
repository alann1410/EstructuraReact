import React , {Fragment} from 'react'
import GenericTextbox from "../Atoms/textbox/textbox";
import Password from "../Atoms/textbox/textbox";
import TitleTextbox from "../Atoms/labels/labels";
import ButtonLogin from '../Atoms/buttons/buttons';
import ButtonRegistrer from '../Atoms/buttons/buttons';


function Login() {
  return (
    <Fragment>
        <div className ="formLogin">
            <form>
                <div className="form-group">
                    <TitleTextbox  
                        text = 'Inserte Email'
                    />
                    <GenericTextbox 
                        title = 'Inserte Email'
                    />
                </div>
                <div className="form-group">
                    <TitleTextbox 
                        text = 'Inserte Contraseña'
                    />
                    <Password
                        title = 'Inserte Contraseña'
                    />
                </div>
                <ButtonRegistrer 
                    text = 'Registrarse'
                />
                <ButtonLogin 
                    text = 'Login'
                />
            </form>
        </div>
    </Fragment>
  );
}

export default Login;
