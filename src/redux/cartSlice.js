import { createSlice } from "@reduxjs/toolkit";

const cartslice =  createSlice({
    name:"cart",
    initialState:[],
    reducers:{
        AddItem:(state,action)=>{
            let exist = state.find((item)=>item.id===action.payload.id)
            if(exist){
                return state.map((item)=>(item.id===action.payload.id?{...item ,qt : item.qt+1}:item))
            }else{

                state.push(action.payload)
            }
        },
        RemoveItem:(state , action)=>{
            return state.filter((item)=>item.id!==action.payload)
        },
        Incrementqt:(state , action)=>{
             return state.map((item)=>(item.id===action.payload?{...item ,qt : item.qt+1}:item))
        },
        Decrementqt:(state,action)=>{
           return state.map((item)=>(item.id===action.payload?{...item ,qt : item.qt-1}:item))  
        }
    }
})

export const {AddItem,RemoveItem,Incrementqt,Decrementqt}= cartslice.actions
export default cartslice.reducer