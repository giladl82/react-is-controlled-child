import React, { Component } from 'react';

import MyList from './MyList';

const data = [
  'Deborah Steele',
  'Brycen Delgado',
  'Alvaro Fletcher',
  'Thalia Neal',
  'Liana Barrett',
  'Daphne Le',
  'Jovani Henson',
  'Gunnar Lutz',
  'Justine Oconnell',
  'Eva Ho',
  'Kenley Jefferson',
  'Xavier Kane',
  'Fatima Solis',
  'Kenyon Barron',
  'Maia Payne',
  'Damaris Carr',
  'Tiana Wall',
  'Skyler Powell',
  'Jayleen Banks',
  'Kate House',
]

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedItems: [ 'Deborah Steele',
      'Brycen Delgado',
      'Alvaro Fletcher']
    }
  }

  handleItmeClick = item => {
    this.setState({
      selectedItems: this.state.selectedItems.concat(item)
    })
  }

  handleButtonClick = event => {
    event.preventDefault();
    console.log(this.list.getSelctedItem());
  }

  render() {
    return (
      <div className="App">
        <h1>This is a list of random name</h1>
        <MyList ref={list => this.list = list} onItemClick={this.handleItmeClick} isControlled={false} data={data} defaultSelectedItems={this.state.selectedItems} />
        <br />
        <button onClick={this.handleButtonClick}>console MyList selectedItems</button>
      </div>
    );
  }
}

export default App;
