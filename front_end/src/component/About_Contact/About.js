import React from "react";
import profilee from "../../images/profilee.jpg";
import './Contact.css';
import { useEffect } from "react";
const About = () => {
  useEffect(()=>{
    const boxes = document.querySelectorAll('.profile');
    window.addEventListener('scroll',checkBoxes);

    checkBoxes();
    function checkBoxes() {
        const triggerBottom = window.innerHeight;
        boxes.forEach((box)=>{
            const boxTop = box.getBoundingClientRect().top / 5*4;
            if(boxTop < triggerBottom){
              console.log("hello");
                box.classList.add('show');
            }else {
                box.classList.remove('show');
            }
        })
      
    }
}, []);
    return (
      <div className="aboutt">
        <div className="row container-fluid">
        <div className="container col-lg-6 title-image" style={{padding:"20px"}}>
        <img src={profilee} alt="melA" className="profile"></img>
        </div>
    <div className="container col-lg-5 texts" style={{
        paddingLeft:"5px"
        }}>
        <h5>
        I am primarily interested in Web Development.
        <br/>
<br/>
Libraries/Frameworks I have experience with Node.js , jQuery, Bootstrap.
<br/>
<br/>
I am also comfortable with git, Github, API's,
<br/>
<br/>
Frameworks I am currently working on: MongoDB , React.js
<br/>
<br/>
Programming Languages I am comfortable in: Javascript , SQL , CSS , HTML , C++ ,JAVA.

        </h5>
          
        </div>
        
        </div>
      </div>
    );
  };
export default About;
