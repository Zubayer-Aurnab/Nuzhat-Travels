import RadioButtons from "../RadioButtons/RadioButtons";
import MainLeft from "./MainLeft/MainLeft";
import "./MainPage.css";
import MainRight from "./MainRight/MainRight";


const MainPage = () => {
    return (
        <div >
            <RadioButtons />
            <div className="flex flex-col lg:flex-row gap-4 mt-6 lg:mt-20 px-2">
                <MainLeft />
                <MainRight />
            </div>
        </div>
    );
};

export default MainPage;