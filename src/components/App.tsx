import Login from "./Templates/login";
import "../components/App.css";
import Register from "./Templates/register";



interface Props{
  title: string
}

function App({title}: Props) {
  return (
    <div> 
      <div className="titleLogin">
        <h1>{title}</h1>
      </div>
        <Login /> 
    </div>
  );
}

export default App;
