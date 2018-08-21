import React, { Component } from 'react';
import '../css/Main.css';
import Cookies from 'universal-cookie';
import Okay from './Okay';
import NotOkay from './NotOkay';

const cookies = new Cookies();

class Main extends Component {
  //
  // constructor(props) {
  //   super(props);
  //   this.state = { MainPage : 'okay'};
  // }

  render() {

    if(cookies.get('visited')){
      return (
        <NotOkay/>
      );
    } else {
      return (
        <Okay/>
      );
    }
  }
}

export default Main;
