import FlightDetails from "../FlightDetails/FlightDetails";
import CountryTax from "./CountryTax/CountryTax";
import PassportDetails from "./PassportDetails/PassportDetails";
import SearchClient from "./SearchClient/SearchClient";
import TicketDetails from "./TicketDetails/TicketDetails";


const MainLeft = () => {
    return (
        <div className="  w-[70%]">
            <SearchClient />
            <TicketDetails />
            <CountryTax />
            <PassportDetails />
            <FlightDetails />
        </div>
    );
};

export default MainLeft;