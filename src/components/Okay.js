import React, { Component } from 'react';
import '../css/Okay.css';
import OkayPerson from "../images/okay_person2.jpg"
import BlankShirt from "../images/blank_shirt.png"

class Okay extends Component {
  render() {
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
                <a href="https://www.kickstarter.com/" className="MainButton">Kickstarter</a>

                <a href="https://mailchi.mp/4075fa860934/okaypill" target="_blank" className="MainButton" onClick = {() => { this.props.emailSubmitted() }}>Newsletter</a><br/>

               <div className="instaIcon">
                <a className="instaIconClass" href="https://www.instagram.com/okaypill/"><i className="fab fa-instagram fa-3x"></i></a>
               </div>
              </div>
            </div>
          </div>
      </div>
    );
  }
}

export default Okay;
