import FlightDetailsRI from "./FllightDetailsRI/FlightDetailsRI";
import PassportDetailsRI from "./PassportDetailsRI/PassportDetailsRI";
import TicketDetailsRI from "./TicketDetailsRI/TicketDetailsRI";


const ReissuInvoiceLeft = () => {
    return (
        <div className="lg:w-[70%] ">
            <TicketDetailsRI />
            <PassportDetailsRI />
            <FlightDetailsRI />
        </div>
    );
};

export default ReissuInvoiceLeft;