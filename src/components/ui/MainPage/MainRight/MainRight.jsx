import { Button, InputNumber, Radio } from "antd";
import Table from "./Table/Table";
import TextArea from "antd/es/input/TextArea";


const MainRight = () => {
    return (
        <div className="h-screen  lg:w-[30%]">

            <Table />

            <div className=" flex flex-wrap lg:flex-row  gap-1 mt-4 ">
                <div className="" >
                    <label >  Discount :</label> <br />
                    <InputNumber disabled className="mt-2 w-auto " />
                </div>
                <div className="">
                    <label > Service Charge:</label> <br />
                    <InputNumber disabled className="mt-2 w-auto " />
                </div>

            </div>
            <div className=" flex flex-wrap lg:flex-row  gap-1 mt-4 ">
                <div className="" >
                    <label >  Vat/Tax :</label> <br />
                    <InputNumber disabled className="mt-2 w-auto " />
                </div>
                <div className="">
                    <label > Net total:</label> <br />
                    <InputNumber disabled className="mt-2 w-auto " />
                </div>

            </div>
            <div className=" flex flex-wrap lg:flex-row  gap-1 mt-4 ">
                <div className="" >
                    <label >  Agent Commiosion :</label> <br />
                    <InputNumber disabled className="mt-2 w-auto " />
                </div>
                <div className="">
                    <label > Reference:</label> <br />
                    <InputNumber disabled className="mt-2 w-auto " />
                </div>

            </div>
            <div className=" flex flex-wrap lg:flex-row  gap-1 mt-4 ">
                <div className="w-full">
                    <label > Note:</label> <br />
                    <TextArea disabled name="" id="" cols="10" rows="8" className="w-full" />
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
    );
};

export default MainRight;