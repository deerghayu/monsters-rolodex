import { useEffect, useState } from "react";
import "./App.css";
import SearchBox from "./components/search-box/search-box.component";
import CardList from "./components/card-list/card-list.component";

const App = () => {
  const [searchKey, setSearchKey] = useState("");
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

 useEffect(()=>{
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((users) => setMonsters(users));
 }, []);
  
 useEffect(()=>{
  const newFilteredMonsters = monsters.filter((monster) => {
    return monster.name.toLowerCase().includes(searchKey);
  });
  setFilteredMonsters(newFilteredMonsters);
 }, [filteredMonsters, searchKey]);

  const onSearchChange = (event) => {
    setSearchKey(event.target.value.toLowerCase());
    console.log(event.target.value.toLowerCase());
  };



  return (
    <div className="App">
      <h1 className="app-title">Monsters Rolodex</h1>

      <SearchBox
        onChangeHandler={onSearchChange}
        className="search-box"
        placeholder="Search Monster"
      />

      <CardList monsters={filteredMonsters} />
    </div>
  );
  // class App extends Component {
  //   constructor() {
  //     super();
  //     this.state = {
  //       monsters: [],
  //       searchField: "",
  //     };
  //   }

  // componentDidMount() {
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then((response) => response.json())
  //     .then((users) =>
  //       this.setState(() => {
  //         return { monsters: users };
  //       })
  //     );
  // }

  // render() {
  //   const { monsters, searchField } = this.state;
  //   const { onSearchChange } = this;
  //   const filteredMonsters = monsters.filter((monster) => {
  //     return monster.name.toLowerCase().includes(searchField);
  //   });

  //   return (
  //     <div className="App">
  //       <SearchBox
  //         onChangeHandler={onSearchChange}
  //         className="search-box"
  //         placeholder="Search Monster"
  //       />
  //       <CardList monsters={filteredMonsters} />
  //     </div>
  //   );
  // }
};

export default App;
