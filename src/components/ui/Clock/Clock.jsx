import { useEffect, useState } from "react";


const Clock = () => {

    const [CurrentTime, setCurrentTime] = useState("");
    const [FormattedDateTime, setFormattedDateTime] = useState("");
    const currDate = new Date().toLocaleDateString();
    const currTime = new Date().toLocaleTimeString();
    console.log(currDate)

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            const hours = now.getHours().toString().padStart(2, "0");
            const minutes = now.getMinutes().toString().padStart(2, "0");
            const seconds = now.getSeconds().toString().padStart(2, "0");
            setCurrentTime(`${hours}:${minutes}:${seconds}`);

            const day = now.getDate();
            const monthIndex = now.getMonth();
            const year = now.getFullYear();
            const monthNames = [
                "January", "February", "March", "April", "May", "June",
                "July", "August", "September", "October", "November", "December"
            ];
            const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
            const dayOfWeekName = daysOfWeek[now.getDay()];
            const formattedDate = ` ${day} ${monthNames[monthIndex]} ${year}`;
            setFormattedDateTime(`${dayOfWeekName}, ${formattedDate}`);
        }, 1000);

        return () => clearInterval(interval);
    }, []);


    return (
        <>
            <div className="p-2 ">
                <div className="bg-gradient-to-r from-slate-700 to-slate-800 rounded-lg p-4">
                    <div className="flex justify-center ">
                        <div className="flex gap-2 text-white text-3xl ">
                            <h1>{currTime}</h1>
                        </div>
                    </div>
                    <div className="text-white text-center text-[12px]">
                        <h1>{FormattedDateTime}</h1>
                    </div>
                </div>
            </div>
            <div className="space-y-1">
                <p className="border-[1px] border-black"></p>
                <div className="px-1">
                    <p className="border-[1px] border-yellow-600"></p>
                </div>
                <p className="border-[1px] border-black"></p>
            </div>
        </>
    );
};

export default Clock;