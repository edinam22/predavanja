import React from 'react';
import { Menu } from 'antd';
import Logo from "../../img/Group 2732.svg";
import clsx from "clsx";
import "./Navigation.scss";

const Navigation = () => {

    const items = [
        {
            key: 'benefits',
            title: 'Benefiti'
        },
        {
            key: 'characteristics',
            title: 'Karakteristike'
        },
        {
            key: 'demo',
            title: 'Prijavi se za demo'
        },
    ]

    return <Menu mode="horizontal"
                 defaultSelectedKeys={['home']}
                 className={"navigation-menu"}>
        <Menu.Item key="home" className={clsx("logo-item", "item")}>
            <img src={Logo} alt="away" className={"logo-img"}/>
        </Menu.Item>
        {items.map(item => <Menu.Item key={item.key} className={clsx("menu-item", "item")}>
            {item.title}
        </Menu.Item>)}
        <Menu.Item key="test-free" className={"item"}>
            Testirajte besplatno
        </Menu.Item>
    </Menu>
}

export default Navigation;