import CountryTax from "./CountryTax/CountryTax";
import SearchClient from "./SearchClient/SearchClient";
import TicketDetails from "./TicketDetails/TicketDetails";


const MainLeft = () => {
    return (
        <div className="  w-[70%]">
            <SearchClient />
            <TicketDetails />
            <CountryTax />
        </div>
    );
};

export default MainLeft;