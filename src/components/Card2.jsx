import React from 'react'
import image1 from "../assets/image1.jpg";
import { MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { Decrementqt, Incrementqt, RemoveItem } from '../redux/cartSlice';
function Card2 ({name , id , price , image , qt}) {
    let dispatch = useDispatch()
    return (
        <div className='w-full h-[155px] p-2  shadow-2xl flex justify-between '>
            <div className='w-[60%] h-full flex gap-5 '>
                <div className='w-[60%] h-full overflow-hidden rounded-xl '>
                    <img src={image} alt="" className='object-cover' />
                </div>
                <div className='w-[40%] h-full flex flex-col gap-3'>
                    <div className='text-lg text-black font-bold '>{name}</div>
                    <div className='w-[110px] h-[50px] bg-red-400 flex rounded-lg overflow-hidden text-xl  shadow-2xl font-semibold border-2 border-green-400 '>
                        <button className='w-[30%] h-full bg-white hover:bg-gray-200 flex justify-center items-center 'onClick={()=>{qt>1?dispatch(Decrementqt(id)):1}}>-</button>
                        <span className='w-[40%] h-full bg-gray-500 flex justify-center items-center text-white'>{qt}</span>
                        <button className='w-[30%] h-full bg-white hover:bg-gray-200 flex justify-center items-center' onClick={()=>{dispatch(Incrementqt(id))}}>+</button>
                    </div>
                </div>
            </div>
            <div className='flex flex-col justify-start items-end gap-6'>
          <span className='text-xl text-fuchsia-500 font-bold '>{price}</span>
          <MdDelete className='w-[30px] h-[30px] text-red-500 cursor-pointer' onClick={()=>{dispatch(RemoveItem(id))}}/>
            </div>
        </div>
    )
}

export default Card2
