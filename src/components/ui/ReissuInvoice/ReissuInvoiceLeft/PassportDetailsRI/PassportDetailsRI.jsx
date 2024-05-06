import { Divider } from "antd";


const PassportDetailsRI = () => {
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
                    <label >  Name  :</label> <br />
                    <input
                        className="mt-2  rounded-md"
                        type="number" />
                </div>
                <div className="">
                    <label > Name:</label> <br />
                    <input
                        className="mt-2  rounded-md"
                        type="number" />
                </div>
                <div className="">
                    <label >  Pax Type:</label> <br />
                    <input
                        className="mt-2  rounded-md"
                        type="number" />
                </div>
                <div className="">
                    <label >  Contact No:</label> <br />
                    <input
                        className="mt-2  rounded-md"
                        type="number" />
                </div>
                <div className="">
                    <label >  Email:</label> <br />
                    <input
                        className="mt-2  rounded-md"
                        type="number" />
                </div>
                <div className="">
                    <label >  Date of Brith:</label> <br />
                    <input
                        className="mt-2  rounded-md"
                        type="number" />
                </div>
                <div className="">
                    <label > <span className="text-red-500 font-bold">*</span> Date of expire:</label> <br />
                    <input
                        className="mt-2 px-2 rounded-md"
                        type="date" />
                </div>
                <div className="">
                    <label > <span className="text-red-500 font-bold">*</span> Date of expire:</label> <br />
                    <input
                        className="mt-2 px-2 rounded-md"
                        type="date" />
                </div>
            </div>
        </div>
    </div>
    );
};

export default PassportDetailsRI;