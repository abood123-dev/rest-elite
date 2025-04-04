import React, { useEffect, useState } from 'react';
import Begin8 from './Begin8';
import End from './End';
import { Caat } from './Shop'
import { JsxElement } from 'typescript'
import './Cart.css';
import { NavLink } from 'react-router-dom';
import { UseSelector, useSelector,useDispatch } from 'react-redux';
import { remove } from './store/cartSlice';
const Cart=() => {
  const [Data,setData]=useState<Caat>();
  const [Veri,setVeri]=useState<boolean>(false);
  const [Value,setValue]=useState<string>("")
  const dispatch=useDispatch();
  const product=useSelector((state:any)=>state.Cart)
    const applybtn=()=>
      {
         if(Value.length > 0)
          {
            setVeri(true);
          }
      }
      const Remove=(id:number)=>
        {
          dispatch(remove(id))
        }
  return (
    <>
    <Begin8/>
    
  
      <div style={{backgroundColor:"white",paddingBottom:"50px"}}>
     <div className='yourcart'>Your Cart :</div>
      <div className='Cartrows'>
      {product.map((food:Caat)=>
      {
        return(
          
          <div key={food.id} className='Cartrow'>
           <img src={food.image} className='Dataimg'/>
           <div className='datadesc'>{food.title}</div>
           <div style={{color:"red",fontSize:"30px",cursor:"pointer"}} onClick={()=>Remove(food.id)} >x</div>
          </div>
          
        )
      })

      }     
      </div>
      <div className='inrowdata'>
           <div>
                <div className='datadesc2'>
                  Coupon Code
                </div>
                <div className='datarows'>
                  <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non</div> 
                  <div className='inandbut'><input placeholder='enter here code' className='datain' onChange={(e)=>setValue(e.target.value)}/><button className='apply' onClick={applybtn}>Apply</button></div>
                {Veri ? (
                  <div style={{color:"green"}}> your code is verified</div>
                ) : null}
                </div>



           </div>
           <div className='alldata'>
                <div className='datadesc3'>
                 Total Bill
                </div>
              
                <div>
              <NavLink to="/Checkout"> <button className='pac'>Proceed to Checkout</button></NavLink> 
                </div>
           </div>
      </div>
      </div>
      <End/>
      
    </>
     
     
     
   
   
   
  )
}

export default Cart
