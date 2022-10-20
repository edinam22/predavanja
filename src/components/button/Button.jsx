import React from 'react';
import classes from "./Button.module.scss";

const Button = ({label = '', onClick}) => {
    return <button className={classes['button']}
                   onClick={(e) => {
                            e.preventDefault();
                            onClick()
                    }}>
                        {label}
                    </button>
}

export default Button;