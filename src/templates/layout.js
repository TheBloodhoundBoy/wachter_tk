import React from 'react';
import 'prismjs/themes/prism.css';

import '../global-styles';
import userConfig from '../../config';

import Header from '../components/Header';
import GlobalStyle from '../global-styles';

import * as THREE from 'three';
import CLOUDS from 'vanta/dist/vanta.clouds.min'

class Template extends React.Component {
  constructor() {
    super()
    this.vantaRef = React.createRef()
  }
  componentDidMount() {
    this.vantaEffect = CLOUDS({
      el: this.vantaRef.current,
      THREE: THREE
    })
  }
  componentWillUnmount() {
    if (this.vantaEffect) this.vantaEffect.destroy()
  }
  render() {
    const { children } = this.props;
    return (
      < div id="vantajs" ref={this.vantaRef} style={{marginTop: -50, paddingTop: 50, marginBottom: -50, paddingBottom: 50}}>
        <GlobalStyle />
        <Header config={userConfig} />
        {children}
      </div>
    );
  }
}

export default Template;
