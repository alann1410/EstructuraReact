import Login from "./Templates/login";
import "../components/App.css";



interface Props{
  title: string
}

function App({title}: Props) {
  return (
    <div> 
    <h1>{title}</h1>
    <Login /> 
    </div>
  );
}

export default App;
