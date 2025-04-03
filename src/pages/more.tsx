import React, { FunctionComponent, createContext, useContext, useEffect } from "react";
import { Caat } from "./Shop";
import { NavLink, useParams } from "react-router-dom";
import { useState } from "react";
import './Shop.css';
import Begin6 from "./Begin6";
import Contextt from "./Contextt";
import { Newwfoodcontext } from "./Contextt";
import './index.d';
import stars from '../images/Star.png';
import './Details.css';
import End from "./End";
import { error } from "console";
import { useDispatch, useSelector } from 'react-redux';
import { add } from "./store/cartSlice";
import { UseSelector } from "react-redux";
const More = () => {
  const {Food,setFood}=useContext(Newwfoodcontext);
const[Number,setnumber]=useState<number>(+1);
const[showitems, setitems]=useState(false);
const[Items, setitem]=useState<Caat[]>([]);
const[Items1, setitem1]=useState<Caat[]>([]);
const[Cartitems,setCart]=useState<Caat | any>([])
const Cartproducts=useSelector((state:any)=>state.Cart);
  const { id } =useParams();
  const [newArray,setnw]=useState([]);
  console.log('id from url',id);
  const parseId= id!==undefined ? parseInt(id) : undefined;
  console.log(parseId);
  const SelectedItem = Food.results.find((food:Caat) =>
    {
  return food.id == parseId
 } );
console.log(SelectedItem);
const dispatch=useDispatch();
  const Minus=()=>
    {
        if(Number!==1)
          {
            setnumber(Number-1);
          }
          else
          {
            setnumber(Number);
          }
    }
    const SetClick=(SelectedItem:any)=>
      {
        setitems(true);   
        dispatch(add(SelectedItem));
  
      }
       useEffect(()=>
        {
          window.scrollTo(0,0)
        },[])
   
  return (
   <>
   <Begin6/>
   <div style={{backgroundColor:"white"}}>
   {SelectedItem ? (
    <div  className="productdetails">
    <div>  
    <img src={SelectedItem.image} className="selectimg" />  
    </div>
    <div className="product2">
    <div className="Descc">{SelectedItem.title}</div>
    <div className="starrow">
         <div><img src={stars} /> <img src={stars} /> <img src={stars} /> <img src={stars} /> <img src={stars} /></div>
         <div>|</div>
         <div>5.0 Rating</div>
         <div>|</div>
         <div>22 Reviws</div>
    </div>
    <div className="Descc3">
         <div className="plusandminus">
           <div className="minus" onClick={Minus}>-</div> <div className="num">{Number}</div> <div className="minus" onClick={()=> setnumber(Number+1) } >+</div>
          </div>
          <div><button className="addtocart" key={SelectedItem.id} onClick={()=>SetClick(SelectedItem)}>Add to Cart</button></div>
          {showitems ? (           
            <>
            <div className="numsir">{Cartproducts.length}</div>
            <div className="cartt">
              <div className="cartx">
            <div className="ccc">Cart items</div> <div className="cccx" onClick={()=>setitems(false)}>X</div> </div>
           <div className="threerow">
            <div><img src={SelectedItem.image}className="smallimm"/></div> <div className="selecttitle">{SelectedItem.title}</div>  
            </div>
       <NavLink to="/Cart"> <div><button className="viewcart">View my Cart</button></div> </NavLink>  
                </div> 
               
            </>
           ) : null  }
    </div>
    </div>
    </div>
   ): (
    <p>Item not found</p>
   ) }
   </div>
   <End/>

   </>
    
  )
}

export default More
