import React, {useState} from 'react';
import SearchField from "../../components/search/Search";
import {t} from 'react-switch-lang';
import ButtonRounded from "../../components/buttons/buttonRounded/ButtonRounded";
import Table from "../../components/table/Table";
import {useModal} from "../../contexts/ModalContext";
import ClientForm from "./clientForm/ClientForm";

const Clients = () => {
    const {open} = useModal()
    const [query, setQuery] = useState("")
    const [rows, setRows] = useState([]);

    const openClientModal = (type, id = null) => {
        //type - add ,edit, preview
        //id - null or number

        open({
            title: type === 'add'
                ? t('clients.add-client')
                : type === 'edit'
                    ? t('clients.edit-client')
                    : t('common.preview'),
            content: <ClientForm type={type} id={id}/>
        })
    }

    const onRowClick = () => {}

    const onClientAdd = () => {}

    const headers = [
        {
            title: t('clients.name'),
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: t('clients.number'),
            dataIndex: 'number',
            key: 'number',
        },
        {
            title: t('clients.phone'),
            dataIndex: 'phone',
            key: 'phone',
        },
        {
            title: t('clients.email'),
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: t('clients.first-reservation'),
            dataIndex: 'first-reservation',
            key: 'first-reservation',
        },
        {
            title: t('clients.last-reservation'),
            dataIndex: 'last-reservation',
            key: 'last-reservation',
        },
        {
            title: t('clients.note'),
            dataIndex: 'note',
            key: 'note',
        },
    ];



    return <div>
        <div>
            <SearchField placeholder={t('clients.placeholder')} onSearch={(e) => setQuery(e)}/>
            <ButtonRounded label={t('clients.add-client')} onClick={(e) => openClientModal('add')}/>
        </div>
        <div>
            <Table header={headers}
                   rows={rows}
                   onRowClick={(e) => onRowClick(e)}/>
        </div>
    </div>
}

export default Clients;