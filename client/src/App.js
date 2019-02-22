import React, { Component } from 'react';
import './App.css';
import axios from "axios";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import User from './components/User';

class App extends Component {
state ={
  responseStuff : [{userId: 0,
  name: '',
  style: '',
  characters: [{}]
 }]
  
}
componentDidMount(){
 this.onCheck()
}
  onCheck = () => {
    axios.get("api/p4/users/").then(res => {
      this.setState({ responseStuff: res.data });
      console.log(res.data)
    })
  }
// makeIt =(responseData )=>{
//   let x = this.state;
//   x = responseData
//   this.setState({responseStuff: x})
// }

  render() {
   const userComponent = ()=>{ return <User users={this.state.responseStuff}/> }
    return (


      <Router>
        <div>
          <div>
            <button onClick={this.onCheck}> Check users</button>
          
          </div >
          <Switch>

            <Route exact path='/' render={userComponent} />
            {/* <Route exact path='/user/<:userId>' component={User} /> */}
          </Switch>

        </div>
      </Router>


    );
  }
}

export default App;
