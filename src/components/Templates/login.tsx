import React , {Fragment} from 'react'
import GenericTextbox from "../Atoms/textbox/textbox";
import Password from "../Atoms/textbox/textbox";
import TitleTextbox, {TitlePage} from "../Atoms/labels/labels";
import ButtonLogin, { ButtonRegister } from '../Atoms/buttons/buttons';
import { BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import Register from '../Templates/register';
import Index from '../Templates/index';




function Login() {
    return (
      <BrowserRouter>
        <Fragment>
          <Switch>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/index">
              <Index />
            </Route>
            <Route path="/">

            <TitlePage 
                text = 'Application'
                />
                <main className="container p-4">
              <div className="formLogin">
                <form>
                  <div className="forCompleteLogin">
                    <div className="form-group">
                      <TitleTextbox text="Ingrese Email" />
                      <GenericTextbox title="Email" />
                    </div>
                    <div className="form-group">
                      <TitleTextbox text="Ingrese Contraseña" />
                      <Password title="Contraseña" />
                    </div>
                    </div>
                    <div className="buttonsLogin">
                        <Link to="/register">
                        <ButtonRegister text="Registrarse" />
                        </Link>
                        <Link to="/index">
                            <ButtonLogin text="Login" />
                        </Link>
                  </div>
                </form>
              </div>
              </main>
            </Route>
          </Switch>
        </Fragment>
      </BrowserRouter>
    );
  }
  
  export default Login;
