import React, { Component } from 'react';
import '../css/Okay.css';

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
  }

  handleSubmit (event) {
    event.preventDefault();
  }

  render() {

    return (
      <div className="Okay">
        <form onSubmit={this.handleSubmit}>
          <label>Email:</label>
          <input type="email" name="email" placeholder="email address" value={this.state.inputvalue} onChange={this.handleChange}/>
          <input type="submit" value="Submit"  onClick = {this.props.emailSubmitted}/>
        </form>
      </div>
    );
  }
}

export default Okay;
