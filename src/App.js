import './App.css';
import {listOfUsers} from "./constants/constants";
import UserCard from "./components/userCard/UserCard";
import FilterList from "./components/filterList/FilterList";
import {useReducer, useState} from "react";
import FilteredList from "./components/filteredList/FilteredList";
import Counter from "./components/counter/Counter";
import UsersSearch from "./components/usersSearch/UsersSearch";

// single line comment
/*
* sfdf
* fdsf
* */

const reducer = (state, action) => {
    switch(action.type){
        case 'search-name':
            return listOfUsers.filter(user => user.firstName.toString().toLowerCase().includes(action.data.toLowerCase()));
        case 'search-surname':
            return listOfUsers.filter(user => user.lastName.toString().toLowerCase().includes(action.data.toLowerCase()));
        case 'search-age':
            return listOfUsers.filter(user => user.age.toString().toLowerCase().includes(action.data.toLowerCase()));
        case 'search-city':
            return listOfUsers.filter(user => user.city.toString().toLowerCase().includes(action.data.toLowerCase()));
        default:
            return listOfUsers;
    }
}

function App() {
    const [tabInView, setTabInView] = useState("firstName");
    const [list, dispatch] = useReducer(reducer, [])

  return (
    <div className="App">
        <Counter/>
      <UserCard firstName="Nemanja"
        lastName="Nemanjic"
        age={50}
        city="Niksic"
        image="https://img.freepik.com/premium-vector/female-user-profile-avatar-is-woman-character-screen-saver-with-emotions_505620-617.jpg"/>

        <div style={{display: 'flex', gap: '15px'}}>
            <div className={tabInView === "firstName" ? "tab-active" : ""} onClick={() => setTabInView("firstName")}>First name</div>
            <div className={tabInView === "lastName" ? "tab-active" : ""} onClick={() => setTabInView("lastName")}>Last name</div>
            <div className={tabInView === "age" ? "tab-active" : ""} onClick={() => setTabInView("age")}>Age</div>
            <div className={tabInView === "city" ? "tab-active" : ""} onClick={() => setTabInView("city")}>City</div>
        </div>
        <div>
            {tabInView === "firstName" && <UsersSearch
                title="By first name"
                list={list}
                search={(e) => dispatch({type: e?.length === 0 ? '' : 'search-name', data: e})}/>}
            {tabInView === "lastName" && <UsersSearch title="By last name" list={list} search={(e) => dispatch({type: e?.length === 0 ? '' : 'search-surname', data: e})}/>}
            {tabInView === "age" && <UsersSearch title="By age" list={list} search={(e) => dispatch({type: e?.length === 0 ? '' : 'search-age', data: e})}/>}
            {tabInView === "city" && <UsersSearch title="By city" list={list} search={(e) => dispatch({type: e?.length === 0 ? '' : 'search-city', data: e})}/>}
        </div>
    </div>
  );
}

export default App;
