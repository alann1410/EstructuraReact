import React , {Fragment} from 'react'
import GenericTextbox from "../Atoms/textbox/textbox";
import SBSexo from '../Atoms/selectBox/selectBox';
import ButtonAccept, {ButtonAcceptRedirect, ButtonBack} from '../Atoms/buttons/buttons';
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
                    <ButtonAcceptRedirect
                        text = 'Hecho!'
                        ruta = '/indexPage'
                    />
                </div>
            </form>
        </div>
    </Fragment>
    )};
  
  export default Register;
