import React,{useRef, useState} from "react";
import emailjs from '@emailjs/browser';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox';
import Lottie from "lottie-react";
import * as animationData from "./phone.json";
import './Contact.css';
function Contact(){
  const [details,setDetails]=useState({user_name:"",user_email:"",message:""});
  function handleChange(event){
    const newValue = event.target.value;
    const inputName = event.target.name;
    setDetails((prevValue=>{
      if(inputName==="user_name"){
        return{
          user_name:newValue,
          user_email:prevValue.user_email,
          message:prevValue.message
        }
      }
      if(inputName==="user_email"){
        return{
          user_name:prevValue.user_name,
          user_email:newValue,
          message:prevValue.message
        }
      }
      if(inputName==="message"){
        return{
          user_name:prevValue.user_name,
          user_email:prevValue.user_email,
          message:newValue
        }
      }
    }))
  }
  const form = useRef();
  var x=false;


 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(details.user_email))
  {
    x=true;
  }
    
  const sendEmail = (e) => {
    e.preventDefault();
  if(details.user_name.trim().length!==0&&x&&details.message.trim().length!==0){
      console.log("bro..");
    
      emailjs.sendForm('service_4brrfdd', 'template_1emwcrq', form.current, 'A18l3-03Sga3_69TK')
      .then((result) => {
          console.log(result.text);
          console.log("message sent");
      }, (error) => {
          console.log(error.text);
      });
      handleClick();
      
    }
  
  };
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={handleClose}>
        UNDO
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );
  return(
    <div>
    <div >
  <nav className="social " style={{paddingTop:"200px",}}>
          <ul>
              <li><a href="https://www.instagram.com/sathwika_3577/" target={"_blank"} rel={"noreferrer"}>Instagram <i className="fa fa-instagram"></i></a></li>
              <li><a href="https://www.facebook.com/profile.php?id=100077525858594" target={"_blank"} rel={"noreferrer"}>Facebook <i className="fa fa-facebook"></i></a></li>
              <li><a href="https://github.com/Sathwika538" target={"_blank"} rel={"noreferrer"}>Github <i className="fa fa-github"></i></a></li>
              <li><a href="https://www.linkedin.com/in/sathwika-chinthala-509034247/" target={"_blank"} rel={"noreferrer"}>LinkedIn <i className="fa fa-linkedin"></i></a></li>
          </ul>
  </nav>
 
  <div className="container row formss ">
   <div className=" col-md-4 " style={{
    marginTop:"14vmax",
    marginLeft:"14vmax",
                                      }}>
          <Lottie animationData={animationData} />
        </div>
  <div className="container row col-md-8"  style={{
                                                  marginTop:"12vmax",
                                                  position: "absolute",
                                                  right: "-8vmax",
                                                 
                                                }}>
  <div id="form-container" style={{width:"400px"}}>
  <h2 style={{textAlign:"center",
              paddingBottom:"10px"
            }}>Shoot me some mail <ForwardToInboxIcon fontSize="1000px"/></h2>
  
  <form action="#" autocomplete="on" ref={form} onSubmit={sendEmail}>
      <label  style={{padding:"5px"}} >Name</label><br />
      <input  style={{padding:"5px"}}  class="name-box inputt" type="text" name="user_name" value={details.user_name} placeholder="Name" autoComplete="off" required onChange={handleChange} /><br />
    
      <label style={{padding:"5px"}} >Email</label><br />
      <input  style={{padding:"5px"}} class="email-box inputt" type="email" name="user_email" value={details.user_email} placeholder="Email" autoComplete="off" required onChange={handleChange}/><br />
      
      <label style={{padding:"5px"}} >Message</label><br />
      <textarea  style={{padding:"5px"}} class="message-box textareaa" placeholder="Message" name="message" value={details.message} autoComplete="off" required onChange={handleChange}/><br />
      <input  style={{padding:"5px"}} class="submit-button submitt" type="submit" value="Send" ></input>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Message successfully sent✅"
        action={action}
      />
    </form>
  </div>
  </div>
  </div>
</div>
</div>

  );
}
export default Contact;