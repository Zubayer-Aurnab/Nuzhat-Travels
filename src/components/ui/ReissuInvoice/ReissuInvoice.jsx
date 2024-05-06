import { Radio } from "antd";
import ReissuInvoiceLeft from "./ReissuInvoiceLeft/ReissuInvoiceLeft";
import ReissuInvoiceRight from "./ReissuInvoiceRight/ReissuInvoiceRight";
import { useState } from "react";
import ExistingClient from "./ExistingClient/ExistingClient";


const ReissuInvoice = () => {
    const [display, setDisplay] = useState()

    const handleModeChange = (e) => {
        setDisplay(e.target.value);
    };
    // console.log(display)

    return (
        <div>
            <div className="flex justify-center mt-10">
                <Radio.Group
                    onChange={handleModeChange}

                    style={{
                        marginBottom: 8,
                    }}
                >
                    <Radio.Button value="new-client">New Client</Radio.Button>
                    <Radio.Button value="existing-client">Existing Client</Radio.Button>
                </Radio.Group>
            </div>

            {
                display === "new-client" ?
                    <div className="flex flex-col lg:flex-row gap-4 mt-6 lg:mt-20 px-2">
                        <ReissuInvoiceLeft />
                        <ReissuInvoiceRight />
                    </div>
                    :
                    <ExistingClient />
            }


        </div>
    );
};

export default ReissuInvoice;