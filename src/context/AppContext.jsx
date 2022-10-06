import {createContext, useContext, useEffect, useState} from "react";
import {listOfMovies} from "../constants/constants";

const AppContext = createContext();

const AppProvider = ({children}) => {
    const [selectedUser, setSelectedUser] = useState(null)

    //listOfMovies

    const onUserSelect = (userData) => {
        const {id: userId} = userData;
        const watchedMovies = listOfMovies.filter(movie => movie?.userId === userId)

        setSelectedUser({
            ...userData,
            movies: watchedMovies
        })
    }

    useEffect(() => {
        console.log(selectedUser)
    }, [selectedUser])

    const data = {
        selectedUser: selectedUser,
        setSelectedUser: (e) => onUserSelect(e)
    }

    return <AppContext.Provider value={data}>
        {children}
    </AppContext.Provider>
}

export const useAppData = () => {
    return useContext(AppContext);
}

export default AppProvider;