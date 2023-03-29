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
        I am a full stack developer with a passion for creating innovative and user-friendly web applications.I have a deep understanding of how to build and maintain complex web systems.
        <br/>
        <br/>
My expertise in front-end development includes proficiency in HTML, CSS, JavaScript, and a range of front-end frameworks like ReactJS, Bootstrap, MaterialUI, jQuery. I am also skilled in back-end development with expertise in server-side programming languages like Node.js. My knowledge extends to databases and data modeling, and I am experienced in working with MongoDB.
<br/>
<br/>
I enjoy taking a full-stack approach to web development, bringing together my skills in front-end and back-end development to create complete web applications. I have worked on a wide range of projects, including e-commerce sites, data fetchers, and other web applications. Some of my notable projects include melA - ECommerce Website, DataFetchers, and SatThings - PortFolio.
<br/>
   {/* I am primarily interested in Web Development.
        <br/>
<br/>
Libraries/Frameworks I have experience with Node.js , jQuery, Bootstrap.
<br/>
<br/>
I am also comfortable with git, Github, API's,
<br/>
<br/>
Frameworks I am currently working on: MongoDB , React.js, Redux
<br/>
<br/>
Programming Languages I am comfortable in: Javascript , SQL , CSS , HTML , C++ ,JAVA. */}

        </h5>
          
        </div>
        
        </div>
      </div>
    );
  };
export default About;
