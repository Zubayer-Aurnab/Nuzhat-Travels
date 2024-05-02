

const MainRight = () => {
    return (
        <div className="h-screen  w-[30%]">
            <div className=" flex  gap-1 mt-4 ">
                <div className="" >
                    <label >  Discount :</label> <br />
                    <input
                        className="mt-2 p-2  rounded-md bg-gray-200"
                        type="number" />
                </div>
                <div className="">
                    <label > Service Charge:</label> <br />
                    <input
                        className="mt-2 p-2 rounded-md bg-gray-200"
                        type="number" />
                </div>

            </div>
            <div className=" flex  gap-1 mt-4 ">
                <div className="" >
                    <label >  Vat/Tax :</label> <br />
                    <input
                        className="mt-2 p-2  rounded-md bg-gray-200"
                        type="number" />
                </div>
                <div className="">
                    <label > Net total:</label> <br />
                    <input
                        className="mt-2 p-2 rounded-md bg-gray-200"
                        type="number" />
                </div>

            </div>
            <div className=" flex  gap-1 mt-4 ">
                <div className="" >
                    <label >  Agent Commiosion :</label> <br />
                    <input
                        className="mt-2 p-2  rounded-md bg-gray-200"
                        type="number" />
                </div>
                <div className="">
                    <label > Reference:</label> <br />
                    <input
                        className="mt-2 p-2 rounded-md bg-gray-200"
                        type="number" />
                </div>

            </div>
            <div className=" flex  gap-1 mt-4 ">
                <div className="">
                    <label > Note:</label> <br />
                    <textarea name="" id="" cols="50" rows="8" className="bg-gray-200"></textarea>
                </div>
            </div>
            <div className=" flex  gap-1 mt-4 ">
                <div>
                    <h1 className="font-bold ml-2">Show prev Disocunt in this invoice</h1>
                    <div className="space-x-2">
                        <input type="radio" id="html" name="fav_language" value="New invoice (Commission)" />
                        <label >Yes</label>
                        <input type="radio" id="html" name="fav_language" value="New invoice (Commission)" />
                        <label >no</label>
                    </div>
                </div>
                <div>
                    <h1 className="font-bold ml-2">Show prev Disocunt in this invoice</h1>
                    <div className="space-x-2">
                        <input type="radio" id="html" name="fav_language" value="New invoice (Commission)" />
                        <label >Yes</label>
                        <input type="radio" id="html" name="fav_language" value="New invoice (Commission)" />
                        <label >no</label>
                    </div>
                </div>



            </div>
            <div className=" flex  gap-1 mt-4 ">
                <button className="border-dotted border-black border bg-gray-200 p-2 rounded-lg">Add Money Receipt</button>
                <button className="border-dotted border-black border bg-gray-200 p-2 rounded-lg">CREATE</button>
                <button className="border-dotted border-black border bg-gray-200 p-2 rounded-lg">CREATE & PREVIEW</button>
            </div>

        </div>
    );
};

export default MainRight;