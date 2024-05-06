import { Table } from 'antd';
import './Table.css'

const TableC = () => {
    const columns = [
        {
            title: 'SL',
            dataIndex: 'name',
        },
        {
            title: 'Invoice',
        },
        {
            title: 'Sales Date',
        },
        {
            title: 'Client Name',
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
            title: 'Rec Amount',
        },
        {
            title: 'Due Amount',

        },
        {
            title: 'MR. No.',
        },
        {
            title: 'Sales by',
        },
        {
            title: 'Action',
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
    );
};

export default TableC;