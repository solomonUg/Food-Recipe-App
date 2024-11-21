import { MdOutlineSetMeal } from "react-icons/md";


export default function NavBar () {
    return <nav className="w-full flex justify-center bg-slate-100 text-black shadow-xl">
        <div className="w-[90%] flex justify-between py-5">
        <div className="text-2xl font-bold cursor-pointer text-green-600 flex justify-center items-center gap-1"> <span className="text-red-600"><MdOutlineSetMeal /></span>SnowFoods</div>

            <ul className="flex gap-5 text-xl text-green-600 ">
                <a href="#" className="hover:bg-green-100 p-2 rounded-lg"><li>About</li></a>
                <a href="#"className="hover:bg-green-100 p-2 rounded-lg"><li>Contact Us</li></a>
                <a href="#" className="hover:bg-green-100 p-2 rounded-lg"><li>Blog</li></a>
                <button className="bg-green-600 p-2 rounded-2xl text-white flex items-center justify-center font-semibold hover:bg-green-700">Sign In </button>
            </ul>
        </div>
    </nav>
}