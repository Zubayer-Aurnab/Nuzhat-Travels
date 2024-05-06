import { Select } from "antd";
import SearchClient from "../../MainPage/MainLeft/SearchClient/SearchClient";


const ExistingClient = () => {
    return (
        <div className="px-4 mt-10">
            <SearchClient />
            <div className="p-4 bg-gray-200 mt-10 rounded-lg ">
                <h1 className=" text-center font-bold" >Search Ticket</h1>
                <div className="flex justify-center mt-5" >
                    <Select
                    placeholder="Search By Ticket No"
                    className="w-1/2 " />
                </div>

            </div>
        </div>
    );
};

export default ExistingClient;