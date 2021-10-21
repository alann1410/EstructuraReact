import Login from "./Templates/loginTemplate";
import "../components/style.css";
import Register from "./Templates/registerTemplate";
import Index from "./Pages/indexPage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LoginPage from "./Pages/loginPage";
//import ButtonLogin, { ButtonRegister }from "./Atoms/buttons/buttons";


 function App() {
   return (
     <div> 
         <LoginPage /> 
     </div>
   );
 }

 export default App;



