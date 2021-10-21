import React , {Fragment} from 'react'
import GenericTextbox from "../Atoms/textbox/textbox";
import SBSexo from '../Atoms/selectBox/selectBox';
import ButtonAccept, {ButtonBack} from '../Atoms/buttons/buttons';
import TitleTextbox, {TitlePage} from "../Atoms/labels/labels";
import TextBoxLabels from "../Atoms/labels/labels";
import FormRegister from '../Organisms/Forms';
import LoginPage from '../Pages/loginPage';

function Register () {

    return(
    <Fragment>
        <TitlePage 
                title = 'Application'
                />
        <div className ="containerRegister">
            <form>
                <FormRegister />
                
                <div className="buttonsGeneric">
                    <ButtonBack
                        text = 'Volver'
                        ruta = '/'
                    />
                    <ButtonAccept
                    text = 'Hecho!'
                    />
                </div>
            </form>
        </div>
    </Fragment>
    )};
  
  export default Register;
