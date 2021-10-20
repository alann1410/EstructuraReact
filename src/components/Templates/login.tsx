import React , {Fragment} from 'react'
import GenericTextbox from "../Atoms/textbox/textbox";
import Password from "../Atoms/textbox/textbox";
import TitlePage from "../Atoms/labels/labels";
import TitleTextbox from "../Atoms/labels/labels";
import ButtonLogin from '../Atoms/buttons/buttons';
import ButtonRegistrer from '../Atoms/buttons/buttons';
import ButtonLoginAux from '../Atoms/buttons/buttonsAux';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Register from '../Templates/register';
import Index from '../Templates/index';


function Login() {
  return (
    <Router>
    <Switch>
    <Fragment>
       
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
                    <div className="buttonsLogin">

                        <Link to="/register">
                            <ButtonRegistrer 
                                text = 'Registrarse'
                            />
                        </Link>
                        <Link to="/index">
                            <ButtonLogin 
                                text = 'Login'
                            />
                        </Link>

                    <Route path="/index" exact>
                        <Index/>
                    </Route>
                        <Route path="/register">
                            <Register />
                        </Route>
                    </div>
                </div>
                 
            </form>
        </div>
        
    </Fragment>
    </Switch>
        </Router>
  );
}

export default Login;
