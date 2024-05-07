
import { Tabs } from 'antd';
import { useState } from 'react';
import MainInvoice from '../../components/ui/ViewIncoiveNC/MainInvoice';
import Details from '../../components/ui/ViewIncoiveNC/Details';

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
                tabs === "payments" && <div>
                    <h1 className="text-3xl">this is payments</h1>
                </div>
            }
            {
                tabs === "activity-log" && <div>
                    <h1 className="text-3xl">this is activity-log</h1>
                </div>
            }



        </div>
    );
};

export default ViewInvoivceNonCommission;