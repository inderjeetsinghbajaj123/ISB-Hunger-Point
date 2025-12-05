import React, { useContext, useEffect } from 'react'
import { IoFastFoodSharp } from "react-icons/io5";
import { datacontext } from '../context/Usercontext';
import { food_items } from '../food';
import { useSelector } from 'react-redux';


const Navbar = () => {
    let{input , setinput , Cate , setCate , show , setshow , email , setemail }=useContext(datacontext)


    useEffect(()=>{
        let newlist = food_items.filter((item)=>item.food_name.includes(input)||item.food_name.toLocaleLowerCase().includes(input))
         setCate(newlist)
    } , [input])
       let items = useSelector(state=>state.cart)
    


    return (
        <div className='w-full h-[90px] bg-fuchsia-500 flex justify-between items-center px-4 md:px-8'>
            <div className="min-w-[55px] min-h-[55px] bg-white flex justify-center items-center rounded-2xl shadow-xl cursor-pointer">
                <IoFastFoodSharp className='h-[30px] w-[30px] text-green-400 ' onClick={()=>setemail(true)} />
            </div>
            <form className='w-1/2 h-[55px] bg-white flex items-center px-5 gap-5 rounded-2xl shadow-xl  ' onSubmit={(e)=>e.preventDefault()} >
                <div className="w-6 h-6 flex justify-center items-center">

                    <lord-icon
                        src="https://cdn.lordicon.com/wjyqkiew.json"
                        trigger="hover"
                        stroke="bold"
                        colors="primary:#121331,secondary:#3080e8"
                        style={{ width: "100%", height: "100%" }}>
                    </lord-icon>
                </div>
                <input type="text" placeholder='search-items' className='w-full outline-none text-[18px]' onChange={(e)=>setinput(e.target.value)} value={input} />

            </form>
            <div className="min-w-[55px] min-h-[55px] bg-white flex justify-center items-center rounded-2xl shadow-xl relative cursor-pointer" onClick={()=>{setshow(true)}}>
                <span className='absolute top-0 right-2 font-bold text-gray-700'>{items.length}</span>
                <lord-icon
                    src="https://cdn.lordicon.com/iewbcboh.json"
                    trigger="hover"
                    style={{ width: "40px", height: "40px" }}>
                </lord-icon>
            </div>
        </div>
    )
}

export default Navbar