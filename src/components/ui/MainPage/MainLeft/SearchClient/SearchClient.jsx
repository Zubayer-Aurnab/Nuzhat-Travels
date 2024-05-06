import { DatePicker, InputNumber, Select } from "antd";


const SearchClient = () => {
    return (
        <div className="flex justify-between flex-wrap gap-5 lg:flex-row bg-gray-200 p-4 lg:pb-8 rounded-lg">
            <div >
                <label > <span className="text-red-500 font-bold">*</span> Search Client :</label> <br />
                <Select placeholder="Select client" className="w-40 mt-2" />
            </div>
            <div >
                <label className=""> <span className="text-red-500 font-bold">*</span> Sales By:</label> <br />
                <Select placeholder="Sales By" className="w-40 mt-2" />
            </div>
            <div >
                <label > <span className="text-red-500 font-bold">*</span> Invoice No:</label> <br />
                <InputNumber className="w-40 mt-2" />
            </div>
            <div >
                <label > <span className="text-red-500 font-bold">*</span> Sales Date:</label> <br />
                <DatePicker className="mt-2 w-40" />
            </div>
            <div >
                <label > <span className="text-red-500 font-bold">*</span> DUE Date:</label> <br />
                <DatePicker className="mt-2 w-40" />
            </div>
            <div >
                <label > <span className="text-red-500 font-bold">*</span> Select Agent :</label> <br />
                <Select placeholder="Select Agent" className="w-40 mt-2" />
            </div>

        </div>
    );
};

export default SearchClient;