import { DatePicker, Divider, Input, Select } from "antd";

const PassportDetails = () => {
    return (
        <div>
            <div className="bg-gray-200 p-4 pb-8 rounded-lg mt-4 px-2">
                <Divider
                    orientation="left"
                    style={{
                        fontSize: "18px",
                        fontWeight: "700"
                    }}
                >
                    PAX & Passport Details 👮
                </Divider>
                <div className=" flex flex-wrap lg:flex-row  gap-2 lg:gap-10 mt-4">
                    <div className="" >
                        <label >  Passport NO :</label> <br />
                        <Select placeholder="Passport NO" className="w-40 mt-2" />
                    </div>
                    <div className="">
                        <label > Name:</label> <br />
                        <Input placeholder=" Name" className="mt-2 " />
                    </div>
                    <div className="">
                        <label >  Pax Type:</label> <br />
                        <Select placeholder="Pax Type" className="w-40 mt-2" />
                    </div>
                    <div className="">
                        <label >  Contact No:</label> <br />
                        <Input placeholder="Contact No" className="mt-2 " />
                    </div>
                    <div className="">
                        <label >  Email:</label> <br />
                        <Input placeholder=" Email" className="mt-2 " />
                    </div>
                    <div className="">
                        <label >  Date of Brith:</label> <br />
                        <DatePicker className="mt-2 w-40" />
                    </div>
                    <div className="">
                        <label > <span className="text-red-500 font-bold">*</span> Base Fare (Buy):</label> <br />
                        <DatePicker className="mt-2 w-40" />
                    </div>
                    <div className="">
                        <label > <span className="text-red-500 font-bold">*</span> Base Fare (Buy):</label> <br />
                        <DatePicker className="mt-2 w-40" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PassportDetails;