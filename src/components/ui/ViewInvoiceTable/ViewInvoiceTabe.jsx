import { Button, DatePicker } from "antd";
import Search from "antd/es/transfer/search";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FiRefreshCw } from "react-icons/fi";
import TableC from "./Table";
const { RangePicker } = DatePicker;

const ViewInvoiceTabe = () => {
    return (
        <div className="mt-10 px-4">
            <div className="flex justify-between">
                <div className=" w-1/3 flex justify-start gap-5">
                    <Button type="primary" className="flex items-center justify-center gap-2 w-1/3"><FaArrowLeftLong /> Create</Button>
                    <Button type="default" ><FiRefreshCw className="mt-1" /> </Button>
                </div>
                <div className="w-1/3 flex gap-5 ">
                    <RangePicker />
                    <Search
                        placeholder="input search text"
                        allowClear
                        style={{
                            width: 300,
                        }}
                    />
                </div>
            </div>
            <TableC />
        </div>
    );
};

export default ViewInvoiceTabe;