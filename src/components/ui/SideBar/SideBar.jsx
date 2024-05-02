import { useSelector } from "react-redux";
import Clock from "../Clock/Clock";
import Dropdowns from "../Dropdowns/Dropdowns";


const SideBar = () => {
    const { open } = useSelector((state) => state.navbar)
    // console.log(open)
    return (
        <div
            style={{
                transition: "right 1s",
            }}
            className={` relative lg:flex flex-col ${open ? "right-[450px] lg:right-0" : "right-0 "}  lg:w-[15 %] border-[1px] h-[100vh] border-black rounded-xl mt-[1px] z-20 bg-white overflow-y-scroll `}>
            <Clock />
            <Dropdowns />
        </div>
    );
};

export default SideBar;