import React, { Component } from 'react';
import data from '../../assets/data/data';
import classNames from 'classnames';

class Table extends Component {
  // sublevelsClassName(index) {
  //   return classNames('table__cell', {
  //     'table__cell_low': index === 0,
  //     'table__cell_medium': index === 1,
  //     'table__cell_high': index === 2,
  //   });
  // }

  renderSublevels(dataSublevels) {
    return (
      dataSublevels.map((value, index) =>
        <div className='table__cell table__cell_approach' key={index}>
          {value}
        </div>
      )
    );
  }

  renderCells(dataCell) {
    return (
      <React.Fragment>
        <div className='table__cell table__cell_exercise' dangerouslySetInnerHTML={{__html: dataCell.title}} />
        {this.renderSublevels(dataCell.sublevels)}
      </React.Fragment>
    );
  }

  renderRows(dataRows) {
    return Object.keys(dataRows).map(row =>
      <div className='table__row' key={row}>
        {this.renderCells(dataRows[row])}
      </div>
    );
  }

  render() {
    const { level } = this.props;
    const dataRows = data[level];
    const rows = this.renderRows(dataRows);

    return (
      <div className='table'>
        <div className='table__head'>
          <div className='table__row'>
            <div className='table__cell'></div>
            <div className='table__cell'>Начальный</div>
            <div className='table__cell'>Продвинутый</div>
            <div className='table__cell'>Условие перехода</div>
          </div>
        </div>
        <div className='table__body'>
          {rows}
        </div>
      </div>
    );
  }
}

export default Table;