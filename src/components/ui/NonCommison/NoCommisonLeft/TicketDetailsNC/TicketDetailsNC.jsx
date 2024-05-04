import { Divider } from "antd";


const TicketDetailsNC = () => {
    return (
        <div className="bg-gray-200 p-4 rounded-lg mt-4 px-2">


            <div className="divider  lg:my-8">
                <Divider
                    orientation="left"
                    style={{
                        fontSize: "18px"
                    }}
                >
                    Ticket Details 🟥
                </Divider>
            </div>

            <div className=" flex flex-col lg:flex-row gap-2">
                {/* left */}
                <div>
                    <div className=" flex flex-wrap lg:flex-row  gap-3 lg:gap-7">
                        <div className="" >
                            <label > <span className="text-red-500 font-bold">*</span> Ticket No :</label> <br />
                            <input
                                className="mt-2 lg:p-1 rounded-md"
                                type="number" />
                        </div>
                        <div className="">
                            <label > <span className="text-red-500 font-bold">*</span> Client Price:</label> <br />
                            <input
                                className="mt-2 lg:p-1 rounded-md"
                                type="number" />
                        </div>
                        <div className="">
                            <label > <span className="text-red-500 font-bold">*</span> Purchase Price/Partial Cost:</label> <br />
                            <input
                                className="mt-2 lg:p-1 rounded-md"
                                type="number" />
                        </div>
                        <div className="">
                            <label > <span className="text-red-500 font-bold">*</span> Vendor:</label> <br />
                            <select

                                name="Client name" id="" className="mt-2 lg:p-1  rounded-md w-44">
                                <option value="" disabled>Select Vendor  </option>
                                <option value="">Clinet </option>
                                <option value="">Clinet </option>
                                <option value="">Clinet </option>
                            </select>
                        </div>
                        <div className="" >
                            <label > <span className="text-red-500 font-bold">*</span> Airline :</label> <br />
                            <select

                                name="Client name" id="" className="mt-2 lg:p-1  rounded-md w-44">
                                <option value="" disabled>Select Airline  </option>
                                <option value="">Clinet </option>
                                <option value="">Clinet </option>
                                <option value="">Clinet </option>
                            </select>
                        </div>
                        <div className="">
                            <label > <span className="text-red-500 font-bold">*</span> Extra Fee :</label> <br />
                            <input
                                className="mt-2 lg:p-1 rounded-md"
                                type="number" />
                        </div>
                        <div className="">
                            <label > <span className="text-red-500 font-bold">*</span> PRN:</label> <br />
                            <input
                                className="mt-2 lg:p-1 rounded-md"
                                type="number" />
                        </div>
                        <div className="" >
                            <label > Issue Date  :</label> <br />
                            <input
                                className="mt-2 lg:p-1 rounded-md"
                                type="date" />
                        </div>
                        <div className="">
                            <label > Journy Date:</label> <br />
                            <input
                                className="mt-2 lg:p-1 rounded-md"
                                type="date" />
                        </div>
                        <div className="">
                            <label > Return Date:</label> <br />
                            <input
                                className="mt-2 lg:p-1 rounded-md"
                                type="date" />
                        </div>
                    </div>
                </div>
                {/* right */}
                <div className="">
                    <div className="border border-black p-4 space-y-4 rounded-lg ">
                        <div className="">
                            <label > Client Price:</label> <br />
                            <input
                                className="mt-2 lg:p-1 rounded-md"
                                type="number" />
                        </div>
                        <div className="">
                            <label > Purchase Price:</label> <br />
                            <input
                                className="mt-2 lg:p-1 rounded-md"
                                type="number" />
                        </div>
                        <div className="">
                            <label > Profit:</label> <br />
                            <input
                                className="mt-2 lg:p-1 rounded-md"
                                type="number" />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default TicketDetailsNC;