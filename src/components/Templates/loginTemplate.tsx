import React , {Fragment} from 'react'
import GenericTextbox from "../Atoms/textbox/textbox";
import Password from "../Atoms/textbox/textbox";
import TitleTextbox, {TitlePage} from "../Atoms/labels/labels";
import ButtonAccept, { ButtonRegister } from '../Atoms/buttons/buttons';
import { BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import Register from './registerTemplate';
import Index from '../Pages/indexPage';
import { FormLogin } from '../Organisms/Forms';


function Login() {

    return (
      <BrowserRouter>
        <Fragment>
          <Switch>
            <Route exact path="/registerPage" component={Register}/>
            <Route exact path="/indexPage" component={Index}/>
            <Route exact path="/">
            <TitlePage 
                title = 'Application'
                />
              <main className="container p-4">
              <div className="formLogin">
                  <form>
                    <FormLogin />
                    <div className="buttonsGeneric">
                        <Link to="/registerPage">
                            <ButtonRegister text="Registrarse" />
                        </Link>
                        <Link to="/indexPage">
                            <ButtonAccept text="Login" />
                        </Link>
                    </div>
                  </form>
              </div>
              </main>
            </Route>
            {/* <Route path="*">
              404 Not found
            </Route> */}
          </Switch>
        </Fragment>
      </BrowserRouter>
    );
  }
  
  export default Login;
