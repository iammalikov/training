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
    const title = data[level][exercise].title;
    const subtitle = data[level][exercise].name;
    const className = classNames('sidebar', {
      'sidebar_show': show
    });

    return (
      <aside className={className}>
        <div className="sidebar__inner">
          <div className="sidebar__close">
            <button className="close-button" onClick={this.props.onChangeShowSidebar}>
              <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 16 16">
                <path fill="current" d="M6.586 8L.222 1.636 1.636.221 8 6.586 14.365.22l1.413 1.415L9.414 8l6.364 6.364-1.413 1.414L8 9.414l-6.364 6.364-1.414-1.414L6.586 8z"/>
              </svg>
            </button>
          </div>
          <h2 className="sidebar__title" dangerouslySetInnerHTML={{__html: title}} />
          <h3 className="sidebar__subtitle" dangerouslySetInnerHTML={{__html: subtitle}} />
          <img className="sidebar__img" src={process.env.PUBLIC_URL + `/assets/photo/${exercise}/${level + 1}.jpg`} alt={subtitle} />
        </div>
      </aside>
    );
  }
}

export default Sidebar;
