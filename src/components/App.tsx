import Login from "./Templates/login";
import "../components/style.css";
import Register from "./Templates/register";
import Index from "./Templates";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ButtonLogin, { ButtonRegister }from "./Atoms/buttons/buttons";


function App() {
  return (
    <div> 
        <Login /> 
    </div>
  );
}

export default App;


/*
interface Props{
  title: string
}

function App({title}: Props) {
  return (
    <div> 
      <div className="titleLogin">
        <h1>{title}</h1>
      </div>
      <hr/>
      <Router>
        <Link to="/register">
          <ButtonRegister
            text="Registrar"
          />
        </Link>
        <Link to="/login">
          <ButtonLogin
            text="Login"
          />
        </Link>
        <Switch>
          <Route path="/login" exact>
            <Login/>
          </Route>
          <Route path="/register" exact>
            <Register />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}


*/