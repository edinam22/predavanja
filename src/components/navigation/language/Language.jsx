import React from 'react';
import {t} from "react-switch-lang";
import {Menu} from "antd";
import {useUser} from "../../../contexts/UserContext";

const Language = () => {
    const {setLanguage} = useUser();
    return <Menu.SubMenu title={t('common.language')}>
        <Menu.Item onClick={() => setLanguage("en")}>{t('language.eng')}</Menu.Item>
        <Menu.Item onclick={() => setLanguage("me")}>{t('language.mne')}</Menu.Item>
    </Menu.SubMenu>
}

export default Language;