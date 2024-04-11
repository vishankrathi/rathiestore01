import {useState} from "react";
import "./Navbar.scss";
function Navbar(){
    const [open,setOpen]=useState(false)
 return(
<nav>
    <div className="left">
        <a href="/" className="logo">
            <img src="/logo (5).png" alt="" />
            <span>rathiestate</span>
        </a>
        <a href="/">home</a>
        <a href="/">about</a>
        <a href="/">contacts</a>
        <a href="/">agent</a>
    </div>
    <div className="right">
        <a href="/" >Sign in</a>
        <a href="/" className="register">Sign up</a>
        <div className="menuIcon">
            <img src="/menu (1).png" alt="" 
            onClick={()=>setOpen((prev)=>!prev)}
            />
        </div>
        <div className={open ? "menu active":"menu"}>
         <a href="/">home</a>
         <a href="/">about</a>
         <a href="/">Contact</a>
         <a href="/">Agents</a>
         <a href="/">Sign in </a>
         <a href="/">Sign up </a>
        </div>
    </div>
</nav>
 );
 
}
export default Navbar; 