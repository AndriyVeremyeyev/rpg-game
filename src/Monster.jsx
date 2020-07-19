import React, {Component} from 'react';

class Monsters extends Component {
 
  constructor(){
    super();
    this.state = {
      monsters:[],
      monsterImages: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    }
  }
  
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}))
  }
  
  render(){

    console.log(this.state.monsters)

    return(
      <div>
        <p>Monsters</p>
        {this.state.monsterImages.map(m => {
           return (<img alt='monster' key={m} src={`https://robohash.org/${m}?set=set2&size=200x200`}/>)
        })}
      </div>
    )
  }
}

export default Monsters;