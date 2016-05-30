import React, { Component } from 'react';

import FontIcon from 'material-ui/lib/font-icon';
import Colors from 'material-ui/lib/styles/colors';

import RaisedButton from 'material-ui/lib/raised-button';

//import MobileTearSheet from '../../../MobileTearSheet';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import ActionGrade from 'material-ui/lib/svg-icons/action/grade';
import ActionInfo from 'material-ui/lib/svg-icons/action/info';
import ContentInbox from 'material-ui/lib/svg-icons/content/inbox';
import ContentDrafts from 'material-ui/lib/svg-icons/content/drafts';
import ContentSend from 'material-ui/lib/svg-icons/content/send';
import Divider from 'material-ui/lib/divider';

import PaperExampleCircle from '../Paper'

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



export default class Dashboard extends React.Component {
  static propTypes = {
    free : React.PropTypes.array,
    connected: React.PropTypes.bool,
    conn: React.PropTypes.function,
  };


  static defaultProps = {
    free: [],
    connected: false
  };

  connect = (id) => {
    console.log("calling free bubbles ");
    if (this.props.connected){
      //call disconnect
    }
    else{
        this.props.conn(id);
    }

    //this.props.actions.connectBubble(null);
  };
  checkList = () => {
    var a = (this.props.free.length === 0)? false : true;
    var b = !this.props.connected;
    return !(a && b);
  };

  render() {
    return (
      <div>
      {this.checkList() ? <RaisedButton label="Get Bubbles" onTouchEnd={this.connect.bind(this, null)} Primary={true}  /> :
      <List>
      {this.props.free.map(tile => (
        <ListItem primaryText={tile.id}
          key={tile.id} onTouchEnd={this.connect.bind(this, tile.id)}>
        </ListItem>
      ))}



      </List>}

      <Divider />
      <List>
      <ListItem key="tekstii" primaryText={"connecteXXX " + this.props.connected}/>

      </List>
</div>

    );
  }
}
