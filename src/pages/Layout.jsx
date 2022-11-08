import React from 'react';
import {t} from "react-switch-lang";
import {Outlet, Link, useNavigate, useLocation} from "react-router-dom";
import {useUser} from "../contexts/UserContext";

const Layout = () => {
    const navigate = useNavigate();
    let location = useLocation();
    const {setLanguage} = useUser();

    console.log(location)

    return(
        <div>
            This is a layout
            <div>
                <Link to={"/search-params"}>
                    {t("navigation.check-search")}
                </Link>
                <Link to={"/modal"}>
                    {t("navigation.check-modal")}
                </Link>
                <Link to={"/route-1"}>
                    {t("navigation.go-to-page-1")}
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
                <div onClick={() => setLanguage("en")}>En</div>
                <div onClick={() => setLanguage("me")}>Me</div>
            </div>
            <div style={{backgroundColor: 'green', height: '50vh'}}>
                <Outlet />
            </div>
        </div>
    )
}

export default Layout;
