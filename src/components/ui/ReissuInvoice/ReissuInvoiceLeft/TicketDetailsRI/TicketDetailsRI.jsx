import { DatePicker, Divider, Input, InputNumber, Select } from "antd";


const TicketDetailsRI = () => {
    return (
        <div className="bg-gray-200 p-4 rounded-lg px-2">

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
                            <Input
                                className="mt-2 lg:p-1 rounded-md"
                            />
                        </div>
                        <div className="">
                            <label > <span className="text-red-500 font-bold">*</span> Client Price:</label> <br />
                            <InputNumber
                                className="mt-2  w-40"
                            />
                        </div>
                        <div className="">
                            <label > <span className="text-red-500 font-bold">*</span> Purchase Price/Partial Cost:</label> <br />
                            <InputNumber
                                className="mt-2 w-48"
                            />
                        </div>
                        <div className="">
                            <label > <span className="text-red-500 font-bold">*</span> Vendor:</label> <br />
                            <Select placeholder="select vendor" className="w-40 mt-2" />
                        </div>
                        <div className="" >
                            <label > <span className="text-red-500 font-bold">*</span> Airline :</label> <br />
                            <Select placeholder="select " className="w-40 mt-2" />
                        </div>
                        <div className="">
                            <label > <span className="text-red-500 font-bold">*</span> Extra Fee :</label> <br />
                            <InputNumber
                                className="mt-2 w-48"
                            />
                        </div>
                        <div className="">
                            <label > <span className="text-red-500 font-bold">*</span> PRN:</label> <br />
                            <Input
                                className="mt-2 "
                            />
                        </div>
                        <div className="">
                            <label > <span className="text-red-500 font-bold">*</span> Router/Sector</label> <br />
                            <Select
                                className="mt-2 w-40"
                            />
                        </div>
                        <div className="">
                            <label > <span className="text-red-500 font-bold">*</span> AIT:</label> <br />
                            <Input
                                className="mt-2 "
                            />
                        </div>
                        <div className="" >
                            <label > Issue Date  :</label> <br />
                            <DatePicker
                                className="mt-2 w-40"
                            />
                        </div>
                        <div className="">
                            <label > Journy Date:</label> <br />
                            <DatePicker
                                className="mt-2 w-40"
                            />
                        </div>
                        <div className="">
                            <label > Return Date:</label> <br />
                            <DatePicker
                                className="mt-2 w-40"
                            />
                        </div>
                        <div className="">
                            <label >Select Airline Class:</label> <br />
                            <Select
                                className=" w-48 mt-2 rounded-md"
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

export default TicketDetailsRI;