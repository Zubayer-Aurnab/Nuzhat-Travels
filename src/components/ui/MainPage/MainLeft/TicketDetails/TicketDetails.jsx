

const TicketDetails = () => {
    return (
        <div className="bg-gray-200 p-4 rounded-lg mt-4 px-2">

            <div className="divider my-8 ">
                <h1 className="text-lg font-bold">Ticket Details 🟥</h1>
            </div>
            <div className=" flex gap-10">
                <div className="w-full" >
                    <label > <span className="text-red-500 font-bold">*</span> Ticket No :</label> <br />
                    <input
                        className="mt-2 p-1 rounded-md"
                        type="number" />
                </div>
                <div className="w-full">
                    <label > <span className="text-red-500 font-bold">*</span> Gross Fare (Sale):</label> <br />
                    <input
                        className="mt-2 p-1 rounded-md"
                        type="number" />
                </div>
                <div className="w-full">
                    <label > <span className="text-red-500 font-bold">*</span> Base Fare (Buy):</label> <br />
                    <input
                        className="mt-2 p-1 rounded-md"
                        type="number" />
                </div>
                <div className="w-full">
                    <label > <span className="text-red-500 font-bold">*</span> Vendor:</label> <br />
                    <select

                        name="Client name" id="" className="mt-2 p-1  rounded-md">
                        <option value="" disabled>Select Vendor  </option>
                        <option value="">Clinet </option>
                        <option value="">Clinet </option>
                        <option value="">Clinet </option>
                    </select>
                </div>
            </div>
            <div className=" flex gap-10 mt-5">
                <div className="w-full" >
                    <label > <span className="text-red-500 font-bold">*</span> Airline :</label> <br />
                    <select

                        name="Client name" id="" className="mt-2 p-1  rounded-md">
                        <option value="" disabled>Select Airline  </option>
                        <option value="">Clinet </option>
                        <option value="">Clinet </option>
                        <option value="">Clinet </option>
                    </select>
                </div>
                <div className="w-full">
                    <label > <span className="text-red-500 font-bold">*</span> Commission %:</label> <br />
                    <input
                        className="mt-2 p-1 rounded-md"
                        type="number" />
                </div>
                <div className="w-full">
                    <label > <span className="text-red-500 font-bold">*</span> Commission  Ammount:</label> <br />
                    <input
                        className="mt-2 p-1 rounded-md"
                        type="number" />
                </div>
                <div className="w-full">
                    <label > <span className="text-red-500 font-bold">*</span> Net Commission:</label> <br />
                    <input
                        className="mt-2 p-1 rounded-md"
                        type="number" />

                </div>
            </div>
            <div className=" flex gap-10 mt-5">

                <div className="">
                    <label > <span className="text-red-500 font-bold">*</span> AIT:</label> <br />
                    <input
                        className="mt-2 p-1 rounded-md"
                        type="number" />
                </div>
                <div className="">
                    <label > <span className="text-red-500 font-bold">*</span> Discount:</label> <br />
                    <input
                        className="mt-2 p-1 rounded-md"
                        type="number" />
                </div>
                <div className="">
                    <label > <span className="text-red-500 font-bold">*</span> Other Bounous:</label> <br />
                    <input
                        className="mt-2 p-1 rounded-md"
                        type="number" />

                </div>
            </div>


            <div className="mt-5 flex gap-2">
                {/* left */}
                <div className="space-y-5">
                    <div className=" flex gap-10">
                        <div className="" >
                            <label >  Extra Fee :</label> <br />
                            <input
                                className="mt-2 p-1 rounded-md"
                                type="number" />
                        </div>
                        <div className="">
                            <label > Other Expense:</label> <br />
                            <input
                                className="mt-2 p-1 rounded-md"
                                type="number" />
                        </div>
                        <div className="">
                            <label >   Vat:</label> <br />
                            <input
                                className="mt-2 p-1 rounded-md"
                                type="number" />
                        </div>
                        <div className="">
                            <label >  Tax:</label> <br />
                            <select

                                name="Client name" id="" className="mt-2 p-1  rounded-md">
                                <option value="" disabled>Select Vendor  </option>
                                <option value="">Clinet </option>
                                <option value="">Clinet </option>
                                <option value="">Clinet </option>
                            </select>
                        </div>
                    </div>
                    <div className=" flex gap-10">
                        <div className="" >
                            <label >  Router/Sector :</label> <br />
                            <input
                                className="mt-2 p-1 rounded-md"
                                type="number" />
                        </div>
                        <div className="">
                            <label > PNR:</label> <br />
                            <input
                                className="mt-2 p-1 rounded-md"
                                type="number" />
                        </div>
                        <div className="">
                            <label >   GDS:</label> <br />
                            <input
                                className="mt-2 p-1 rounded-md"
                                type="number" />
                        </div>
                        <div className="">
                            <label >  Segment:</label> <br />
                            <input
                                className="mt-2 p-1 rounded-md"
                                type="number" />
                        </div>
                    </div>
                    <div className=" flex gap-10">
                        <div className="" >
                            <label >  Issu Date :</label> <br />
                            <input
                                className="mt-2 p-1 rounded-md"
                                type="date" />
                        </div>
                        <div className="">
                            <label > Journey Date:</label> <br />
                            <input
                                className="mt-2 p-1 rounded-md"
                                type="date" />
                        </div>
                        <div className="">
                            <label >   Return Date:</label> <br />
                            <input
                                className="mt-2 p-1 rounded-md"
                                type="date" />
                        </div>
                        <div className="">
                            <label >  Select air ticket Class:</label> <br />
                            <select

                                name="Client name" id="" className="mt-2 p-1  rounded-md">
                                <option value="" disabled>Select Vendor  </option>
                                <option value="">Clinet </option>
                                <option value="">Clinet </option>
                                <option value="">Clinet </option>
                            </select>
                        </div>
                    </div>
                    <div className=" flex gap-10">
                        <div className="" >
                            <label >  Select Ticket Type :</label> <br />
                            <select
                                name="Client name" id="" className="mt-2 p-1  rounded-md">
                                <option value="" disabled>Select Vendor  </option>
                                <option value="">Clinet </option>
                                <option value="">Clinet </option>
                                <option value="">Clinet </option>
                            </select>
                        </div>

                    </div>
                </div>
                {/* right */}
                <div className="">
                    <div className="border border-black p-4 space-y-4 rounded-lg h-full">
                        <div className="">
                            <label > Client Price:</label> <br />
                            <input
                                className="mt-2 p-1 rounded-md"
                                type="number" />
                        </div>
                        <div className="">
                            <label > Purchase Price:</label> <br />
                            <input
                                className="mt-2 p-1 rounded-md"
                                type="number" />
                        </div>
                        <div className="">
                            <label > Profit:</label> <br />
                            <input
                                className="mt-2 p-1 rounded-md"
                                type="number" />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default TicketDetails;