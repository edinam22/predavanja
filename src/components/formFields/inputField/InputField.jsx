import React from 'react';
import { Input } from 'antd';
import "./InputField.scss";

const InputField = ({placeholder}) => {
    return <Input
        placeholder={placeholder}
        className={"__input_field"}/>
}

export default InputField;