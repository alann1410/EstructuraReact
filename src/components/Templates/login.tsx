import React , {Fragment} from 'react'
import GenericTextbox from "../Atoms/textbox/textbox";
import Password from "../Atoms/textbox/textbox";
import TitleTextbox from "../Atoms/labels/labels";
import ButtonLogin from '../Atoms/buttons/buttons';
import ButtonRegistrer from '../Atoms/buttons/buttons';
import ButtonLoginAux from '../Atoms/buttons/buttonsAux';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Register from '../Templates/register';
import TitlePage from "../Atoms/labels/labels";


function Login() {
  return (
    <Fragment>
    <Router>
    
    <Link to='/register'>  
        <ButtonRegistrer 
            text = {'Registrarse'}
        />
        <ButtonLogin 
            text = 'Login'
        />
      </Link>
      <TitlePage 
      text = 'Application'
      />
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
                 <Switch>
                    <div className="buttonsLogin">
                    <Route path='/register'>
                        <Register />
                    </Route>  
                    
                    </div>
                </Switch> 
            </form>
        </div>
        </Router>
    </Fragment>
   
  );
}

export default Login;
