import { Route } from "react-router-dom";
import Login from "../modules/Login/Login";
import Register from "../modules/Register/Register";

const appRoutes = [
    <Route path='/' element={<Login />} key="landing" />,
    <Route path='/login' element={<Login />} key="login" />,
    <Route path='/register' element={<Register />} key="register" />,
];

export default appRoutes;