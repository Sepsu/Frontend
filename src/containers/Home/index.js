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
  };

  render() {
    return (
      <section>
        <DocumentMeta {...metaData} />
        <Tabs>
          <Tab label="Dashboard">
            <FormItem label="Temperature" {...this.props}>{_.last(this.props.temps)}&deg;C</FormItem>
            <div className="chart-container">
              <ChartistGraph data={this.props.graph} type="Line" />
            </div>
          </Tab>
          <Tab label="Lights">
            <Toggle className="form-item" label="Lights" onToggle={this.toggleLights} toggled={this.props.lights} />
            <FormItem label="Brightness" inline={false}>
              <Slider ref="brightness" value={this.props.brightness} onChange={this.setBrightness} />
            </FormItem>
            <FormItem label="Color" inline={false}>
              <ColorPicker type="slider" color={this.props.color} onChange={this.setColor} />
            </FormItem>
          </Tab>
          <Tab label="Motion">
            motion low/med/hi<br />
            <div className="chart-container">
              <ChartistGraph data={this.props.graph} type="Line" />
            </div>
          </Tab>
        </Tabs>
      </section>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
