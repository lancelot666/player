import React, { Component } from 'react';
import './App.css';

import { connect } from 'react-redux'

class App extends Component {
  constructor(props){
    super(props);
    console.log('props:',props)
  }
  render() {
    return (
      <div className="App">
      </div>
    );
  }
}

function mapState(state) {
  var info = state.AppData;
  return {
      mapName:info.appName//对应本组件props需要的属性products
  }
}
function mapDsipatch(dispatch){
  return{
  }
}

export default connect(mapState,mapDsipatch)(App);
