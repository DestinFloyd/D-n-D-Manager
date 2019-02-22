import React, { Component } from 'react';
import './App.css';
import axios from "axios";
// import X from "./components/X";
import { BrowserRouter as Router} from 'react-router-dom'
// , Switch, Route 

class App extends Component {


  onCheck = () => {
    axios.get("api/p4/users/").then(res=>{
      console.log(res.data)
    })
  }
  render() {
    return (


      <Router>
        <div>
          <div>
            <button onClick={this.onCheck()}> Check users</button>

          </div >
          {/* <Switch> */}

            {/* // <Route exact path='/' component={StackList} /> */}
            {/* // <Route exact path='/all/:setId' component={SingleStack} /> */}

          {/* </Switch> */}

        </div>
      </Router>


    );
  }
}

export default App;
