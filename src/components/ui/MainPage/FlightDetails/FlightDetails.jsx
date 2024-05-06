import { DatePicker, Divider, Select } from "antd";


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

                <div className=" flex flex-wrap lg:flex-row gap-3 lg:gap-3">
                    <div className="" >
                        <label > From :</label> <br />
                        <Select placeholder="" className="w-40 mt-2" />
                    </div>
                    <div className="">
                        <label >  Gross Fare (Sale):</label> <br />
                        <Select placeholder="" className="w-40 mt-2" />
                    </div>
                    <div className="">
                        <label >  Base Fare (Buy):</label> <br />

                        <Select placeholder="" className="w-40 mt-2" />
                    </div>
                    <div className="">
                        <label >  Vendor:</label> <br />
                        <Select placeholder="Select Vendor" className="w-40 mt-2" />
                    </div>
                    <div className="">
                        <label > Flight Date:</label> <br />
                        <input
                            className="mt-2 lg:p-1 rounded-md"
                            type="date" />
                    </div>
                    <div className="">
                        <label >  Departure Date:</label> <br />
                        <DatePicker className="mt-2 w-40" />
                    </div>
                    <div className="">
                        <label >  Travel Time:</label> <br />
                        <DatePicker className="mt-2 w-40" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FlightDetails;