import React from 'react';
import Button from "../button/Button";
import {t} from 'react-switch-lang';
import classes from "./FormButtonGroup.module.scss";

const FormButtonGroup = ({
                             onCancel
}) => {
    return <div className={classes['container']}>
        <Button type="reset" label={t('common.cancel')} onClick={(e) => {
            onCancel()
        }}/>
        <Button type="submit" label={t('common.save')} color="green" onClick={() => {}}/>
    </div>
}

export default FormButtonGroup;