import React, {useState, Fragment, Component} from 'react' //useState = para inicializar una variable, Fragment = para no encapsular el html en un div

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

function ButtonLogin ({text}: text){
    return (
        <Fragment>
            <button type="button" className="btn btn-primary">{text}</button>
        </Fragment>
    );
}


function ButtonRegistrer ({text}: text){
    return (
        <Fragment>
            <button type="button" className="btn btn-secondary">{text}</button>
        </Fragment>
    );
}

function ButtonCancel ({text}: text){
    return (
        <Fragment>
            <button type="button" className="btn btn-primary">{text}</button>
        </Fragment>
    );
}
export default ButtonLogin;
export {ButtonRegistrer};
export {ButtonCancel};
