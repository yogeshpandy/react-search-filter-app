import { Component } from 'react';
import './App.css';
import Card from './components/card-list/CardList';
import Search from './components/search-box/Search';

class App extends Component {
  constructor() {
    super();
    this.state= {
      monsters: [],  
      input: "",
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response)=>response.json())
      .then((users) => {
        this.setState(()=>{
          return {monsters:users}
        },
        ()=>{
          console.log(this.state)
        }) 
      }) 
  }

  searchChange=(event)=>{
    this.setState({input:event.target.value.toLocaleLowerCase()})
  }

  render() {
    const {monsters, input} = this.state
    const {searchChange} = this
  
    const filteredMonster = monsters.filter((monster)=>{
      return monster.name.toLocaleLowerCase().includes(input)
    })
    
    return (
      <div className="App">
        <h1 className='app-title'>Monsters Rolodex</h1>
       <Search 
         className='monsters-search-box'
         onChangeHandler={searchChange}
         placeholder={'Search monsters'}
         />
       <Card monsters={filteredMonster} />
      </div>
    );
  }
}

export default App;
