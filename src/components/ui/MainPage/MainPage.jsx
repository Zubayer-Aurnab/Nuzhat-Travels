import NavBar from "../../shared/NavBar/NavBar";
import RadioButtons from "../RadioButtons/RadioButtons";
import MainLeft from "./MainLeft/MainLeft";
import MainRight from "./MainRight/MainRight";


const MainPage = () => {
    return (
        <div className="h-screen  lg:w-[85%] mt-[1px]">
            <NavBar />
            <RadioButtons />
            <div className="flex flex-col lg:flex-row gap-4 mt-20 px-2">
                <MainLeft />
                <MainRight />
            </div>
        </div>
    );
};

export default MainPage;