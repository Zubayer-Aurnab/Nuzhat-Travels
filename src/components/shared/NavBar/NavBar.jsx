import { RiMenuFold2Fill } from "react-icons/ri";
import { MdSearch } from "react-icons/md";
import { FaSms } from "react-icons/fa";
import { IoNotificationsCircleSharp } from "react-icons/io5";
import { FaLightbulb } from "react-icons/fa";

const NavBar = () => {
    return (
        <>
            <div className="border-black border mt-8" ></div>
            <div className="flex justify-between items-center shadow-sm" >

                <div className="flex items-center">
                    <div>
                        <div className="p-2 bg-slate-200 w-10 flex justify-center items-center rounded-md">
                            <RiMenuFold2Fill />
                        </div>

                    </div>
                    <div className="relative    py-2 ml-2">
                        <input
                            type="text"
                            className="border-[1px] border-black rounded-full" />
                        <div className="absolute left-[160px] top-[13px]">
                            <MdSearch />
                        </div>
                    </div>
                </div>

                <div className="flex" >
                    <div className="flex ">
                        <div className="w-10 flex justify-center items-center">
                            <FaSms className="text-blue-400 text-3xl" />
                        </div> <div className="w-10 flex justify-center items-center">
                            <IoNotificationsCircleSharp className="text-blue-400 text-3xl" />
                        </div>
                        <div className="w-10 flex justify-center items-center">
                            <FaLightbulb className="text-blue-400 text-2xl" />
                        </div>
                    </div>
                    <div className="">
                        <img className="w-full" src="https://nuzhattravelexpress.com/wp-content/uploads/2023/06/nuzhat-travel-express-logo-167x56.png" alt="" />
                    </div>

                </div>
            </div>
        </>
    );
};

export default NavBar;