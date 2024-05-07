import { Divider, Table } from "antd";


const Details = () => {
    const PaymentColumns = [
        {
            title: 'SL',
            dataIndex: "key"
        },
        {
            title: 'Ticket No ',
            dataIndex: "ticket_no"
        },
        {
            title: 'PAX Name',
            dataIndex: "pax_name"
        },
        {
            title: 'PNR',
            dataIndex: "pnr"
        },
        {
            title: 'Vendor',
            dataIndex: "vendor"
        },
        {
            title: 'Airline',
            dataIndex: "airline"
        },
        {
            title: 'Issu date',
            dataIndex: "issu_date"
        },
        {
            title: 'Extra Fee',
            dataIndex: "extra_fee"
        },
        {
            title: 'Sold Price',
            dataIndex: "sold_price"
        },
        {
            title: 'Purchase Price',
            dataIndex: "purchase_price"
        },
        {
            title: 'Profit ',
            dataIndex: "profit"
        },

    ];
    const PaymentData = [
        {
            key: 1,
            ticket_no: 23498729384,
            pax_name: 23498729384,
            pnr: 23498729384,
            vendor: 23498729384,
            airline: 23498729384,
            issu_date: 23498729384,
            extra_fee: 23498729384,
            sold_price: 23498729384,
            purchase_price: 23498729384,
            profit: 23498729384,


        },

    ];
    return (
        <div className="lg:p-20 bg-gray-200">
            <div
            >
                <div className="bg-white rounded-lg p-4 lg:w-4/6 lg:mx-auto h-screen">
                    <div className="flex justify-between p-10 ">
                        <div> <h1>INVOICE TO</h1> <p>Name:xxxxxxxxx</p><p>Mobile:</p></div>
                        <div>
                            <p>Invoice Date : 15 Oct 2023</p>
                            <p>Invoice No: ANC-00000045</p>
                            <p>Sales By : BOSS</p>
                            <p>Sales Date : 15 Oct 2023</p>
                        </div>
                    </div>
                    <Divider orientation="left">COST INFORMATION</Divider>
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

export default Details;