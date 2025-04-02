import React from 'react'
import './index.d'
import chery from '../images/unsplash_4ycv3Ky1ZZU.png';
import tol1 from '../images/MagnifyingGlass.png';
import tol2 from '../images/User.png';
import tol3 from '../images/Tote.png';
import './begin.css';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
function Begin() {
  return (
    <>
    <img className='chery' src={chery}/>
    <div className='intro'>
         <div className='ftt'>
           Food<span className='tuckk'>tuck</span> 
         </div>
         <div className='hmt'>
           <NavLink to="/" className="NavLink"> <div className='hom'>Home</div></NavLink>
           <NavLink to="/Menu" className="NavLink"><div className='hos'>Menu</div></NavLink> 
           <NavLink to="/Blog" className="NavLink"><div className='hom'>Blog</div></NavLink> 
            <div className='hom'>Pages</div>
          <NavLink to="/Bout" className="NavLink"><div className='hom'>About</div></NavLink>  
          <NavLink to="/Shop" className="NavLink"> <div className='hom'>Shop</div></NavLink> 
          <NavLink to="/Sign" className="NavLink"> <div className='hom'>Contact</div></NavLink> 
         </div>
         <div className='iii'>
            <img src={tol1} className='i2' />
            <img src={tol2} className='i2'/>
          <NavLink to="/Cart"><img src={tol3} className='i2'/></NavLink>  
         </div>
         
    </div>
    <div className='omm'>
       <p className='men'>Our Menu</p>
    </div>
    </>
  )
}
export default Begin