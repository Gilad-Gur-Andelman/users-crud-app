import React from 'react';

import './App.css';
import Header from './components/Header'
import Form from './components/Form'
import List from './components/List'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { users: [], post: '' };
  }

  addUser = async (newUser) => {
    const usersArrCopy = [...this.state.users];
    usersArrCopy.push(newUser);
    this.setState({ users: usersArrCopy });

    var body = { post: newUser };
    const response = await fetch('/mypost', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
    const responseBody = await response.text();
    this.setState({ responseToPost: responseBody });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Form addUser={this.addUser} />
        <p>{this.state.responseToPost}</p>
        <List usersList={this.state.users} />
      </div>
    );
  }
}

export default App;