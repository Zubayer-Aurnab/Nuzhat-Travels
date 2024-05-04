
import './Dashboard.css'
import Daily from "./Daily";
import Montly from "./Montly";
import Yearly from './Yearly';
import AccountDetails from './AccountDetails';
import AccountBalanceHistory from './AccountBalanceHistory';
import ClientsDetails from './ClientsDetails';

const Dashboard = () => {

    return (
        <div className=" px-4 mt-10 grid  lg:grid-cols-3 gap-3">
            <Daily />
            <Montly />
            <Yearly />
            <AccountDetails />
            <AccountBalanceHistory />
            <ClientsDetails />
        </div>
    );
};

export default Dashboard;