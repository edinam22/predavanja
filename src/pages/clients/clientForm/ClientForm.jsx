import React, {useEffect, useState} from 'react';
import InputField from "../../../components/formFields/inputField/InputField";
import {clientService} from "../../../services/ClientService";
import {t} from 'react-switch-lang';
import SelectField from "../../../components/formFields/selectField/SelectField";
import {countryService} from "../../../services/CountryService";
import FormButtonGroup from "../../../components/buttons/formButtonGroup/FormButtonGroup";
import {useForm} from 'react-hook-form';
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";
import {regex} from "../../../utils/regex";

const ClientForm = ({type, id, cancel}) => {
    const [countries, setCountries] = useState([])

    const schema = yup.object().shape({
        firstName: yup.string().trim()
            .required(t('validation.required'))
            .min(3, t('validation.min', {number: 3}))
            .max(255, t('validation.max', {number: 255})),
        lastName: yup.string().trim()
            .required(t('validation.required'))
            .min(3, t('validation.min', {number: 3}))
            .max(255, t('validation.max', {number: 255})),
        country: yup.string().trim().required(t('validation.required')),
        idNumber: yup.string().trim().required(t('validation.required')),
        phone: yup.string().trim()
            .required(t('validation.required'))
            .min(6, t('validation.min', {number: 6}))
            .max(30, t('validation.max', {number: 30}))
            .matches(regex.PHONE, t('validation.invalid')),
        email: yup.string().trim()
            .required(t('validation.required'))
            .email(t('validation.invalid'))
    })

    const { handleSubmit, control, reset, formState: {errors}
    } = useForm({resolver: yupResolver(schema)});

    const onSubmit = (data) => {
        console.log(data)
    }

    useEffect(() => {
        if(type !== 'add' && id){
            const res = clientService.getClientById(id)
            reset({
                ...res,
                country: res?.country?.code
            })
        }
    }, [type, id])

    useEffect(() => {
        const res = countryService.getAll();
        const list = res.map(item => ({
            label: item?.name,
            value: item?.code
        }))
        setCountries(list)
    }, [])

    useEffect(() => {
        console.log(errors)
    }, [errors])

    return <div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <InputField label={t('clients.firstName')}
                        name="firstName"
                        control={control}
                        placeholder={t('clients.placeholders.firstName')}
                        error={errors?.firstName?.message}
                        disabled={type === 'preview'}
            />
            <InputField label={t('clients.lastName')}
                        name="lastName"
                        control={control}
                        placeholder={t('clients.placeholders.lastName')}
                        error={errors?.lastName?.message}
                        disabled={type === 'preview'}
            />
            <SelectField
                label={t('clients.country')}
                name="country"
                control={control}
                options={countries}
                placeholder={t('clients.placeholders.country')}
                error={errors?.country?.message}
                disabled={type === 'preview'}
            />
            <InputField label={t('clients.number')}
                        name="idNumber"
                        control={control}
                        placeholder={t('clients.placeholders.number')}
                        error={errors?.idNumber?.message}
                        disabled={type === 'preview'}
            />
            <InputField label={t('clients.phone')}
                        name="phone"
                        control={control}
                        placeholder={t('clients.placeholders.number')}
                        error={errors?.phone?.message}
                        disabled={type === 'preview'}
            />
            <InputField label={t('clients.email')}
                        name="email"
                        control={control}
                        placeholder={t('clients.placeholders.email')}
                        error={errors?.email?.message}
                        disabled={type === 'preview'}
            />
            {type && type !== 'preview' &&
            <FormButtonGroup
                onCancel={() => cancel()}
            />
            }
        </form>
    </div>
}

export default ClientForm;