import React, { Children, createContext, useContext, useEffect, useState } from 'react'
import Begin5 from './Begin5';
import './Shop.css';
import End from './End';
import { NavLink } from 'react-router-dom';

export type Caat=
{
   id:number,
   image:string,
   title:string 
} 
export type Coot=
{
  Food:any,
  setFood:any,
}

const Shop = () =>
     {
    const[Food,setFood]=useState<Caat | any>([])
    const[newFood,setnew]=useState<Caat | any>([])
    const[newwFood,setneww]=useState<Caat | any>([])
    const[newwwFood,setnewww]=useState<Caat | any>([])
    const[Condition,setCond]=useState<boolean>(false);
    const[Loading,setLoading]=useState<boolean>(true);
    const API_KEY = '8beaf6df05df4ab19f1ea9125b5e4701';
    const endpoint = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&number=50`;
  useEffect(()=>
    {
         
      (async ()=>
        {
          const response=await fetch(endpoint)
          const data=await response.json();
          if(data)
            {
          setLoading(false);    
          setFood(data.results);
          console.log(data);
          setnew(data);
          setnewww(data);
          console.log(data.results);
          setFood(data.results);
            }
        })()
      
    },[endpoint])         
    useEffect(()=>
      {
       window.scrollTo(0,0);
      },[])
  return (
    <>
    <div style={{maxWidth:"100%",width:"200hv"}}>
    <div>
      <Begin5/>
    </div>
    {Loading ?
     <div style={{backgroundColor:"white"}}>
     <div className='loding'>
      Our products are loading ... </div>
     <div className='trustme'> trust me it worth waiting
    </div>
    </div>
     : 
    <div className='am'>   
    <div className='allmeals' style={{backgroundColor:"white"}}>
     {Food.map((food: Caat)=>     
     {
          return(
          <div key={food.id} className='meal' style={{color:"black"}} >
             <div>
           <img src={food.image} className='ffimg'/>
           </div>
           <div style={{height:"75px"}}>
            {food.title}
           </div>
           <NavLink to={`/More/${food.id}`}>  <button className='detailsbtn'  key={food.id}>See details</button></NavLink>
          </div>
          )})}

         </div>
      </div>
     }
      <End/>
      </div>
    </>
  )
}
export default Shop