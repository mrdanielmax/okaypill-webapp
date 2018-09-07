import React, { Component } from 'react';
import '../css/Okay.css';
import MailchimpSubscribe from "react-mailchimp-subscribe"
import OkayPerson from "../images/okay_person2.jpg"
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
    <div className="MCForm">
      <p className="MCFormTitle">Newsletter</p>
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
        ref={node => (name = node)}
        type="hidden"
      />
      <input
        className="MCEmailText"
        ref={node => (email = node)}
        type="email"
        placeholder="Your email"
      /><br/>
      <button className="MainButton" onClick={submit}>
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
    console.log("hey");
    this.props.emailSubmitted();
    event.preventDefault();
  }

  render() {
    const url =
     "https://okaypill.us19.list-manage.com/subscribe/post?u=09a07f9bbe279b6387b7eb31b&id=f33cce7358";

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

          <div className="MissionSection">
            <div className="MissionTitle">
              Our Mission
            </div>
            <div className="MissionBody">
              <p className="MissionText">Okay pill is dedicated to creating model citizens and maintaining order. Model citizens are responsible, functional and stable at all times. If you know anyone who suffers from anxiety, depression, or other unwanted emotions, recommend the okay pill or report them to us. We are constantly monitoring our customers at all times as we believe a state of constant observation is the key to an okay populace. </p>

              <div className="OkayBottomSection">
                <a href="https://www.kickstarter.com/" className="MainButton">Kickstarter</a><br/>

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

               <div className="instaIcon">
                <a className="instaIconClass" href="https://www.instagram.com/okaypill/"><i className="fab fa-instagram fa-3x"></i></a>
               </div>
              </div>
            </div>
          </div>
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
