import React from 'react';

import axios from 'axios';

class App extends React.Component {
  state = {
    users: []
  };

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
        
      </div>
    )
  }
}

export default App;
