import Clock from "../Clock/Clock";
import Dropdowns from "../Dropdowns/Dropdowns";


const SideBar = () => {

    return (
        <div className="  w-[15%] border-[1px] h-screen border-black rounded-xl mt-[1px]">
            <Clock />
            <Dropdowns />
        </div>
    );
};

export default SideBar;