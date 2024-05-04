
import {
    createBrowserRouter,
} from "react-router-dom";
import App from "../App";
import Mainpage from '../components/ui/MainPage/MainPage'
import NonCommison from "../components/ui/NonCommison/NonCommison";
import Dashboard from "../components/ui/Dashboard/Dashboard";

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
            }
        ]
    },
]);