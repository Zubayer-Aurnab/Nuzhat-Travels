import { Collapse, Divider } from "antd";

const Yearly = () => {
    const items3 = [
        {
            key: '3',
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
            <div className="shadow-xl rounded-xl ">
                <h1 className="p-2 bg-gradient-to-r from-[#7469B6] to-[#E1AFD1] text-white font-bold rounded-t-md">YEARLY REPORT</h1>
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
                    <Collapse items={items3} bordered={false} ghost padding={1} className="custom" />
                </div>
            </div>
        </div>
    );
};

export default Yearly;