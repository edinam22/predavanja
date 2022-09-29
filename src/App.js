import './App.css';
import Greeting from "../src/components/greeting/Greeting";
import RandomText from "./components/randomText/RandomText";
import Name from "./components/name/Name";
import UserName from "./components/userName/UserName";
import ExampleImage from "./img/modern-abstract-geometric-background-free-vector.jpg";
import SvgImage from "./img/1664369598poker-bet-svgrepo-com.svg"
import { ReactComponent as SvgComponent } from "./img/1664369598poker-bet-svgrepo-com.svg";
import {listOfUsers} from "./constants/constants";
import Counter from "./components/counter/Counter";
import Search from "./components/search/Search";

// single line comment
/*
* sfdf
* fdsf
* */
function App() {

  console.log(listOfUsers.some(user => user.city === "Budva"))

  console.log(listOfUsers.filter(user => user.age >= 28))

  const newListOfUsers = [...listOfUsers];

  // console.log(newListOfUsers)
  // console.log(newListOfUsers.shift())
  // console.log(newListOfUsers)

  newListOfUsers.push({
    id: 5,
    firstName: 'Dimitrije',
    lastName: 'Nikolic',
    age: 55,
    city: 'Donja Gorica'
  })

  console.log(newListOfUsers)

  const names = ['Edina', 'Ana', 'Marko']
  const names2 = ['Nemanja', 'Dimitrije']
  console.log(names.join(','))
  console.log([...names, ...names2])


  return (
    <div className="App">
      <Counter/>
      <Search/>
    <Greeting/>
      <RandomText/>
      {
        /*
        * fgfgf
        * */
      }
      <Name currentUser={<UserName/>}
            firstName="Ana"
            lastName="Miljkovic"/>
      <img src="images/download.jpg" alt=""/>
      <img src="images/download.jpg" alt="Example 1"/>
      <img src="example.jpg" alt="Example 2"/>
      <img src={ExampleImage} alt="Example 3" style={{width: '150px'}}/>
      <img src={SvgImage} alt="Example 4" style={{width: '150px'}}/>
      {/*<SvgComponent/>*/}
      <div style={{display: 'flex', gap: '5px'}}>
      {listOfUsers.map((user, index, arr) => {
        return <Name key={user.id}
                     firstName={user.firstName}
                     lastName={user.lastName}
                     age={user.age}
                     city={user.city}/>
      })}
      </div>
        <div>
          User from Budva exists? {listOfUsers.some(user => user.city === "Budva") ? "Yes" : "No"}
        </div>
      <div style={{display: 'flex', gap: '5px'}}>
        {listOfUsers.filter(user => user.age >= 28).map((user) => {
          return <Name key={user.id}
                       firstName={user.firstName}
                       lastName={user.lastName}
                       age={user.age}
                       city={user.city}/>
        })}
      </div>
      <div>
        Is every user older than 18? {listOfUsers.every(user => user.age >= 18) ? "Yes" : "No"}
      </div>
      <div>
        Is every user older than 28? {listOfUsers.every(user => user.age >= 28) ? "Yes" : "No"}
      </div>
    </div>
  );
}

export default App;
