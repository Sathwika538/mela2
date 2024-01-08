import React,{ Fragment , useEffect} from "react";
import "./Home.css";
import slide1 from '../../images/slide1.avif';
import slide2 from '../../images/slide2.avif';
import slide3 from '../../images/slide3.avif';
import slide4 from '../../images/slide4.avif';
import MetaData from "../layout/MetaData";
const Home = ()=>{
        
    useEffect(()=>{
        const boxes = document.querySelectorAll('.containerr');
        window.addEventListener('scroll',checkBoxes);
    
        checkBoxes();
        function checkBoxes() {
            const triggerBottom = window.innerHeight / 5*4;
            boxes.forEach((box)=>{
                const boxTop = box.getBoundingClientRect().top;
                if(boxTop < triggerBottom){
                    box.classList.add('show');
                }else {
                    box.classList.remove('show');
                }
            })
        }
    }, []);

return (
      
<Fragment>
<MetaData title="melA"/>
<div className="banner">
<h1 style={{fontWeight:"100",fontFamily:"Tilt Neon",fontSize:"100px",marginRight:"10vmax",marginBottom:"30vmax",color:"#BBBB83"}}>melA</h1>
</div>

<img src={slide2} alt="Ecommerce" className="containerr"/>
<img src={slide1} alt="Ecommerce" className="containerr"/>
<img src={slide4} alt="Ecommerce" className="containerr"/>
<img src={slide3} alt="Ecommerce" className="containerr"/>

<div className="containerr" id="containerr">
   
</div>
</Fragment> 
    )
}

export default Home;