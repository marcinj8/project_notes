import React from 'react';
import { connect } from 'react-redux';

import * as actions from './Data/Store/Actions';

import './App.css';
import Layout from './Layout';

function App(props) {
  props.getData()
  return (
    <React.Fragment>
      <Layout />
    </React.Fragment>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    getData: () => dispatch(actions.getData())
  }
}
export default connect(null, mapDispatchToProps)(App);