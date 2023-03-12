import React, { Fragment,useEffect,useState } from "react";
import './ForgotPassword.css';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import {useSelector,useDispatch} from "react-redux";
import {forgotPassword,clearErrors} from "../../actions/userAction";
import {useAlert} from 'react-alert';
import MetaData from "../layout/MetaData";
import Loader from "../layout/Loader/Loader"; 


const ForgotPassword = () => {
    const dispatch = useDispatch();
    const alert = useAlert();

    
    const {error,message,loading} = useSelector(state=>(state.forgotPassword));

    const [email,setEmail] = useState("");

    const forgotPasswordSubmit = (e)=> {
        e.preventDefault();
        const myForm = new FormData();
        myForm.set("email",email);
        dispatch(forgotPassword(myForm));
    }

    useEffect(()=>{
      
        if(error){
            alert.error(error);
            dispatch(clearErrors());
        }
        if(message){
            alert.success(message);
        }

    },[dispatch,error,alert,message]);

    return(
        <Fragment>
            {loading ? <Loader /> :  
              <Fragment>
               <MetaData title="Forgot Password"/>
                <div className="forgotPasswordContainer">
                <div className="forgotPasswordBox">
                <h2 className="forgotPasswordHeading">Update Profile</h2>
                <form
                    className="forgotPasswordForm"
                    onSubmit={forgotPasswordSubmit} >
                        <div className="forgotPasswordFormEmail">
                            <MailOutlineIcon />
                            <input 
                           type="email"
                            placeholder="Email"
                            required
                            name="email"
                            value={email}
                            onChange={(e)=> setEmail(e.target.value)}
                            />
                        </div>
                       
                        <input 
                            type="submit"
                            value="Send"
                            className = "forgotPasswordBtn"
                        />
                    </form>
                </div>
                  </div>
            </Fragment>}
           </Fragment>
    )
}

export default ForgotPassword;