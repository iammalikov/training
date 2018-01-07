import React, { Component } from 'react';
import classNames from 'classnames';

class Sidebar extends Component {
  static defaultProps = {
    show: false
  }

  constructor(props) {
    super(props);

    this.state = {
      show: this.props.show
    };

    this.handleShowChanges = this.handleShowChanges.bind(this);
  }

  handleShowChanges() {
    const showStatus = this.state.show;

    this.setState({
      show: !showStatus
    });
  }

  render() {
    console.log('render Sidebar = ' + this.state.show);

    const {show} = this.state;
    const className = classNames('sidebar', {
      'sidebar_show': show
    });

    return (
      <aside className={className}>
        <div className="sidebar__inner">
          <button onClick={this.handleShowChanges}>close</button>
          <h2 className="sidebar__title">Отжимания в&nbsp;стойке на&nbsp;руках</h2>
          <h3 className="sidebar__subtitle">стойка на голове у стены</h3>
          <img className="sidebar__img" src={process.env.PUBLIC_URL + '/assets/photo/pushups/1.jpg'} alt='стойка на голове у стены' />
        </div>
      </aside>
    );
  }
}

export default Sidebar;
