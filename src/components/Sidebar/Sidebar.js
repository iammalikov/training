import React, { Component } from 'react';
import classNames from 'classnames';
import data from '../../assets/data/data';

class Sidebar extends Component {
  constructor(props) {
    super(props);

    this.handleShowChanges = this.handleShowChanges.bind(this);
  }

  handleShowChanges() {
    const showStatus = this.state.show;

    this.setState({
      show: !showStatus
    });
  }

  render() {
    const { show, level, exercise } = this.props;
    console.log(level, exercise);

    const title = data[level][exercise].title;
    const subtitle = data[level][exercise].name;
    const className = classNames('sidebar', {
      'sidebar_show': show
    });

    return (
      <aside className={className}>
        <div className="sidebar__inner">
          <button onClick={this.props.onChangeShowSidebar}>close</button>
          <h2 className="sidebar__title" dangerouslySetInnerHTML={{__html: title}} />
          <h3 className="sidebar__subtitle" dangerouslySetInnerHTML={{__html: subtitle}} />
          <img className="sidebar__img" src={process.env.PUBLIC_URL + `/assets/photo/${exercise}/${level + 1}.jpg`} alt={subtitle} />
        </div>
      </aside>
    );
  }
}

export default Sidebar;
