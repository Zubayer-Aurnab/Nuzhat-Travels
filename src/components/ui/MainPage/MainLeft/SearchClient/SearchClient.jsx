

const SearchClient = () => {
    return (
        <div className="flex justify-between bg-gray-200 p-4 pb-8 rounded-lg">
            <div >
                <label > <span className="text-red-500 font-bold">*</span> Search Client :</label> <br />
                <select name="Client name" id="" className="mt-2 p-1  rounded-md">
                    <option value="" >Clinet Name </option>
                    <option value="">Clinet </option>
                    <option value="">Clinet </option>
                    <option value="">Clinet </option>
                </select>
            </div>
            <div >
                <label > <span className="text-red-500 font-bold">*</span> Sales By:</label> <br />
                <select name="Client name" id="" className="mt-2 p-1 rounded-md">
                    <option value="" >Select Name </option>
                    <option value="">Clinet </option>
                    <option value="">Clinet </option>
                    <option value="">Clinet </option>
                </select>
            </div>
            <div >
                <label > <span className="text-red-500 font-bold">*</span> Invoice No:</label> <br />
                <input
                    className="mt-2 p-1 rounded-md"
                    type="number" />
            </div>
            <div >
                <label > <span className="text-red-500 font-bold">*</span> Sales Date:</label> <br />
                <input
                    className="mt-2 p-1 rounded-md"
                    type="date" />
            </div>
            <div >
                <label > <span className="text-red-500 font-bold">*</span> DUE Date:</label> <br />
                <input
                    className="mt-2 p-1 rounded-md"
                    type="date" />
            </div>
            <div >
                <label > <span className="text-red-500 font-bold">*</span> Select Agent :</label> <br />
                <select name="Client name" id="" className="mt-2 p-1 rounded-md">
                    <option value="" >Select Name </option>
                    <option value="">Clinet </option>
                    <option value="">Clinet </option>
                    <option value="">Clinet </option>
                </select>
            </div>

        </div>
    );
};

export default SearchClient;