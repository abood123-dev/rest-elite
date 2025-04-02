import React, { useState } from "react";
import'./Head2.css'
import { transform } from "typescript";
import { NavLink, Outlet } from "react-router-dom";
const Head2=()=>
{
const[Scroll,setScroll]=useState(false);
const[Transfrom,setTransform]=useState('');
const Translate=()=>
{
window.scrollTo(0,2400)
}    
return(
<>
<div className="desc">
<div className="sec1" >
<p className="quick">Its Quick & Amazing</p>
<p className="title"><span className="th">Th</span>e Art of speed food Quality </p>
<p className="talk">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Varius sed pharetra dictum neque massa congue</p>
<NavLink to='/Menu'><button className="btn1">See Menu</button></NavLink> 
</div>
<div className="sec2">
<img className="img" src='/images/Image.png' />
</div>
</div>
<Outlet/>



</>
)
}
export default Head2