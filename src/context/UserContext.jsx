import React, { createContext, useState } from 'react'
import { food_items } from '../food'
export const datacontext = createContext()

function Usercontext({ children }) {
    const [Cate, setCate] = useState(food_items)
    const [input, setinput] = useState("")

    const [show, setshow] = useState()
      const [email, setemail] = useState()

    let data = {
        input,
        setinput,
        Cate,
        setCate,
        show,
        setshow,
        email,
        setemail
    }

    return (
        
            <datacontext.Provider value={data}>
                {children}
            </datacontext.Provider>
        
    )
}

export default Usercontext
