import { Button, Divider, Table, Watermark } from "antd";
import QR_code from "../../../assets/QR_code.png";
import logo from "../../../assets/logo2.png";

const MainInvoice = () => {
    // FLIGHT----------------------------
    const FlightColumns = [
        {
            title: 'SL',
            dataIndex: "key"
        },
        {
            title: 'From',
            dataIndex: "from"
        },
        {
            title: 'TO',
            dataIndex: "to"
        },
        {
            title: 'Airline',
            dataIndex: "airline"
        },
        {
            title: 'Departure Time',
            dataIndex: "departure"

        },
        {
            title: 'Arrival Time',
            dataIndex: "arrival"
        },
    ];
    const FlightData = [
        {
            key: 1,
            from: 'Dhaka - Hazrat Shahjalal International Airport',
            to: 'Sharjah',
            airline: 'BS-US-BANGLA AIRLINES LTD-779',
            departure: '21:35:00',
            arrival: "00:30:00"

        },

    ];
    // PAX --------------------------------
    const PaxColumns = [
        {
            title: 'SL',
            dataIndex: "key"
        },
        {
            title: 'Ticlet No',
            dataIndex: "ticket_no"
        },
        {
            title: 'Pax Type',
            dataIndex: "pax_type"
        },
        {
            title: 'Passport No',
            dataIndex: "passport_no"
        },
        {
            title: 'Issu date',
            dataIndex: "issu_date"

        },
        {
            title: 'Expire Date',
            dataIndex: "expire_date"
        },
    ];
    const PaxData = [
        {
            key: 1,
            ticket_no: '7792103040503',
            pax_type: 'Adult',
            passport_no: 'EG0234173',
            issu_date: '11-07-2020',
            expire_date: "10-07-2025"

        },

    ];
    //Billig Info--------------------------
    const BillingColumns = [
        {
            title: 'SL',
            dataIndex: "key"
        },
        {
            title: 'Ticlet No',
            dataIndex: "ticket_no"
        },
        {
            title: 'PNR',
            dataIndex: "pnr"
        },
        {
            title: 'Class',
            dataIndex: "class"
        },
        {
            title: 'Class  Type',
            dataIndex: "class_type"
        },
        {
            title: 'Route',
            dataIndex: "route"
        },
        {
            title: 'journy date',
            dataIndex: "journy_date"

        },
        {
            title: 'Return Date',
            dataIndex: "return_date"
        },
        {
            title: 'Unit Price',
            dataIndex: "unit_price"
        },
        {
            title: 'Total',
            dataIndex: "total"
        },
    ];
    const BillingData = [
        {
            key: 1,
            ticket_no: '7792103040503',
            pnr: '05VNGA',
            class: 'Economy',
            issu_date: '11-07-2020',
            expire_date: "10-07-2025",
            route: 'DAC - SHJ',
            journy_date: "15 Oct 2023",
            return_date: "30 Nov 2023",
            unit_price: "47000",
            total: "343434s"

        },

    ];
    // Payment INFO -----------------------------
    const PaymentColumns = [

        {
            title: 'Sub Total',
            dataIndex: "sub_total"
        },
        {
            title: 'Discount',
            dataIndex: "discount"
        },
        {
            title: 'Net Total',
            dataIndex: "net_total"
        },
        {
            title: 'Payment',
            dataIndex: "payment"
        },
        {
            title: 'Client Prev Balance',
            dataIndex: "client_prev_balance"
        },

    ];
    const PaymentData = [
        {
            sub_total: "47000",
            discount: "",
            net_total: "47000",
            payment: "Paid",
            client_prev_balance: "-2344",

        },

    ];


    return (
        <div className="lg:p-20 bg-gray-200">
            <Watermark
            >
                <div className="bg-white rounded-lg p-4 lg:w-4/6 lg:mx-auto">
                    {/* Header Section */}
                    <div className="flex  lg:justify-evenly flex-col lg:flex-row  items-center">
                        <img className="w-1/2 lg:w-1/3" src={logo} alt="" />
                        <div className="flex flex-col lg:flex-row mt-10 lg:mt-0 lg:w-1/2 gap-3 justify-center items-center lg:justify-between">
                            <img className="w-1/2 lg:w-1/3" src={QR_code} alt="" />
                            <div className="space-y-1">
                                <h1 className="text-2xl font-bold">Nuzhat Travel Express</h1>
                                <p>House # 104/A, Ma Manzil, Ground Floor, Patowary Goli, <br /> East Bashabo, Sabujbagh, Dhaka-1214
                                </p>
                                <p> <span className="font-bold">Mobile :</span> 01601477401 +8809611677947</p>
                                <p> <span className="font-bold">Email :</span> nuzhattravelexpress@gmail.com-nuzhattravelexpress.com </p>

                            </div>
                        </div>
                    </div>
                    {/* Divider */}
                    <Divider />
                    {/* invoice Section */}
                    <div >
                        {/* invoice buttion */}
                        <div className="flex justify-center">
                            <Button className="" size="large">
                                Invoice
                            </Button>
                        </div>
                        <div className="flex flex-col lg:flex-row gap-5 lg:gap-0 justify-between lg:px-10 ">
                            <div>
                                <h1 className="mb-3 font-bold">Invoice To:</h1>
                                <p><span className="font-bold">Name :</span>SYED MAHBUBUL ALOM</p>
                                <p><span className="font-bold">Mobile  :</span>01712551738</p>
                            </div>
                            <div className="space-y-2">
                                <p><span className="font-bold">Invoice Date : </span> 15 Oct 2023</p>
                                <p><span className="font-bold">Invoice No : </span> ANC-00000045</p>
                                <p><span className="font-bold">Sales Date  : </span>15 Oct 2023</p>
                                <p><span className="font-bold">Sales By  : </span>BOSS</p>
                            </div>
                        </div>
                        {/* FLIGHT/ROUTE DETAILS */}
                        <div className="mt-10 lg:mt-20">
                            <Divider orientation="left" style={{ fontSize: "20px", fontWeight: 700 }}>FLIGHT/ROUTE DETAILS</Divider>
                            <Table
                                className='ant-table'
                                scroll={{ x: true }}
                                columns={FlightColumns}
                                dataSource={FlightData}
                                bordered={true}
                                pagination={false}
                            />
                        </div>
                        {/* PAX DETAILS */}
                        <div className="mt-10">
                            <Divider orientation="left" style={{ fontSize: "20px", fontWeight: 700 }}>PAX DETAILS </Divider>
                            <Table
                                className='ant-table'
                                scroll={{ x: true }}
                                columns={PaxColumns}
                                dataSource={PaxData}
                                bordered={true}
                                pagination={false}
                            />
                        </div>
                        {/*BILLING INFO */}
                        <div className="mt-10">
                            <Divider orientation="left" style={{ fontSize: "20px", fontWeight: 700 }}>BILLING INFO</Divider>
                            <Table
                                className='ant-table'
                                scroll={{ x: true }}
                                columns={BillingColumns}
                                dataSource={BillingData}
                                bordered={true}
                                pagination={false}
                            />
                        </div>
                        {/* SUB total */}
                        <div className="mt-12 lg:mt-20 lg:px-10">
                            <div className="flex flex-col lg:flex-row justify-between">
                                <div>
                                    <h1><span className="font-bold">Note : </span>Return ticket adjust </h1>
                                </div>
                                <div className="">
                                    <Table
                                        className='ant-table'
                                        scroll={{ x: true }}
                                        columns={PaymentColumns}
                                        dataSource={PaymentData}
                                        bordered={true}
                                        pagination={false}
                                    />
                                    <p className="text-sm font- px-1 mt-2 text-center">In Word : Forty Seven Thousand BDT</p>
                                </div>

                            </div>
                        </div>
                        {/* Signature Section */}
                        <div className="flex flex-wrap lg:flex-row gap-10 lg:gap-0 justify-between items-center mt-10 lg:mt-60 p-4 lg:p-10">
                            <div>
                                <p>-----------------------</p>
                                <p>Customer signature</p>
                            </div>
                            <div>May 7 2024 </div>
                            <div>
                                <p>-----------------------</p>
                                <p>Authority  signature</p>
                            </div>
                        </div>
                    </div>
                </div>

            </Watermark>

        </div>
    );
};

export default MainInvoice;