

const SearchClientNC = () => {
    return (
        <div>
            <div className="flex justify-between flex-wrap gap-5 lg:flex-row bg-gray-200 p-4 lg:pb-8 rounded-lg">
                <div >
                    <label > <span className="text-red-500 font-bold">*</span> Search Client :</label> <br />
                    <select name="Client name" id="" className="mt-2 lg:p-1  rounded-md">
                        <option value="" >Clinet Name </option>
                        <option value="">Clinet </option>
                        <option value="">Clinet </option>
                        <option value="">Clinet </option>
                    </select>
                </div>
                <div >
                    <label className=""> <span className="text-red-500 font-bold">*</span> Sales By:</label> <br />
                    <select name="Client name" id="" className="mt-2 lg:p-1 rounded-md">
                        <option value="" >Select Name </option>
                        <option value="">Clinet </option>
                        <option value="">Clinet </option>
                        <option value="">Clinet </option>
                    </select>
                </div>
                <div >
                    <label > <span className="text-red-500 font-bold">*</span> Invoice No:</label> <br />
                    <input
                        className="mt-2 lg:p-1 rounded-md"
                        type="number" />
                </div>
                <div >
                    <label > <span className="text-red-500 font-bold">*</span> Sales Date:</label> <br />
                    <input
                        className="mt-2 lg:p-1 rounded-md"
                        type="date" />
                </div>
                <div >
                    <label > <span className="text-red-500 font-bold">*</span> DUE Date:</label> <br />
                    <input
                        className="mt-2 lg:p-1 rounded-md"
                        type="date" />
                </div>
                <div >
                    <label > <span className="text-red-500 font-bold">*</span> Select Agent :</label> <br />
                    <select name="Client name" id="" className="mt-2 lg:p-1 rounded-md">
                        <option value="" >Select Name </option>
                        <option value="">Clinet </option>
                        <option value="">Clinet </option>
                        <option value="">Clinet </option>
                    </select>
                </div>

            </div>
        </div>
    );
};

export default SearchClientNC;