import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../pages/HomePage/Home/Home";
import AddCoffee from "../components/AddCoffee/AddCoffee";
import UpdateCoffee from "../components/UpdateCoffee/UpdateCoffee";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayouts></MainLayouts>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'addCoffee',
                element: <AddCoffee></AddCoffee>
            },
            {
                path: 'updateCoffee',
                element: <UpdateCoffee></UpdateCoffee>
            }
        ]
    }
]);


export default router;