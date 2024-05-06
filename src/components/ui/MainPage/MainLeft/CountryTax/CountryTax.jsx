import { Divider, InputNumber } from "antd";


const CountryTax = () => {
    return (
        <div>
            <div className="bg-gray-200 p-4 pb-8 rounded-lg mt-4 px-2">
                <div className="lg:my-8">
                    <Divider
                        orientation="left"
                        style={{
                            fontSize: "18px",
                            fontWeight: "700"
                        }}
                    >
                        Country Tax
                    </Divider>
                </div>

                <div className=" flex flex-wrap lg:flex-row gap-5 mt-4">
                    <div className="" >
                        <label > BD :</label> <br />
                        <InputNumber className="mt-2 w-auto" />
                    </div>
                    <div className="">
                        <label > UT:</label> <br />
                        <InputNumber className="mt-2 w-auto" />
                    </div>
                    <div className="">
                        <label > ES:</label> <br />
                        <InputNumber className="mt-2 w-auto" />
                    </div>
                    <div className="">
                        <label >XT:</label> <br />
                        <InputNumber className="mt-2 w-auto" />
                    </div>
                    <div className="">
                        <label >OW:</label> <br />
                        <InputNumber className="mt-2 w-auto" />
                    </div>
                    <div className="">
                        <label >E5:</label> <br />
                        <InputNumber className="mt-2 w-auto" />
                    </div>
                    <div className="">
                        <label > QA:</label> <br />
                        <InputNumber className="mt-2 w-auto" />
                    </div>
                    <div className="">
                        <label > PZ:</label> <br />
                        <InputNumber className="mt-2 w-auto" />
                    </div>
                    <div className="">
                        <label > G4:</label> <br />
                        <InputNumber className="mt-2 w-auto" />
                    </div>
                    <div className="">
                        <label >P7:</label> <br />
                        <InputNumber className="mt-2 w-auto" />
                    </div>
                    <div className="">
                        <label >P8:</label> <br />
                        <InputNumber className="mt-2 w-auto" />
                    </div>
                    <div className="">
                        <label >R9:</label> <br />
                        <InputNumber className="mt-2 w-auto" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CountryTax;