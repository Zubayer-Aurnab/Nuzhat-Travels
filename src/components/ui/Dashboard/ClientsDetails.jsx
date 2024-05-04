
import { Collapse, Divider } from "antd";

const ClientsDetails = () => {
    const items = [
        {
            key: '1',
            label: 'See More',
            children: <div>
                <div className="flex justify-between font-bold mt-2">
                    <p>Sales Amoun</p>
                    <p>0</p>
                </div>
                <Divider />
                <div className="flex justify-between font-bold mt-2">
                    <p>Received Amount </p>
                    <p>0</p>
                </div>
                <Divider />
                <div className="flex justify-between font-bold mt-2">
                    <p>Office Expense  </p>
                    <p>0</p>
                </div>
                <Divider />

            </div>,
        },

    ]
    return (
        <div>
            <div className="shadow-xl rounded-xl  ">
                {/*  eslint-disable-next-line react/no-unescaped-entities */}
                <h1 className="p-2 bg-gradient-to-r from-[#1F75FE] to-blue-300 text-white font-bold rounded-t-md">CLIENT'S & VENDOR'S DETAILS </h1>
                <div className="p-4  ">
                    <div className="flex justify-between font-bold mt-2">
                        <p>Sales Amoun</p>
                        <p>0</p>
                    </div>
                    <Divider />
                    <div className="flex justify-between font-bold mt-2">
                        <p>Received Amount </p>
                        <p>0</p>
                    </div>
                    <Divider />
                    <div className="flex justify-between font-bold mt-2">
                        <p>Office Expense  </p>
                        <p>0</p>
                    </div>
                    <Divider />
                    <Collapse items={items} bordered={false} ghost padding={1} className="custom " />
                </div>
            </div>
        </div>
    );
};

export default ClientsDetails;