import React from 'react'
import { useState } from 'react';
function Button({color, text}) {
    const [bgColor, setBGColor] = useState("white");
    document.querySelector("body").style.backgroundColor=bgColor;
    const click = ()=>{
        setBGColor("");
        setBGColor(color);
    }
    const style = {width : "80px", height : "30px", margin : "10px", border : "1px solid #ccc", borderRadius : "15px", cursor : "pointer", backgroundColor : color, color:"white"};
  return (

    <button style={style} onClick={click}>{text}</button>

    
  )
}

export default Button