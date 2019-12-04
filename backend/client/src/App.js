import React from 'react';

import './App.css';
import Header from './components/Header'
import Form from './components/Form'
import List from './components/List'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { users: [] };
  }

  addUser = (newUser) => {
    const usersArrCopy = [...this.state.users];
    usersArrCopy.push(newUser);
    this.setState({ users: usersArrCopy })
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Form addUser={this.addUser} />
        <List usersList={this.state.users} />
      </div>
    );
  }
}

export default App;