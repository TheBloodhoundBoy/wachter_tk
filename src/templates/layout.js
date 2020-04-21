import React from 'react';
import 'prismjs/themes/prism.css';

import '../global-styles';
import userConfig from '../../config';

import Header from '../components/Header';
import GlobalStyle from '../global-styles';

import * as THREE from 'three';
import WAVES from 'vanta/dist/vanta.waves.min'

class Template extends React.Component {
  constructor() {
    super()
    this.vantaRef = React.createRef()
  }
  componentDidMount() {
    this.vantaEffect = WAVES({
      el: this.vantaRef.current,
      color: 0x000000,
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
