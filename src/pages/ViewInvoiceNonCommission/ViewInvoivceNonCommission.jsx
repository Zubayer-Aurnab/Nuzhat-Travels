
import { Button, Tabs } from 'antd';
import { useState } from 'react';
import MainInvoice from '../../components/ui/ViewIncoiveNC/MainInvoice';
import Details from '../../components/ui/ViewIncoiveNC/Details';
import { Link } from 'react-router-dom';
import { FaArrowLeftLong } from 'react-icons/fa6';
import { IoPrintSharp } from 'react-icons/io5';
import Payment from '../../components/ui/ViewIncoiveNC/Payment';
import './ViewInvoice.css'
import ActiveLog from '../../components/ui/ViewIncoiveNC/ActiveLog';

const ViewInvoivceNonCommission = () => {


    const [tabs, setTabs] = useState("invoice")

    const items = [
        {
            label: 'Invoice ',
            key: "invoice",
        },
        {
            label: ' Details ',
            key: "details",
        },
        {
            label: ' Payments ',
            key: "payments",
        },
        {
            label: ' Activity Log ',
            key: "activity-log",
        },
    ]

    const onChange = (key) => {

        setTabs(key)
    }
    // console.log(tabs);
    return (
        <div className='px-4'>
            <div className='gap-6 mt-10 flex'>
                <Link><Button type='primary' className='flex items-center gap-3' ><FaArrowLeftLong /> Return to invoice List</Button></Link>
                <Button type='primary' className='flex items-center gap-1' > <IoPrintSharp />Print</Button>
            </div>
            <div className='mt-10 '>
                <Tabs
                    onChange={onChange}
                    type="card"
                    items={items}

                />
            </div>


            {
                tabs === "invoice" && <MainInvoice />
            }

            {
                tabs === "details" && <Details />
            }
            {
                tabs === "payments" && <Payment />
            }
            {
                tabs === "activity-log" && <ActiveLog />
            }



        </div>
    );
};

export default ViewInvoivceNonCommission;