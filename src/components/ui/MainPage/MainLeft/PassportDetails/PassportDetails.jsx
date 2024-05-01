import { FaPlus } from "react-icons/fa";

const PassportDetails = () => {
    return (
        <div>
            <div className="bg-gray-200 p-4 pb-8 rounded-lg mt-4 px-2">
                <div className="divider my-8 ">
                    <h1 className="text-lg font-bold">PAX & Passport Details 👮 </h1>
                </div>
                <div className=" flex  gap-1 mt-4">
                    <div className="" >
                        <label >  Passport NO :</label> <br />
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
                </div>
                <div className=" flex gap-10 mt-5">

                    <div className="">
                        <label > <span className="text-red-500 font-bold">*</span> Base Fare (Buy):</label> <br />
                        <input
                            className="mt-2 p-1 rounded-md"
                            type="date" />
                    </div>
                    <div className="">
                        <label > <span className="text-red-500 font-bold">*</span> Base Fare (Buy):</label> <br />
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

export default PassportDetails;