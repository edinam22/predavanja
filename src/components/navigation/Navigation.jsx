import React from 'react';
import { Menu } from 'antd';
import Button from "../buttons/button/Button";
import Logo from "../../img/Group 2732.svg";
import clsx from "clsx";
import "./Navigation.scss";
import {useUser} from "../../contexts/UserContext";
import {t} from 'react-switch-lang';
import {Link} from "react-router-dom";
import Language from "./language/Language";
import {userRoles} from "../../config/config";

const Navigation = () => {
    const {userData} = useUser();

    return <Menu mode="horizontal"
                 defaultSelectedKeys={['home']}
                 className={"navigation-menu"}>
        <Menu.Item key="home" className={clsx("logo-item", "item")}>
            <img src={Logo} alt="away" className={"logo-img"}/>
        </Menu.Item>
        <Menu.Item className={"item item-inactive"}>{userData?.firstName} {userData?.lastName}</Menu.Item>
        {userData?.role === userRoles.EMPLOYEE ?
            <Menu.SubMenu className={"item item-inactive"} title={t('common.options')}>
                <Menu.Item>{t('navigation.add-new-user')}</Menu.Item>
                <Menu.Item>{t('navigation.add-new-vehicle')}</Menu.Item>
                <Menu.Item><Link to={"#"}>{t('navigation.add-new-reservation')}</Link></Menu.Item>
                <Menu.Item>
                    <Language/>
                </Menu.Item>
            </Menu.SubMenu>
            :
            <Menu.Item>
                <Language/>
            </Menu.Item>
        }
        <Menu.Item key="test-free" className={"item item-inactive"}>
            <Button label={t('navigation.logout')} onClick={() => console.log("Logout")}/>
        </Menu.Item>
    </Menu>
}

export default Navigation;