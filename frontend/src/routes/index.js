import { Route } from "react-router-dom";
import Login from "../modules/Login/Login";
import Register from "../modules/Register/Register";
import Authenticate from "../components/Authenticate";
import Dashboard from "../modules/Dashboard/Dashboard";

const appRoutes = [
    <Route path='/login' element={<Login />} key="login" />,
    <Route path='/register' element={<Register />} key="register" />,
    <Route path='/' element={<Authenticate />} key="authenticate">
        <Route path='' element={<Dashboard />} key="dashboard" />,
    </Route>
];

export default appRoutes;