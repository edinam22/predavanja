import React from 'react';
import {Outlet, Link, useNavigate, useLocation} from "react-router-dom";

const Layout = () => {
    const navigate = useNavigate();
    let location = useLocation();

    console.log(location)

    return(
        <div>
            This is a layout
            <div>
                <Link to={"/route-1"}>
                    Go to page 1
                </Link>
                <Link to={"/route-2"}>
                    Go to page 2
                </Link>
                <Link to={"/route-3/test/some-id"}>
                    Go to page 3
                </Link>
                <Link to={"/movies"}>
                    Movies
                </Link>
                <div onClick={() => navigate("/route-2")}> Click me to go to page 2</div>
            </div>
            <div style={{backgroundColor: 'green', height: '50vh'}}>
                <Outlet />
            </div>
        </div>
    )
}

export default Layout;
