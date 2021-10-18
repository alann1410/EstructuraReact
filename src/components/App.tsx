import Login from "./Templates/login";
import "../components/App.css";



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