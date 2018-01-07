import React, {Component} from 'react';
import classNames from 'classnames';

class LevelButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      current: this.props.current
     };
  }

  handleClick(e) {
    const newLevel = +e.target.id;

    this.setState({
      current: newLevel
    });

    this.props.onChangeLevel(newLevel);
  }

  renderButton(value) {
    const {current} = this.state;
    const className = classNames('level-button', {
      'level-button_active': current === value
    });

    return (
      <button className={className} onClick={(e) => this.handleClick(e)} key={value} id={value}>{++value}</button>
    );
  }

  render() {
    const listButton = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    return (
      <div className="level-buttons">
        {listButton.map(item => this.renderButton(item))}
      </div>
    );
  }
}

export default LevelButton;
