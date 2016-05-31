import React, { Component } from 'react';
import DocumentMeta from 'react-document-meta';

/* components */
import FormItem from 'components/FormItem';
import { Toggle } from 'material-ui/lib';
import Tabs from 'material-ui/lib/tabs/tabs';
import Tab from 'material-ui/lib/tabs/tab';
import ColorPicker from 'react-color';
import Slider from 'material-ui/lib/slider';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ChartistGraph from 'react-chartist';

import FontIcon from 'material-ui/lib/font-icon';

import RaisedButton from 'material-ui/lib/raised-button';
import CircularProgress from 'material-ui/lib/circular-progress';

import Dashboard from 'components/Dashboard'
import GridListOwn from 'components/Grid';
/* actions */
import * as actionCreators from 'actions/preferences';

const SLIDER_DEBOUNCE = 300;

const metaData = {
  title: 'eloSeed',
  description: 'Start you project easy and fast with modern tools',
  canonical: 'http://example.com/path/to/page',
  meta: {
    charset: 'utf-8',
    name: {
      keywords: 'react,meta,document,html,tags',
    },
  },
};
const style = {

};
function mapStateToProps(state) {
  return Object.assign({}, state.preferences, {
    graph: {
      series: [ state.preferences.temps ]
    }
  });
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actionCreators, dispatch) };
}



class Home extends Component {

  constructor() {
    super();
    this.setBrightness = _.debounce(this.setBrightness, SLIDER_DEBOUNCE);
    this.setColor = _.debounce(this.setColor, SLIDER_DEBOUNCE);
  }

  toggleLights = (e) => {
    this.props.actions.setLights(!this.props.lights);
  };
  setBrightness = (e) => {
    this.props.actions.setBrightness(this.refs.brightness.state.value);
  };
  setColor = (color) => {
    this.props.actions.setColor(color.rgb);
    console.log(color.rgb);
  };

  render() {
    return (
      <section>
        <DocumentMeta {...metaData} />
        <Tabs>

        <Tab
        label="Sensors"
        icon={<FontIcon className="material-icons">multiline_chart</FontIcon>}>

        <Tabs>
        <Tab
        label="Environment"
        icon={<FontIcon className="material-icons">explore</FontIcon>}>
          <GridListOwn/>

        </Tab>
        <Tab
        label="Body"
        icon={<FontIcon className="material-icons">accessibility</FontIcon>}>


        <FormItem label="Temperature" {...this.props}>{_.last(this.props.temps)}&deg;C</FormItem>
        <div className="chart-container">
          <ChartistGraph data={this.props.graph} type="Line" />
        </div>


        </Tab>
        </Tabs>


        </Tab>


          <Tab
          label="Dashboard"
          icon={<FontIcon className="material-icons">home</FontIcon>}>
          <Dashboard connected={this.props.connected} conn={this.props.actions.connectBubble} free={this.props.free}/>

          </Tab>

          <Tab
          label="Actuators"
          icon={<FontIcon className="material-icons">settings_remote</FontIcon>}>
          <Tabs>
          <Tab label="Lights"
          icon={<FontIcon className="material-icons">highlight</FontIcon>}>
            <Toggle className="form-item" label="Lights" onToggle={this.toggleLights} toggled={this.props.lights} />
            <FormItem label="Brightness" inline={false}>
              <Slider ref="brightness" value={this.props.brightness} onChange={this.setBrightness} />
            </FormItem>
            <FormItem label="Color" inline={false}>
              <ColorPicker type="slider" color={this.props.color} onChange={this.setColor} />
            </FormItem>
          </Tab>
          <Tab label="Fan"
          icon={<FontIcon className="material-icons">toys</FontIcon>}>

            <div>
<RaisedButton label="OFF" disabled={true} style={style} />
<RaisedButton label="QUIET" secondary={true} style={style} />
<RaisedButton label="NORMAL" secondary={true} style={style} />
<RaisedButton label="FULL" secondary={true} style={style} />
</div>
          </Tab>


          </Tabs>
          </Tab>

        </Tabs>
      </section>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
