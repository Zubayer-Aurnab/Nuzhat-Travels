import { DatePicker, Divider, InputNumber, Select } from "antd";


const FlightDetailsRI = () => {
    return (
        <div>
            <div className="bg-gray-200 p-4 pb-8 rounded-lg my-4 px-2">
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
                        <Select
                            className="mt-2 w-40  "
                        />
                    </div>
                    <div className="">
                        <label > TO:</label> <br />
                        <Select
                            className="mt-2 w-40  "
                        />
                    </div>
                    < div className="">
                        <label >  Airline:</label> <br />

                        <Select
                            className="mt-2 w-40  "
                        />
                    </div>
                    <div className="">
                        <label >  Flight No:</label> <br />
                        <InputNumber
                            className="mt-2 w-40"
                            type="number" />
                    </div>
                    <div className="">
                        <label > Journey Date:</label> <br />
                        <DatePicker
                            className="mt-2 w-40"
                            type="date" />
                    </div>
                    <div className="">
                        <label >  Return Date:</label> <br />
                        <DatePicker
                            className="mt-2 w-40"
                            type="date" />
                    </div>
                    <div className="">
                        <label >  Arrival Time:</label> <br />
                        <DatePicker
                            className="mt-2 w-40"
                            type="date" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FlightDetailsRI;