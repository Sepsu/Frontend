import React, { Component } from 'react';
import { styles } from './FormItem.scss';

export default class FormItem extends React.Component {
  static propTypes = {
    label: React.PropTypes.string,
    inline: React.PropTypes.bool
  };

  static defaultProps = {
    label: '',
    inline: true
  };

  render() {
    let klass = this.props.inline ? 'form-item inline' : 'form-item';
    return (
      <div className={klass}>
        <div className='form-item-label'>{this.props.label}</div>
        <div className='form-item-content'>{this.props.children}</div>
      </div>
    );
  }
}


