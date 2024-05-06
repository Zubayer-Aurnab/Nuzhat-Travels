// import Divider from "../../../../shared/Divider/Divider";

import { DatePicker, Divider, Input, InputNumber, Select } from "antd";




const TicketDetails = () => {
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

            <div className="flex flex-wrap lg:flex-row gap-3 lg:gap-8">
                <div className="" >
                    <label > <span className="text-red-500 font-bold">*</span> Ticket No :</label> <br />
                    <InputNumber className="mt-2 w-auto" />
                </div>
                <div className="">
                    <label > <span className="text-red-500 font-bold">*</span> Gross Fare (Sale):</label> <br />
                    <InputNumber className="mt-2 w-auto" />
                </div>
                <div className="">
                    <label > <span className="text-red-500 font-bold">*</span> Base Fare (Buy):</label> <br />
                    <InputNumber className="mt-2 w-auto" />
                </div>
                <div className="">
                    <label > <span className="text-red-500 font-bold">*</span> Vendor:</label> <br />
                    <Select placeholder="Select Vendor" className="w-48 mt-2" />
                </div>
                <div className="" >
                    <label > <span className="text-red-500 font-bold">*</span> Airline :</label> <br />
                    <Select placeholder="Select Airline" className="w-44 mt-2" />
                </div>
                <div className="">
                    <label > <span className="text-red-500 font-bold">*</span> Commission %:</label> <br />
                    <InputNumber className="mt-2 w-auto" />
                </div>
                <div className="">
                    <label > <span className="text-red-500 font-bold">*</span> Commission  Ammount:</label> <br />
                    <InputNumber className="mt-2 w-auto" />
                </div>
                <div className="">
                    <label > <span className="text-red-500 font-bold">*</span> Net Commission:</label> <br />
                    <InputNumber className="mt-2 w-auto" />

                </div>
                <div className="">
                    <label > <span className="text-red-500 font-bold">*</span> AIT:</label> <br />
                    <Input className="mt-2 w-50" />
                </div>
                <div className="">
                    <label > <span className="text-red-500 font-bold">*</span> Discount:</label> <br />
                    <InputNumber className="mt-2 w-auto" />
                </div>
                <div className="">
                    <label > <span className="text-red-500 font-bold">*</span> Other Bounous:</label> <br />
                    <InputNumber className="mt-2 w-auto" />

                </div>
                <div className="" >
                    <label >  Extra Fee :</label> <br />
                    <InputNumber className="mt-2 w-auto" />
                </div>
                <div className="">
                    <label > Other Expense:</label> <br />
                    <InputNumber className="mt-2 w-auto" />
                </div>
                <div className="">
                    <label >   Vat:</label> <br />
                    <InputNumber className="mt-2 w-auto" />
                </div>
                <div className="">
                    <label >  Tax:</label> <br />
                    <InputNumber className="mt-2 w-auto" />
                </div>
            </div>




            <div className="mt-5 flex flex-col lg:flex-row ">
                {/* left */}
                <div className="space-y-5">

                    <div className=" flex flex-wrap lg:flex-row  gap-3 lg:gap-8">
                        <div className="" >
                            <label >  Router/Sector :</label> <br />
                            <Select placeholder="Select Airline" className="w-40 mt-2" />
                        </div>
                        <div className="">
                            <label > PNR:</label> <br />
                            <Input className="mt-2" />
                        </div>
                        <div className="">
                            <label >   GDS:</label> <br />
                            <Select placeholder="Select GDS" className="w-40 mt-2" />
                        </div>
                        <div className="">
                            <label >  Segment:</label> <br />
                            <InputNumber placeholder="Enter Segmemt number" className="mt-2 w-auto" />
                        </div>
                        <div className="" >
                            <label >  Issu Date :</label> <br />
                            <DatePicker className="mt-2 w-40" placeholder="Issu Date" />
                        </div>
                        <div className="">
                            <label > Journey Date:</label> <br />
                            <DatePicker className="mt-2 w-40" placeholder="Journey Date" />
                        </div>
                        <div className="">
                            <label >   Return Date:</label> <br />
                            <DatePicker className="mt-2 w-40" placeholder="Return Date" />
                        </div>
                        <div className="">
                            <label >  Select air ticket Class:</label> <br />
                            <Select placeholder="Select air ticket Class " className="w-40 mt-2" />
                        </div>
                        <div className="" >
                            <label >  Select Ticket Type :</label> <br />
                            <Select placeholder=" Select Ticket Type " className="w-40 mt-2" />
                        </div>
                    </div>
                </div>
                {/* right */}
                <div className="w-full">
                    <div className="border border-black p-4 space-y-4 rounded-lg h-full">
                        <div className="">
                            <label > Client Price:</label> <br />
                            <Input className="mt-2 l" />
                        </div>
                        <div className="">
                            <label > Purchase Price:</label> <br />
                            <Input className="mt-2" />
                        </div>
                        <div className="">
                            <label > Profit:</label> <br />
                            <Input className="mt-2 " />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default TicketDetails;