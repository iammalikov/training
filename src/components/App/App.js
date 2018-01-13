import React, { Component } from 'react';
import Header from '../Header/Header';
import LevelButton from '../LevelButton/LevelButton';
import Table from '../Table/Table';
import Sidebar from '../Sidebar/Sidebar';

class App extends Component {
  static defaultProps = {
    level: 0,
    showSidebar: false,
    exercise: 'pushups'
  }

  constructor(props) {
    super(props);

    this.state = {
      level: this.props.level,
      showSidebar: this.props.showSidebar,
      exercise: this.props.exercise
    }

    this.handleChangeLevel = this.handleChangeLevel.bind(this);
    this.handleChangeShowSidebar = this.handleChangeShowSidebar.bind(this);
  }

  handleChangeLevel(level) {
    this.setState({
      level: level
    });
  }

  handleChangeShowSidebar(e) {
    const showStatus = this.state.showSidebar;

    if (e.target.classList.contains('table__cell_exercise')) {
      return this.setState({
        showSidebar: !showStatus,
        exercise: e.target.id
      });
    }

    this.setState({
      showSidebar: !showStatus
    });
  }

  render() {
    const { level, showSidebar, exercise } = this.state;

    return (
      <React.Fragment>
        <Header />
        <section className='main'>
          <LevelButton current={level} onChangeLevel={this.handleChangeLevel} />
          <Table level={level} onChangeShowSidebar={this.handleChangeShowSidebar} />
          <div className="about">
            <p className="about__item">Сводная таблица упражнений из&nbsp;книги Пола Уэйда&nbsp;&mdash; <a className="link" href="https://www.ozon.ru/context/detail/id/142431436/">&laquo;Convict Conditioning&raquo;</a>.</p>
          </div>
        </section>
        <Sidebar show={showSidebar} level={level} exercise={exercise} onChangeShowSidebar={this.handleChangeShowSidebar} />
      </React.Fragment>
    );
  }
}

export default App;
