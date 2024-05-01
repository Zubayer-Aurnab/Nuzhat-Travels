import { useEffect } from "react";
import { useState } from "react";


const Clock = () => {

    const [CurrentTime, setCurrentTime] = useState()
    const currDate = new Date().toLocaleDateString();
    const currTime = new Date().toLocaleTimeString();
    // console.log(currDate, currTime)

    useEffect(() => {

        const interval = setInterval(() => {
            setCurrentTime(currTime)
        }, 1000);

        return () => clearInterval(interval);
    }, [currTime, currDate])
    // console.log(CurrentTime)

    return (
        <>
            <div>
                <div className="p-2 ">
                    <div className="bg-gradient-to-r from-slate-700 to-slate-800 ... rounded-lg p-4">
                        <div className="flex justify-center ">
                            <div className="flex gap-2 text-white text-2xl ">
                                <h1>{CurrentTime?.slice(0, 8)}</h1>
                                <p>{CurrentTime?.slice(-2)}</p>
                            </div>
                        </div>
                        <div className="text-white text-center text-[12px]">
                            <h1>{currDate}</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="space-y-1">
                <p className="border-[1px] border-black"></p>
                <div className="px-1">
                    <p className="border-[1px] border-yellow-600"></p>
                </div>
                <p className=" border-black border-[1px]"></p>
            </div>
        </>
    );
};

export default Clock;