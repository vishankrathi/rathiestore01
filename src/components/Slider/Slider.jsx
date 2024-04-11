import  './Slider.scss'
import {useState} from "react";
function  Slider ({images}) {
    const[imageIndex,setImageIndex]=useState(null);
    const changeSlide=(direction)=>{
if(direction==="left"){
     if(imageIndex===0){
      setImageIndex(images.length-1);
     }
     else{
        setImageIndex(imageIndex-1);
     }
}
  else{
    if(imageIndex===images.length-1){
        setImageIndex(0);

    }else{
        setImageIndex(imageIndex+1);

    }
  }
    }
  return (
    <div className="Slider">
        {imageIndex!==null &&(
        <div className="fullSlider">
            <div className="arrow" onClick={()=>changeSlide("left")}>
            <img src="/th (2).jpg" alt=""/>
            </div>
            <div className="imgContainer">
                <img src={images[imageIndex]} alt=""/>
            </div>
            <div className="arrow"onClick={()=>changeSlide("right")}>
            <img src="/th (3).jpg" alt=""/>
            </div>
            <div className="close" onClick={()=>setImageIndex(null)}>x</div>
        </div>
        )}
        <div className="bigImage">
                <img src={images[0]} alt="" onClick={()=>setImageIndex(0)}/>
        </div>
        <div className='smallImages'>
            {images.slice(1).map((image,index)=>(
            <img  
            src={image}
             alt="" 
             key={index} 
             onClick={()=>setImageIndex(index+1)}/>
            ))}
        </div>
    </div>
  );
}

export default Slider;