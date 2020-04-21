import React from 'react';

import axios from 'axios';
import UserCard from './Components/UserCard';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      users: []
    }
  }

  componentDidMount() {
    axios.get("https://api.github.com/users/brennuck")
    .then(res => {
      console.log("RESPONSE", res)
      this.setState({
        users: res.data
      })
    })
    .catch(err => {
      console.log("ERROR", err)
    })
  }

  render() {
    return (
      <div>
        <UserCard users={this.state.users} />
      </div>
    )
  }
}

export default App;
