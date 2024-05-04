import { RiMenuFold2Fill } from "react-icons/ri";
import { MdSearch } from "react-icons/md";
import { IoMail } from "react-icons/io5";
import { MdCircleNotifications } from "react-icons/md";
import { FaLightbulb } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { controlNav } from "../../../Redux/Features/NavbarSlice/NavbarSlice";
import { Button } from "antd";

const NavBar = () => {
    const dispatch = useDispatch()
    const handelOpenNav = () => {
        dispatch(controlNav())
    }
    return (
        <>
            <div className="border-black border lg:mt-2" ></div>
            <div className="flex justify-between items-center shadow-md lg:px-2" >
                <div className="flex items-center  ">
                    <div className="px-2 lg:px-0">
                        <div
                            onClick={handelOpenNav}
                            className="p-2 bg-slate-200 w-10 flex lg:hidden justify-center items-center rounded-md">
                            <RiMenuFold2Fill />
                        </div>

                    </div>
                    <div className="px-2 lg:px-0 hidden lg:flex">
                        <div className="">
                            <img className="w-full" src="https://nuzhattravelexpress.com/wp-content/uploads/2023/06/nuzhat-travel-express-logo-167x56.png" alt="" />
                        </div>

                    </div>

                </div>
                <div className="py-2  w-full">
                    <div className="flex justify-center relative ">
                        <input
                            type="text"
                            className="border-[1px] border-black rounded-full lg:w-1/2" />
                        <div className="absolute left-[85%] lg:left-[73%] top-1">
                            <MdSearch />
                        </div>
                    </div>
                </div>

                <div className="flex" >
                    <div className="flex gap-2 lg:gap-0 px-2">
                        <div className="lg:w-10 flex justify-center items-center">
                            <IoMail className="text-blue-400 text-2xl lg:text-3xl" />
                        </div> <div className="lg:w-10 flex justify-center items-center">
                            <MdCircleNotifications className="text-blue-400 text-2xl lg:text-3xl " />
                        </div>
                        <div className="lg:w-10 flex justify-center items-center">
                            <FaLightbulb className="text-blue-400 text-xl lg:text-2xl" />
                        </div>
                        <div>
                            <Button type="primary">Login</Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NavBar;