import React, { Component } from 'react';
import Header from './components/Header/Header';
import LevelButton from './components/LevelButton/LevelButton';
import Table from './components/Table/Table';
import Sidebar from './components/Sidebar/Sidebar';

class App extends Component {
  static defaultProps = {
    level: 0,
    showSidebar: false
  }

  constructor(props) {
    super(props);

    this.state = {
      level: this.props.level,
      showSidebar: this.props.showSidebar
    }

    this.handleChangeLevel = this.handleChangeLevel.bind(this);
    this.handleChangeShowSidebar = this.handleChangeShowSidebar.bind(this);
  }

  handleChangeLevel(level) {
    this.setState({
      level: level
    });
  }

  handleChangeShowSidebar() {
    const showStatus = this.state.showSidebar;
    console.log(showStatus);

    this.setState({
      showSidebar: !showStatus
    });
  }

  render() {
    const { level, showSidebar } = this.state;

    console.log('render App');

    return (
      <div className='app'>
        <Header />
        <section className='main'>
          <LevelButton current={level} onChangeLevel={this.handleChangeLevel} />
          <Table level={level} onChangeShowSidebar={this.handleChangeShowSidebar} />
        </section>
        <Sidebar show={showSidebar} />
      </div>
    );
  }
}

export default App;
