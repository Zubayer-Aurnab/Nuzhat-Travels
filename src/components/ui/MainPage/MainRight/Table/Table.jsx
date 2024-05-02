

const Table = () => {
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
        </div>
    );
};

export default Table;