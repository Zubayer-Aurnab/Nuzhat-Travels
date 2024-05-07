import { Divider, Table } from "antd";


const Payment = () => {
    const PaymentColumns = [
        {
            title: 'SL',
            dataIndex: "key"
        },
        {
            title: 'Clinet Name   ',
            dataIndex: "client_name"
        },
        {
            title: 'Money Recipt ',
            dataIndex: "mony_recipt"
        },
        {
            title: 'Payment To',
            dataIndex: "payment_to "
        },
        {
            title: 'Method',
            dataIndex: "method"
        },
        {
            title: 'Note',
            dataIndex: "note"
        },
        {
            title: 'Ammount',
            dataIndex: "ammount"
        },
        {
            title: 'Received By',
            dataIndex: "recevied_by"
        },

        {
            title: 'Receipt Date',
            dataIndex: "receipt_date"
        },


    ];
    const PaymentData = [
        {
            key: 1,
            client_name: 23498729384,
            mony_recipt: 23498729384,
            payment_to: 23498729384,
            method: 23498729384,
            note: 23498729384,
            ammount: 23498729384,
            recevied_by: 23498729384,

            receipt_date: 23498729384,


        },

    ];
    return (
        <div className="lg:p-20 bg-gray-200">
            <div
            >
               <div className="bg-white rounded-lg lg:p-4 lg:w-4/6 lg:mx-auto h-screen">
                    <div className="flex justify-between flex-col lg:flex-row gap-4 lg:p-10 ">
                        <div> <h1>INVOICE TO</h1> <p>Name:xxxxxxxxx</p><p>Mobile:</p></div>
                        <div>
                            <p>Invoice Date : 15 Oct 2023</p>
                            <p>Invoice No: ANC-00000045</p>
                            <p>Sales By : BOSS</p>
                            <p>Sales Date : 15 Oct 2023</p>
                        </div>
                    </div>
                    <Divider orientation="left">PAYMENT DETAILS</Divider>
                    {/* TABLE */}
                    <div>
                        <Table
                            className='ant-table'
                            scroll={{ x: true }}
                            columns={PaymentColumns}
                            dataSource={PaymentData}
                            bordered={true}
                            pagination={false}
                        />
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Payment;