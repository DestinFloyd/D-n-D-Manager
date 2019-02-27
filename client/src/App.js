import React, { Component } from 'react';
import './App.css';
import axios from "axios";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import User from './components/User';
import SingleUser from './components/SingleUser';
import Character from './components/Character'
import Dice from './components/Dice';

class App extends Component {
  state = {
    responseStuff: [{
      userId: 0,
      name: '',
      style: '',
      characters: [{}]
    }], 
    

  }
  componentDidMount() {
    this.onCheck()
  }

  onCheck = () => {
    axios.get("/api/p4/users/").then(res => {
      this.setState({ responseStuff: res.data });
      
    })
  }




  render() {
    const userComponent = () => { return <User users={this.state.responseStuff} getAll={this.onCheck} /> }
    const singleUserComponet = ({ match, history }) => { return <SingleUser getAll={this.onCheck} userId={match.params.userId} home={history.goBack} /> }

    return (


      <Router>
        <div>
          <div>
            <Link to={'/'}> <button onClick={this.onCheck}> Home</button></Link>
        
            <Dice />
          </div >
          <Switch>

            <Route exact path='/' render={userComponent} />

            
            <Route exact path='/player/:userId' render={singleUserComponet} />
            

            <Route exact path='/my/:userId/character/:characterId/' component={Character} />
          </Switch>

        </div>
      </Router>


    );
  }
}

export default App;
