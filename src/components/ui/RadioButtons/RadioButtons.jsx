

const RadioButtons = () => {
    return (
        <div className="px-2 lg:px-10  mt-6 lg:mt-20">
            <div className="flex justify-between flex-col lg:flex-row px-4 lg:px-10 bg-gray-200 py-4 rounded-lg ">
                <div>
                    <input type="radio" id="html" name="fav_language" value="New invoice (Commission)" />
                    <label className="font-bold ml-2">New invoice (Commission)</label>
                </div>

                <div>
                    <input type="radio" id="html" name="fav_language" value="New invoice (Non-Commission)" />
                    <label className="font-bold ml-2">New invoice (Non-Commission)</label>
                </div>

                <div>
                    <input type="radio" id="html" name="fav_language" value="Reissu" />
                    <label className="font-bold ml-2">Reissu</label>
                </div>
                <div>
                    <input type="radio" id="html" name="fav_language" value="Refund" />
                    <label className="font-bold ml-2">Refund</label>
                </div>

            </div>
        </div>

    );
};

export default RadioButtons;