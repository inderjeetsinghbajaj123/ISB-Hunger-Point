import React, { useContext, useState } from 'react'
import Navbar from './Navbar'
import Categories from '../Categories'
import Card from './Card'
import { food_items } from '../food'
import { datacontext } from '../context/UserContext'
import { RxCross1 } from "react-icons/rx";
import Card2 from './Card2'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'


const Home = () => {
    const { Cate, setCate, input, show, setshow, email, setemail } = useContext(datacontext);

    const categoryMap = {
        "Breakfast": "breakfast",
        "Soup": "soups",
        "Pasta": "pasta",
        "FoodBank": "main_course",
        "Pizza": "pizza",
        "Hamburger": "burger",
        "All": "All"
    }

    function filter(category) {
        if (category === "All") {
            setCate(food_items)
        } else {
            const actualCategory = categoryMap[category];
            const newlist = food_items.filter(item => item.food_category === actualCategory);
            setCate(newlist)
        }
    }

    let items = useSelector(state => state.cart)

    let subtotal = items.reduce((total, item) => total + item.qt * item.price, 0)  //initial is zero then will add up in subtotal
    let deliveryfee = 20
    let taxes = subtotal * 0.5 / 100
    let total = Math.floor(subtotal + taxes + deliveryfee)
    return (
        <>
            <div className='w-full min-h-screen bg-orange-100 '>
                <Navbar />
                {!input ? <div className='flex flex-wrap justify-center items-center gap-5 w-full py-5 '>
                    {Categories.map((item) => {
                        return <div className='w-[140px] h-[150px] bg-white flex flex-col items-start gap-5 shadow-2xl p-6 text-[20px] text-gray-600 rounded-2xl hover:bg-purple-200 cursor-pointer transition-all duration-200' key={item.name} onClick={() => filter(item.name)}>
                            {item.image}
                            {item.name}
                        </div>
                    })}
                </div> : null}

                <div>
                    <div className='w-full flex flex-wrap gap-5 px-5 justify-center items-center pt-8 pb-8 '>
                        {Cate.length > 1 ? Cate.map((item) => (
                            <Card key={item.id} name={item.food_name} image={item.food_image} price={item.price} id={item.id} type={item.food_type} />
                        )) : <div className='text-2xl text-gray-700'>No dish found</div>}

                    </div>
                </div>
                <div className={`w-full md:w-[40vw] h-full flex flex-col items-center fixed top-0 right-0 bg-orange-200 shadow-2xl p-6 transition-all duration-500 overflow-auto ${show ? "translate-x-0" : "translate-x-full"} `}>
                    <header className='w-full flex justify-between items-center '>
                        <span className='text-fuchsia-500 text-[22px] font-bold '>order items</span>
                        <RxCross1 className='text-[22px] font-bold text-black w[30px] h-[30px] cursor-pointer hover:text-fuchsia-600' onClick={() => setshow(false)} />
                    </header>
                    {items.length > 0 ? <>
                        <div className='w-full mt-9 flex flex-col gap-6 '>
                            {items.map((item) => (
                                <Card2 key={item.id} name={item.name} price={item.price} image={item.image} id={item.id} qt={item.qt} />
                            ))}
                        </div>
                        <div className='w-full border-2 border-t-2 border-b-2 border-gray-400 mt-7 flex flex-col gap-2 p-6'>
                            <div className='w-full flex justify-between items-center'>
                                <span className='text-lg text-gray-600 font-bold'>Subtotal</span>
                                <span className='text-purple-500 font-semibold text-lg'>Rs {subtotal}/-</span>
                            </div>
                            <div className='w-full flex justify-between items-center'>
                                <span className='text-lg text-gray-600 font-bold'>Delivery-Fee</span>
                                <span className='text-purple-500 font-semibold text-lg'>Rs {deliveryfee}/-</span>
                            </div>
                            <div className='w-full flex justify-between items-center'>
                                <span className='text-lg text-gray-600 font-bold'>Taxes</span>
                                <span className='text-purple-500 font-semibold text-lg'>Rs {taxes}/-</span>
                            </div>

                        </div>
                        <div className='w-full flex justify-between items-center p-9'>
                            <span className='text-lg text-gray-600 font-bold'>TOTAL</span>
                            <span className='text-purple-500 font-semibold text-2xl'>Rs {total}/-</span>
                        </div>
                        <button className='w-[80%] p-3 rounded-lg bg-fuchsia-500 font-bold text-white hover:bg-fuchsia-300 transition-all' onClick={() => { toast.success("Order Placed") }}>Place Order</button>

                    </> : <div className='text-center text-2xl pt-5 font-bold'>Empty Cart</div>}

                </div>
            </div>
            <div className='w-ful h-10 flex justify-center items-center text-xl bg-black text-white'>Made with ❤️ By Inderjeet</div>
            <div className={`w-[85vw] md:w-[40vw] h-full fixed top-0 left-0 bg-orange-200 shadow-2xl p-6 transition-transform duration-500 overflow-auto z-40 ${email ? "translate-x-0" : "-translate-x-full"}`}>
                <RxCross1 className='text-3xl font-bold text-black absolute top-4 right-4 cursor-pointer hover:text-fuchsia-600' onClick={() => setemail(false)} />

                <div className='relative mt-12'>
                    <div className='w-full font-bold text-xl flex justify-center py-3 p-3'>Suggestion box😊</div>
                    <form action="https://api.web3forms.com/submit" method="POST" className="flex flex-col gap-4">
                        <input type="hidden" name="access_key" value="e7ed3c53-b70f-4031-8ae2-58d34c9bf500" />
                        <input type="text" name="name" className="p-2 bg-white border rounded-md" placeholder='Enter your name' required />
                        <input type="email" name="email" className="p-2 bg-white border rounded-md" placeholder='Enter your email' required />
                        <textarea name="message" className="p-2 bg-white border rounded-md h-32" placeholder='Suggestions and Review' required />
                        <button type="submit" className="p-2 bg-purple-500 text-white rounded-md">
                            Submit Form
                        </button>
                    </form>
                </div>
            </div>

        </>
    )
}

export default Home
