import { FaPlus } from "react-icons/fa";


const FlightDetails = () => {
    return (
        <div>
            <div className="bg-gray-200 p-4 pb-8 rounded-lg mt-4 px-2">

                <div className="divider my-8 ">
                    <h1 className="text-lg font-bold">Flight Details ✈️</h1>
                </div>

                <div className=" flex gap-10">
                    <div className="w-full" >
                        <label > <span className="text-red-500 font-bold">*</span>  From :</label> <br />
                        <select

                            name="Client name" id="" className="mt-2 p-1  rounded-md">
                            <option value="" disabled>Select Vendor  </option>
                            <option value="">Clinet </option>
                            <option value="">Clinet </option>
                            <option value="">Clinet </option>
                        </select>
                    </div>
                    <div className="w-full">
                        <label > <span className="text-red-500 font-bold">*</span> Gross Fare (Sale):</label> <br />
                        <select

                            name="Client name" id="" className="mt-2 p-1  rounded-md">
                            <option value="" disabled>Select Vendor  </option>
                            <option value="">Clinet </option>
                            <option value="">Clinet </option>
                            <option value="">Clinet </option>
                        </select>
                    </div>
                    <div className="w-full">
                        <label > <span className="text-red-500 font-bold">*</span> Base Fare (Buy):</label> <br />

                        <select

                            name="Client name" id="" className="mt-2 p-1  rounded-md">
                            <option value="" disabled>Select Vendor  </option>
                            <option value="">Clinet </option>
                            <option value="">Clinet </option>
                            <option value="">Clinet </option>
                        </select>
                    </div>
                    <div className="w-full">
                        <label > <span className="text-red-500 font-bold">*</span> Vendor:</label> <br />
                        <input
                            className="mt-2 p-1 rounded-md"
                            type="number" />
                    </div>

                </div>
                <div className=" flex gap-10 mt-8">

                    <div className="">
                        <label > <span className="text-red-500 font-bold">*</span>Flight Date:</label> <br />
                        <input
                            className="mt-2 p-1 rounded-md"
                            type="date" />
                    </div>
                    <div className="">
                        <label > <span className="text-red-500 font-bold">*</span> Departure Date:</label> <br />
                        <input
                            className="mt-2 p-1 rounded-md"
                            type="date" />
                    </div>
                    <div className="">
                        <label > <span className="text-red-500 font-bold">*</span> Travel Time:</label> <br />
                        <input
                            className="mt-2 p-1 rounded-md"
                            type="date" />
                    </div>
                    <div className=" flex justify-center items-end ">
                        <button className="p-2 px-4 rounded-md bg-blue-400 text-white">
                            <FaPlus />
                        </button>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default FlightDetails;