import React from "react";
import { createSlice } from "@reduxjs/toolkit";
const initialState:any=[];
const Cartslice=createSlice(
    {
        name:"Cart",
        initialState,
        reducers:
        {
           add(state,action)
           {
            state.push(action.payload);
           },
           remove(state,action)
           {
            return state.filter((item:any)=>item.id!==action.payload);
           } 
        }

    });
export const {add,remove}=Cartslice.actions;
export default Cartslice.reducer;    