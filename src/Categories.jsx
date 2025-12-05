import { FaArrowDownShortWide } from "react-icons/fa6";
import { MdFreeBreakfast } from "react-icons/md";
import { MdSoupKitchen } from "react-icons/md";
import { GiNoodles } from "react-icons/gi";
import { MdFoodBank } from "react-icons/md";
import { FaPizzaSlice } from "react-icons/fa6";
import { GiHamburger } from "react-icons/gi";


const Categories =[
    {
        id:1,
        name:"All",
        image:<FaArrowDownShortWide className="w-[60px] h-[60px]"/>
    },
    
    {
        id:2,
        name:"Breakfast",
        image:<MdFreeBreakfast className="w-[60px] h-[60px]"/>
    },
    
    {
        id:3,
        name:"Soup",
        image:<MdSoupKitchen className="w-[60px] h-[60px]"/>
    },
    
    {
        id:4,
        name:"Pasta",
        image:<GiNoodles className="w-[60px] h-[60px]"/>
    },
    
    {
        id:5,
        name:"FoodBank",
        image:<MdFoodBank className="w-[60px] h-[60px]"/>
    },
    
    {
        id:6,
        name:"Pizza",
        image:<FaPizzaSlice  className="w-[60px] h-[60px]"/>
    },
    
    {
        id:7,
        name:"Hamburger",
        image:<GiHamburger className="w-[60px] h-[60px]"/>
    },
    
]
export default Categories