import NoCommisonLeft from "./NoCommisonLeft/NoCommisonLeft";
import NoCommisonRight from "./NoCommisonRight/NoCommisonRight";


const NonCommison = () => {
    return (
        <div className="">
            <div className="flex flex-col lg:flex-row gap-4 mt-6 lg:mt-20 px-2">
                <NoCommisonLeft />
                <NoCommisonRight />
            </div>
        </div>
    );
};

export default NonCommison;