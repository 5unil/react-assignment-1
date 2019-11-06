import React, {Component} from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';


class App extends Component {

  state = {

    username: 'Rahul'
  }


  changeUserHandler = (event) => {

      this.setState({

        username: event.target.value
      })
  }


  render = () => {

    return(

      <div className="App">
        <UserInput change = {this.changeUserHandler} username = {this.state.username}/>
        <UserOutput username = 'Sunil'/>
        <UserOutput username = {this.state.username}/>
        <UserOutput />
        <UserOutput />        
      </div>
    );
  }
}

export default App;
