import React from 'react'
import image1 from "../assets/image1.jpg";
import { TbMichelinStarGreen } from "react-icons/tb";
import { GiChickenOven } from "react-icons/gi";
import { useDispatch } from 'react-redux';
import { AddItem } from '../redux/cartSlice';
import { toast } from 'react-toastify';

const Card = ({ name, image, id, price, type }) => {
  let dispatch = useDispatch()
  return (
    <>
      <div className='w-[300px] h-[380px] bg-white p-3 rounded-2px flex flex-col justify-evenly gap-1 shadow-2xl hover:border hover:border-fuchsia-500'>
        <div className='w-full h-1/2 overflow-hidden rounded-xl'>
          <img src={image} alt="" className='object-cover rounded-xl' />
        </div>
        <div className='text-2xl font-bold'>
          {name}
        </div>
        <div className='w-full flex justify-between items-center'>
          <div className='text-fuchsia-600 text-large font-bold '>Rs {price}</div><div className='flex justify-center items-center gap-2 text-purple-600 text-large font-semibold'>{type === "veg" ? <TbMichelinStarGreen /> : <GiChickenOven />}<span>{type}</span></div>
        </div>
        <button className='w-full p-3 rounded-2xl  bg-fuchsia-500 font-bold text-white hover:bg-fuchsia-400 transition-all' onClick={()=>{dispatch(AddItem({id:id , name:name , price:price , image:image , qt:1}))
        toast.success("Item Added")}
      }>Add to Cart</button>
      </div>
    </>
  )
}

export default Card;
