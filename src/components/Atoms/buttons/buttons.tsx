import React, {useState, Fragment, Component} from 'react' //useState = para inicializar una variable, Fragment = para no encapsular el html en un div
import Button from 'react-bootstrap/Button';

// const buttonLogin : React.FunctionComponent = () => {
    
//         return (  
//             <Fragment>
//                 <button type="button" className="btn btn-primary">Login</button>
//             </Fragment>
//         );
    
// };

// export default buttonLogin

// var Item = class ButtonLogin extends React.Component {
//     render() {
//        return <button type="button" className="btn btn-primary">Login</button>
//     }
//   };
  
//   export default class ItemList extends Component<any, any> {
//       render() {
//           return (<Item />)
//       }
//   }

interface text{
    text: string
}
interface style{
    style: string
}



function ButtonLogin ({text}: text){
    return (
        <Fragment>
            <button type="button" className="buttonLogin btn btn-primary">{text}</button>
        </Fragment>
    );
}


const ButtonRegistrer  = ({text}: text, {style}: style) => {
    return (
        <Fragment >
            <Button className="buttonLogin" variant="secondary">{text}</Button>
        </Fragment>
    );
}

function ButtonCancel ({text}: text){
    return (
        <Fragment>
            <button className="buttonLogin" type="button">{text}</button>
        </Fragment>
    );
}
export default ButtonLogin;
export {ButtonRegistrer};
export {ButtonCancel};
