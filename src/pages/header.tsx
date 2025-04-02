import React, { useRef, useState } from "react";
import './header.css';
import Head2 from "./head2";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
const Heeder=()=>
{
const[showop,setShowop]=useState<boolean>(false);        
return(
<>
<div className="header">
    Food <span className="tuck">tuck</span>
</div>
<div className="head">
    <div className="options">
        <p className="pp">Home</p>
     <NavLink to="Menu" className="NavLink"> <p className="pp">Menu</p> </NavLink>  
     <NavLink to="/Blog" className="NavLink"><p className="pp">Blog</p> </NavLink>
        <p className="pp">Pages</p>
      <NavLink to="/Bout" className="NavLink"> <p className="pp">About</p></NavLink> 
      <NavLink to="Shop" className="NavLink"> <p className="pp">Shop</p></NavLink> 
      <NavLink to="/Sign" className="NavLink"> <p className="pp">Contact</p></NavLink> 
    </div>
    <div className="right">
        <input type="text" placeholder="Search..." className="headin" onChange={()=>setShowop(true)} onBlur={()=>setShowop(false)} />
        <img src="/images/Group.png"  className="search"/> 
       <NavLink to="/Cart" className="NavLink"><img src="../../public/images/Handbag (1).png" className="handbag"/></NavLink> 
    </div>    
</div>
<Head2/>

</>
)
}
export default Heeder