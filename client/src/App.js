import React, { Component } from 'react';
import './App.css';
import axios from "axios";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import User from './components/User';
import SingleUser from './components/SingleUser';
import Character from './components/Character'
import Dice from './components/Dice';
import styled from 'styled-components'
import dndSymbol from './images/dndSymbol.png'



const Home = styled.div`
width: 10vw;
height: 10vh;
text-align: center;
display:flex; 
justify-content: center;
background-image: url(${dndSymbol});
background-position: center;
background-size: contain;
background-repeat: no-repeat;
&:hover {
   
      box-shadow: 2px 2px 2px 2px red;
}
`
const Header = styled.div`
display: flex;
text-align: center;
font-size: 3em;
`
const HeaderName = styled.div`
justify-content: center;
`

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
            <Header> 
            <Link to={'/'}> <Home onClick={this.onCheck}> </Home></Link>
            <HeaderName> Dungeons + Dragons </HeaderName>
            </Header>
        
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
