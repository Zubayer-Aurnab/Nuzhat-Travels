import { Divider } from "antd";


const FlightDetailsNC = () => {
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

                <div className=" flex flex-wrap lg:flex-row gap-3 lg:gap-3">
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
                        <label > TO:</label> <br />
                        <select

                            name="Client name" id="" className="lg:mt-2 lg:p-1  rounded-md">
                            <option value="" disabled>Select Vendor  </option>
                            <option value="">Clinet </option>
                            <option value="">Clinet </option>
                            <option value="">Clinet </option>
                        </select>
                    </div>
                    < div className="">
                        <label >  Airline:</label> <br />

                        <select

                            name="Client name" id="" className="lg:mt-2 lg:p-1  rounded-md">
                            <option value="" disabled>Select Vendor  </option>
                            <option value="">Clinet </option>
                            <option value="">Clinet </option>
                            <option value="">Clinet </option>
                        </select>
                    </div>
                    <div className="">
                        <label >  Flight No:</label> <br />
                        <input
                            className="lg:mt-2 lg:p-1 rounded-md"
                            type="number" />
                    </div>
                    <div className="">
                        <label > Journey Date:</label> <br />
                        <input
                            className="mt-2 lg:p-1 rounded-md"
                            type="date" />
                    </div>
                    <div className="">
                        <label >  Return Date:</label> <br />
                        <input
                            className="mt-2 p-1 rounded-md"
                            type="date" />
                    </div>
                    <div className="">
                        <label >  Arrival Time:</label> <br />
                        <input
                            className="mt-2 p-1 rounded-md"
                            type="date" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FlightDetailsNC;