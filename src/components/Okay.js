import React, { Component } from 'react';
import '../css/Okay.css';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

class Okay extends Component {
  constructor (props) {
    super(props);
    this.state = {
        inputvalue: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange (event) {
    this.setState({
        inputvalue: event.target.value
    })

    console.log(event.target.value);
  }

  handleSubmit (event) {
    console.log('Form value: ' + this.state.inputvalue);
    cookies.set('visited', 'true', { path: '/' });
    event.preventDefault();
  }

  render() {

    return (
      <div className="Okay">
        <form onSubmit={this.handleSubmit}>
          <label>Email:</label>
          <input type="email" name="email" placeholder="email address" value={this.state.inputvalue} onChange={this.handleChange}/>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Okay;
