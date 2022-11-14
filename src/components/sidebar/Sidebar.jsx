import React from 'react';
import { Menu } from 'antd';
import {t} from 'react-switch-lang';
import { useNavigate } from "react-router-dom";
import {routes} from "../../routes/routes";
import "./Sidebar.scss";

const Sidebar = () => {
    const navigate = useNavigate();

    const items = [
        {
            label: t("sidebar.clients"),
            key: 'clients',
            onClick: () => navigate(`/${routes.CLIENTS.path}`)
        },
        {
            label: t("sidebar.vehicles"),
            key: 'vehicles',
            onClick: () => console.log('vehicles')
        },
        {
            label: t("sidebar.reservations"),
            key: 'rezervations',
            onClick: () => console.log('rezervations')
        }
    ]

    return  <Menu
        mode="inline"
        style={{
            width: 256,
        }}
        items={items}
        className={"__sidebar"}
    />
}

export default Sidebar;