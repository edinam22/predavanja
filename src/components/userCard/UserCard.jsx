import React, {useEffect, useRef} from "react";
import "./UserCard.css";

const UserCard = ({firstName, lastName, age, city, image}) => {

    return <div className={"user-card"}>
        <div className="image-container">
            <img src={image} alt="Profile photo"/>
        </div>
        <div className="user-data">
            <div>{firstName}</div>
            <div>{lastName}</div>
            <div>{age}</div>
            <div>{city}</div>
        </div>
    </div>
}

export default UserCard;