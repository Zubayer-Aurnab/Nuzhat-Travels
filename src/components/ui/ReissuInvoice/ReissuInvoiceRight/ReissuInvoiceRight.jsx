import { Button, Input } from "antd";
import Table from "../../MainPage/MainRight/Table/Table";
import TextArea from "antd/es/input/TextArea";
import Radio from "antd/es/radio/radio";


const ReissuInvoiceRight = () => {
    return (
        <div className="lg:w-[30%]">
            <Table />
            <div>
                <div className=" flex flex-wrap lg:flex-row  gap-1 mt-4 ">
                    <div className="" >
                        <label >  Discount :</label> <br />
                        <Input disabled className=" mt-2" />
                    </div>
                    <div className="">
                        <label > Service Charge:</label> <br />
                        <Input disabled className=" mt-2" />
                    </div>

                </div>
                <div className=" flex flex-wrap lg:flex-row  gap-1 mt-4 ">
                    <div className="" >
                        <label >  Vat/Tax :</label> <br />
                        <Input disabled className=" mt-2" />
                    </div>
                    <div className="">
                        <label > Net total:</label> <br />
                        <Input disabled className=" mt-2" />
                    </div>

                </div>
                <div className=" flex flex-wrap lg:flex-row  gap-1 mt-4 ">
                    <div className="" >
                        <label >  Agent Commiosion :</label> <br />
                        <Input disabled className=" mt-2" />
                    </div>
                    <div className="">
                        <label > Reference:</label> <br />
                        <Input disabled className=" mt-2" />
                    </div>

                </div>
                <div className=" flex flex-wrap lg:flex-row  gap-1 mt-4 ">
                    <div className="w-full">
                        <label > Note:</label> <br />
                        <TextArea disabled name="" id="" cols="10" rows="8" className="bg-gray-200 w-full"></TextArea>
                    </div>
                </div>
                <div className=" flex flex-col lg:flex-row  gap-1 mt-4 ">
                    <div>
                        <h1 className="font-bold ml-2">Show prev Disocunt in this invoice</h1>
                        <div className="space-x-2 mt-1 px-2">
                            <Radio disabled type="radio" id="html" name="fav_language" value="New invoice (Commission)" />
                            <label >Yes</label>
                            <Radio disabled type="radio" id="html" name="fav_language" value="New invoice (Commission)" />
                            <label >no</label>
                        </div>
                    </div>
                    <div>
                        <h1 className="font-bold ml-2">Show prev Disocunt in this invoice</h1>
                        <div className="space-x-2 mt-1 px-2">
                            <Radio disabled type="radio" id="html" name="fav_language" value="New invoice (Commission)" />
                            <label >Yes</label>
                            <Radio disabled type="radio" id="html" name="fav_language" value="New invoice (Commission)" />
                            <label >no</label>
                        </div>
                    </div>



                </div>
                <div className=" flex  flex-col lg:flex-row gap-1 mt-4 ">
                    <Button disabled className="border-dotted border-black border bg-gray-200 p-2 rounded-lg">Add Money Receipt</Button>
                    <Button disabled className="border-dotted border-black border bg-gray-200 p-2 rounded-lg">CREATE</Button>
                    <Button disabled className="border-dotted border-black border bg-gray-200 p-2 rounded-lg">CREATE & PREVIEW</Button>
                </div>
            </div>
        </div>
    );
};

export default ReissuInvoiceRight;