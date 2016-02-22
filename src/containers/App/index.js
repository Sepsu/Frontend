import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';

//Needed for onTouchTap
//Can go away when react 1.0 release
//Check this repo:
//https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

/* global styles for app */
import './styles/app.scss';

/* application components */
import { Header } from 'components/Header';
import { Footer } from 'components/Footer';

export class App extends Component {
  static propTypes = {
    children: React.PropTypes.any,
  };

  render() {
    return (
      <section>
        {this.props.children}
        <Footer />
      </section>
    );
  }
}
