import React, { Component } from 'react';
import Paper from 'material-ui/lib/paper';
import FontIcon from 'material-ui/lib/font-icon';
import Colors from 'material-ui/lib/styles/colors';


const style = {
  height: 150,
  width: 150,
  margin: '25',
  textAlign: 'center',
  alignItems: 'middle',
  display: 'table'
};
const styletext = {
    display: 'table-cell',
   verticalAlign: 'middle',

};
const styleValue = {
  display: 'inline-block',
  fontSize: 40,
  bold: true,
   verticalAlign: 'middle',

};



export default class PaperExampleCircle extends React.Component {
  static propTypes = {
    label: React.PropTypes.string,
    icon: React.PropTypes.string,
    value: React.PropTypes.float
  };


  static defaultProps = {
    label: 'phone',
    icon: 'phone',
    value : 0.0
  };

  render() {
    return (
      <Paper style={style} zDepth={5} circle={true}>


      <span style={styletext}>
      <text style={styleValue}>
      {this.props.value}
      </text>
      <br/>
      {this.props.label}
      <br/>
      <FontIcon className="material-icons">{this.props.icon}</FontIcon>
      </span>


      </Paper>

    );
  }
}
