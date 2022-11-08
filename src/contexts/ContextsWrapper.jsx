import React from "react";
import ModalProvider from "./ModalContext";
import UserProvider from "./UserContext";

const ContextsWrapper = ({children}) => {
    return(
        <UserProvider>
            <ModalProvider>{children}</ModalProvider>
        </UserProvider>
    )
}

export default ContextsWrapper;