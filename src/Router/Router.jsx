
import {
    createBrowserRouter,
} from "react-router-dom";
import App from "../App";
import Mainpage from '../components/ui/MainPage/MainPage'
import NonCommison from "../components/ui/NonCommison/NonCommison";
import Dashboard from "../pages/Dashboard/Dashboard"
import ViewInvoice from "../pages/ViewInvoice/ViewInvoice";
import ViewNonCommission from "../pages/ViewNonCommission/ViewNonCommission";
import NewInvoiceReIssu from "../pages/NewInvoiceReIssu/NewInvoiceReIssu";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: "/",
                element: <Dashboard />
            },
            {
                path: "non-commison",
                element: <NonCommison />
            },
            {
                path: "commison",
                element: <Mainpage />
            },
            {
                path: "view-invoice",
                element: <ViewInvoice />
            },
            {
                path: "view-non-commission",
                element: <ViewNonCommission />
            },
            {
                path: "new-invoice-reissu",
                element: <NewInvoiceReIssu />
            }
        ]
    },
]);