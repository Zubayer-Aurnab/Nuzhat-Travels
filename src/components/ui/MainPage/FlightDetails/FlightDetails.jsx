import { Divider } from "antd";
import { FaPlus } from "react-icons/fa";


const FlightDetails = () => {
    return (
        <div>
            <div className="bg-gray-200 p-4 pb-8 rounded-lg mt-4 px-2">
                <div className="lg:my-8">
                    <Divider
                        orientation="left"
                        style={{
                            fontSize: "18px",
                            fontWeight: "700"
                        }}
                    >
                        Flight Details ✈️
                    </Divider>
                </div>

                <div className=" flex flex-wrap lg:flex-row gap-3 lg:gap-10">
                    <div className="" >
                        <label > From :</label> <br />
                        <select

                            name="Client name" id="" className="lg:mt-2 lg:p-1  rounded-md">
                            <option value="" disabled>Select Vendor  </option>
                            <option value="">Clinet </option>
                            <option value="">Clinet </option>
                            <option value="">Clinet </option>
                        </select>
                    </div>
                    <div className="">
                        <label >  Gross Fare (Sale):</label> <br />
                        <select

                            name="Client name" id="" className="lg:mt-2 lg:p-1  rounded-md">
                            <option value="" disabled>Select Vendor  </option>
                            <option value="">Clinet </option>
                            <option value="">Clinet </option>
                            <option value="">Clinet </option>
                        </select>
                    </div>
                    <div className="">
                        <label >  Base Fare (Buy):</label> <br />

                        <select

                            name="Client name" id="" className="lg:mt-2 lg:p-1  rounded-md">
                            <option value="" disabled>Select Vendor  </option>
                            <option value="">Clinet </option>
                            <option value="">Clinet </option>
                            <option value="">Clinet </option>
                        </select>
                    </div>
                    <div className="">
                        <label >  Vendor:</label> <br />
                        <input
                            className="lg:mt-2 lg:p-1 rounded-md"
                            type="number" />
                    </div>

                </div>
                <div className=" flex flex-wrap lg:flex-row gap-3 lg:gap-10 mt-8">

                    <div className="">
                        <label > Flight Date:</label> <br />
                        <input
                            className="mt-2 p-1 rounded-md"
                            type="date" />
                    </div>
                    <div className="">
                        <label >  Departure Date:</label> <br />
                        <input
                            className="mt-2 p-1 rounded-md"
                            type="date" />
                    </div>
                    <div className="">
                        <label >  Travel Time:</label> <br />
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