import { Outlet } from "react-router";

const PrivateRoute = () => {

    let isLoggedIn = true;

    return (isLoggedIn) ? <Outlet/> : "User not logged In";
}

export default PrivateRoute;