import FlightDetailsNC from "./FlightDetailsNC/FlightDetailsNC";
import PassportDetailsNC from "./PassportDetailsNC/PassportDetailsNC";
import SearchClientNC from "./SearchClientNC/SearchClientNC";
import TicketDetailsNC from "./TicketDetailsNC/TicketDetailsNC";


const NoCommisonLeft = () => {
    return (
        <div className="lg:w-[70%]">
            <SearchClientNC />
            <TicketDetailsNC />
            <PassportDetailsNC />
            <FlightDetailsNC />
        </div>
    );
};

export default NoCommisonLeft;