import React, {useEffect, useState} from 'react';
import SearchField from "../../components/search/Search";
import {t} from 'react-switch-lang';
import Table from "../../components/table/Table";
import {useModal} from "../../contexts/ModalContext";
import ClientForm from "./clientForm/ClientForm";
import classes from "./Clients.module.scss";
import Button from "../../components/buttons/button/Button";
import {clientService} from "../../services/ClientService";
import TableButtonGroup from "../../components/buttons/tableButtonGroup/TableButtonGroup";


const Clients = () => {
    const {open, close} = useModal()
    const [query, setQuery] = useState("")
    const [rows, setRows] = useState([]);

    const openClientModal = (type, id = null) => {
        //type - add ,edit, preview
        //id - null or number

        console.log(type === 'add'
            ? t('clients.add-client')
            : type === 'edit'
                ? t('clients.edit-client')
                : t('common.preview'))

        open({
            title: type === 'add'
                ? t('clients.add-client')
                : type === 'edit'
                    ? t('clients.edit-client')
                    : t('common.preview'),
            content: <ClientForm type={type}
                                 id={id}
                                 cancel={close}
                                    onSuccess={() => {
                                        console.log("refresh data")
                                    }}/>
        })
    }

    const headers = [
        {
            title: t('clients.name'),
            dataIndex: 'id',
            key: 'id',
            render: (text, record) => record.getFullName()
        },
        {
            title: t('clients.number'),
            dataIndex: 'idNumber',
            key: 'idNumber',
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
            dataIndex: 'firstReservationDate',
            key: 'firstReservationDate',
        },
        {
            title: t('clients.last-reservation'),
            dataIndex: 'lastReservationDate',
            key: 'lastReservationDate',
        },
        {
            title: t('clients.note'),
            dataIndex: 'note',
            key: 'note',
        },
        {
            title: '',
            dataIndex: 'x',
            key: 'x',
            render: (text, record) => <TableButtonGroup
                onEdit={() => {
                    openClientModal("edit", record?.id)
                }}
                onDelete={() => {
                    console.log("delete", record?.id)
                }}
            />

},
    ];

    useEffect(() => {
        setRows(clientService.getAll())
    }, [])

    return <>
        <div className={classes['page-head']}>
            <SearchField className={classes['search']} placeholder={t('clients.placeholder')} onSearch={(e) => setQuery(e)}/>
            <Button label={t('clients.add-client')} onClick={(e) => openClientModal('add')}/>
        </div>
        <div className={classes['table']}>
            <Table header={headers}
                   rows={rows}
                   onRowClick={(record) => openClientModal("preview", record?.id)}/>
        </div>
    </>
}

export default Clients;