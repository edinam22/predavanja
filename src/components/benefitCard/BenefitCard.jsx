import React from 'react';

const BenefitCard = ({title, description, image}) => {
    return <div>
        <img src={image} alt={title}/>
        <div>{title}</div>
        <p>{description}</p>
    </div>
}

export default BenefitCard;