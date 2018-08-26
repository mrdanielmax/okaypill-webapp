import React, { Component } from 'react';
import '../css/Okay.css';
import MailchimpSubscribe from "react-mailchimp-subscribe"

// a basic form
const CustomForm = ({ status, message, onValidated }) => {
  let email, name;
  const submit = () =>
    email &&
    name &&
    email.value.indexOf("@") > -1 &&
    onValidated({
      EMAIL: email.value,
      NAME: name.value
    });

  return (
    <div
      style={{
        background: "#efefef",
        borderRadius: 2,
        padding: 10,
        display: "inline-block"
      }}
    >
      {status === "sending" && <div style={{ color: "blue" }}>sending...</div>}
      {status === "error" && (
        <div
          style={{ color: "red" }}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      {status === "success" && (
        <div
          style={{ color: "green" }}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      <input
        style={{ fontSize: "2em", padding: 5 }}
        ref={node => (name = node)}
        type="text"
        placeholder="Your name"
      />
      <br />
      <input
        style={{ fontSize: "2em", padding: 5 }}
        ref={node => (email = node)}
        type="email"
        placeholder="Your email"
      />
      <br />
      <button style={{ fontSize: "2em", padding: 5 }} onClick={submit}>
        Submit
      </button>
    </div>
  );
};

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
    const url =
     "https://okaypill.us19.list-manage.com/subscribe/post?u=09a07f9bbe279b6387b7eb31b&id=f33cce7358";

    <MailchimpSubscribe
      url={url}
      render={({ subscribe, status, message }) => (
        <CustomForm
          status={status}
          message={message}
          onValidated={formData => subscribe(formData)}
          onSubmit={this.handleSubmit}
        />
      )}
    />

    return (
      <div className="Okay">
          <MailchimpSubscribe
           url={url}
           render={({ subscribe, status, message }) => (
             <CustomForm
               status={status}
               message={message}
               onValidated={formData => subscribe(formData)}
             />
           )}
         />


      </div>
    );

    /*
    <form onSubmit={this.handleSubmit}>
      <label>Email:</label>
      <input type="email" name="email" placeholder="email address" value={this.state.inputvalue} onChange={this.handleChange}/>
      <input type="submit" value="Submit"  onClick = {this.props.emailSubmitted}/>
    </form>*/
  }
}

export default Okay;
