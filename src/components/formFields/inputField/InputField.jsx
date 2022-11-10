import React from 'react';
import { Input } from 'antd';
import "./InputField.scss";

const InputField = ({label, placeholder, onChange}) => {
    return <Input
        placeholder={placeholder}
        onChange={onChange}
        className={"__input_field"}/>
}

export default InputField;