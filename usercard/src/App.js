import React from 'react';

import axios from 'axios';

import UserCard from './Components/UserCard';
import FollowersCard from './Components/FollowersCard';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      users: {},
      followers: []
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

    axios.get("https://api.github.com/users/brennuck/followers")
    .then(res => {
      console.log("FOLLOWERS", res)
      this.setState({
        followers: res.data
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
        <FollowersCard followers={this.state.followers} />
      </div>
    )
  }
}

export default App;
