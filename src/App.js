import React, { Component } from 'react';
import Header from './components/Header/Header';
import LevelButton from './components/LevelButton/LevelButton';
import Table from './components/Table/Table';

class App extends Component {
  static defaultProps = {
    level: 0
  }

  constructor(props) {
    super(props);

    this.state = {
      level: this.props.level
    }

    this.handleChangeLevel = this.handleChangeLevel.bind(this);
  }

  handleChangeLevel(level) {
    this.setState({
      level: level
    });
  }

  render() {
    const { level } = this.state;

    return (
      <div className="app">
        <Header />
        {/* <LevelButton current={level} onChangeLevel={this.handleChangeLevel} /> */}
        <Table level={level} />
      </div>
    );
  }
}

export default App;
