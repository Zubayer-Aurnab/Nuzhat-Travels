

const TableNC = () => {
    return (
        <div>
            <table className="w-full">
                <thead>
                    <tr>
                        <th scope="col" className="border-2 border-r-white bg-gray-200  p-2" >SL</th>
                        <th scope="col" className="border-2 border-r-white bg-gray-200  p-2" >Ticket <br /> Price</th>
                        <th scope="col" className="border-2 border-r-white bg-gray-200  p-2" >Client <br /> Price</th>
                        <th scope="col" className="border-2 border-r-white bg-gray-200  p-2" >Vendor <br /> Price</th>
                        <th scope="col" className="border-2 border-r-white bg-gray-200  p-2" >Profit <br /></th>
                        <th scope="col" className="border-2 border-l-white bg-gray-200  p-2" >Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className=" border-2   h-44">
                        <div className="">
                            no data
                        </div>
                    </tr>

                    <tr>
                        <th className="border-2  text-center" > total</th>
                        <td className="border-2  text-center">0</td>
                        <td className="border-2  text-center">0</td>
                        <td className="border-2  text-center">0</td>
                        <td className="border-2  text-center">0</td>
                        <td className="border-2  text-center">0</td>
                    </tr>
                </tbody>

            </table>
            <div className=" flex flex-wrap lg:flex-row  gap-1 mt-4 ">
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
            <div className=" flex flex-wrap lg:flex-row  gap-1 mt-4 ">
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
            <div className=" flex flex-wrap lg:flex-row  gap-1 mt-4 ">
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
            <div className=" flex flex-wrap lg:flex-row  gap-1 mt-4 ">
                <div className="w-full">
                    <label > Note:</label> <br />
                    <textarea name="" id="" cols="10" rows="8" className="bg-gray-200 w-full"></textarea>
                </div>
            </div>
            <div className=" flex flex-col lg:flex-row  gap-1 mt-4 ">
                <div>
                    <h1 className="font-bold ml-2">Show prev Disocunt in this invoice</h1>
                    <div className="space-x-2 mt-1 px-2">
                        <input type="radio" id="html" name="fav_language" value="New invoice (Commission)" />
                        <label >Yes</label>
                        <input type="radio" id="html" name="fav_language" value="New invoice (Commission)" />
                        <label >no</label>
                    </div>
                </div>
                <div>
                    <h1 className="font-bold ml-2">Show prev Disocunt in this invoice</h1>
                    <div className="space-x-2 mt-1 px-2">
                        <input type="radio" id="html" name="fav_language" value="New invoice (Commission)" />
                        <label >Yes</label>
                        <input type="radio" id="html" name="fav_language" value="New invoice (Commission)" />
                        <label >no</label>
                    </div>
                </div>



            </div>
            <div className=" flex  flex-col lg:flex-row gap-1 mt-4 ">
                <button className="border-dotted border-black border bg-gray-200 p-2 rounded-lg">Add Money Receipt</button>
                <button className="border-dotted border-black border bg-gray-200 p-2 rounded-lg">CREATE</button>
                <button className="border-dotted border-black border bg-gray-200 p-2 rounded-lg">CREATE & PREVIEW</button>
            </div>

        </div>
    );
};

export default TableNC;