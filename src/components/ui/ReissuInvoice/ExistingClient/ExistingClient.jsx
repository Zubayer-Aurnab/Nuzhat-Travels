import { DatePicker, Divider, Input, Select, Table } from "antd";
import SearchClient from "../../MainPage/MainLeft/SearchClient/SearchClient";
import TextArea from "antd/es/input/TextArea";


const ExistingClient = () => {
    const columns = [
        {
            title: 'SL',
            dataIndex: 'name',
        },
        {
            title: 'Pax Name',
            dataIndex: "math"
        },
        {
            title: 'Ticket No',
        },
        {
            title: 'Vendor',
        },
        {
            title: 'Sales Price',
            dataIndex: 'english',
            sorter: {
                compare: (a, b) => a.english - b.english,
                multiple: 1,
            },
        },
        {
            title: 'Purchase Price',
        },
        {
            title: 'Profit',
        },
        {
            title: ' Issu Date',
        },
        {
            title: 'Journy Date',
        },
        {
            title: 'Airline',
        },
    ];
    const data = [
        {
            key: '1',
            name: 'John Brown',
            chinese: 98,
            math: 60,
            english: 70,
        },
        {
            key: '2',
            name: 'Jim Green',
            chinese: 98,
            math: 66,
            english: 89,
        },
        {
            key: '3',
            name: 'Joe Black',
            chinese: 98,
            math: 90,
            english: 70,
        },
        {
            key: '4',
            name: 'Jim Red',
            chinese: 88,
            math: 99,
            english: 89,
        },
    ];
    const onChange = (filters, sorter, extra) => {
        console.log('params', filters, sorter, extra);
    };
    return (
        <div className="px-4 mt-10">
            <SearchClient />
            <div className="p-4 bg-gray-200 mt-10 rounded-lg ">
                <h1 className=" text-center font-bold" >Search Ticket</h1>
                <div className="flex justify-center mt-5" >
                    <Select
                        placeholder="Search By Ticket No"
                        className="w-1/2 " />
                </div>

            </div>
            {/* Table */}
            <div>
                <div className='mt-10'>
                    <Table
                        className='ant-table'
                        scroll={{ x: true }}
                        columns={columns}
                        dataSource={data}
                        bordered={true}
                        onChange={onChange}
                        pagination={false}
                    />
                </div>
            </div>
            {/* New Tickit Billing Info */}
            <div className="my-10">
                <div className="bg-gray-200 p-4 pb-8 rounded-lg mt-4 px-2">
                    <Divider
                        orientation="left"
                        style={{
                            fontSize: "18px",
                            fontWeight: "700"
                        }}
                    >
                        New Ticket & Billing info
                    </Divider>
                    <div className=" flex flex-wrap lg:flex-row  gap-2 lg:gap-10 mt-4">
                        <div className="" >
                            <label >  Ticket No  :</label> <br />
                            <Input className="mt-2" />
                        </div>
                        <div className="">
                            <label > Vendor:</label> <br />
                            <Select placeholder='Select Vendor' className="mt-2 w-40 " />
                        </div>
                        <div className="">
                            <label >  Journy Date :</label> <br />
                            <DatePicker
                                className="mt-2 px-2 rounded-md"
                                type="date" />
                        </div>
                        <div className="">
                            <label >  Return Date :</label> <br />
                            <DatePicker
                                className="mt-2 px-2 rounded-md"
                                type="date" />
                        </div>
                        <div className="">
                            <label >  Client Change:</label> <br />
                            <Input className="mt-2" />
                        </div>
                        <div className="">
                            <label >  Vendor Change:</label> <br />
                            <Select className="mt-2 w-40 " />
                        </div>
                        <div className="">
                            <label > <span className="text-red-500 font-bold">*</span>Service Change:</label> <br />
                            <Input className="mt-2" />
                        </div>
                        <div className="">
                            <label > <span className="text-red-500 font-bold">*</span> Profit:</label> <br />
                            <DatePicker
                                className="mt-2 px-2 rounded-md"
                                type="date" />
                        </div>
                        <div className="w-full lg:w-auto">
                            <label > <span className="text-red-500 font-bold">*</span> Note:</label> <br />
                            <TextArea className="mt-1  lg:w-96" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExistingClient;