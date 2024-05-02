import { Divider } from "antd";


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

                <div className=" flex flex-wrap gap-1 lg:flex-row ">
                    <div className=" " >
                        <label >  BD :</label> <br />
                        <input
                            className="mt-2  rounded-md"
                            type="number " />
                    </div>
                    <div className="">
                        <label > UT:</label> <br />
                        <input
                            className="mt-2  rounded-md"
                            type="number" />
                    </div>
                    <div className="">
                        <label >  US:</label> <br />
                        <input
                            className="mt-2  rounded-md"
                            type="number" />
                    </div>
                    <div className="">
                        <label >  XT:</label> <br />
                        <input
                            className="mt-2  rounded-md"
                            type="number" />
                    </div>
                    <div className="">
                        <label >  OW:</label> <br />
                        <input
                            className="mt-2  rounded-md"
                            type="number" />
                    </div>
                    <div className="">
                        <label >  ES:</label> <br />
                        <input
                            className="mt-2  rounded-md"
                            type="number" />
                    </div>
                </div>
                <div className=" flex flex-wrap lg:flex-row  gap-1 mt-10 lg:mt-4">
                    <div className="" >
                        <label >  QA :</label> <br />
                        <input
                            className="mt-2  rounded-md"
                            type="number" />
                    </div>
                    <div className="">
                        <label > PZ:</label> <br />
                        <input
                            className="mt-2  rounded-md"
                            type="number" />
                    </div>
                    <div className="">
                        <label >  G4:</label> <br />
                        <input
                            className="mt-2  rounded-md"
                            type="number" />
                    </div>
                    <div className="">
                        <label >  P7:</label> <br />
                        <input
                            className="mt-2  rounded-md"
                            type="number" />
                    </div>
                    <div className="">
                        <label >  P8:</label> <br />
                        <input
                            className="mt-2  rounded-md"
                            type="number" />
                    </div>
                    <div className="">
                        <label >  r9:</label> <br />
                        <input
                            className="mt-2  rounded-md"
                            type="number" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CountryTax;