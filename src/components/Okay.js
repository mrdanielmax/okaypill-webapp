import React, { Component } from 'react';
import '../css/Okay.css';
import MailchimpSubscribe from "react-mailchimp-subscribe"
import OkayPerson from "../images/okay_person.JPG"
import BlankShirt from "../images/blank_shirt.png"

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

        <img className='OkayPersonImage' alt='Okay Pill' src={OkayPerson} />
          <div className="OkayRow">
          <div className="OkayColumn">
            <div className="OkayColumnInner">
              Calm Pill
              <div className="OkayColImg">
                <img className='OkayShirtImage' alt='Okay Pill' src={BlankShirt} />
              </div>
              The calm pill is for those who aren&#39;t anxious. Show the world that “not over thinking it” is enough. Model citizens are calm. Be chill, relaxed and calm. Take your calm pill.
            </div>
          </div>
            <div className="OkayColumn">
              <div className="OkayColumnInner">
                Okay Pill
                <div className="OkayColImg">
                  <img className='OkayShirtImage' alt='Okay Pill' src={BlankShirt} />
                </div>
                The okay pill is for those who aren&#39;t not okay. Show the world that “it could be worse” is true. Model citizens are okay. Be functional, responsible and okay. Take your okay pill.
              </div>
            </div>
            <div className="OkayColumn">
              <div className="OkayColumnInner">
                Happy Pill
                <div className="OkayColImg">
                  <img className='OkayShirtImage' alt='Okay Pill' src={BlankShirt} />
                </div>
                The happy pill is for those who aren&#39;t depressed. Show the world that “getting out more” is enough. Model citizens are happy. Be carefree, lighthearted and happy. Take your happy pill.
              </div>
            </div>
          </div>

          <p className="OkayBig">Take your Okay Pill</p>


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

         <p>Instagram</p>
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
