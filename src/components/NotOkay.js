import React, { Component } from 'react';
// import '../css/NotOkay.css';
import '../css/Okay.css';

import OkayPerson from "../images/okay_person2.jpg"
import BlankShirt from "../images/blank_shirt.png"

class NotOkay extends Component {
  render() {

    return (
      <div className="Okay">
        <img className='OkayPersonImage' alt='Okay Pill' src={OkayPerson} />
          <div className="OkayRow">
          <div className="OkayColumn">
            <div className="OkayColumnInner">
              Anxious Pill
              <div className="OkayColImg">
                <img className='OkayShirtImage' alt='Okay Pill' src={BlankShirt} />
              </div>
              There&#39;s a social contract to always be calm or level headed but you never know what someone is dealing with on the inside. The shirt has the word “anxious” printed on the inside of the shirt, completely invisible from the outside of the shirt. This mirrors the experience of working and living in a world where it&#39;s taboo to openly express your anxiety.
            </div>
          </div>
            <div className="OkayColumn">
              <div className="OkayColumnInner">
                Not Okay Pill
                <div className="OkayColImg">
                  <img className='OkayShirtImage' alt='Okay Pill' src={BlankShirt} />
                </div>
                There&#39;s a social contract to always appear good or okay but you never know what someone is dealing with on the inside. The shirt has the words “not okay” printed on the inside of the shirt, completely invisible from the outside of the shirt. This mirrors the experience of working and living in a world where you&#39;re expected to say that you&#39;re okay even when you&#39;re not.
              </div>
            </div>
            <div className="OkayColumn">
              <div className="OkayColumnInner">
                Depression Pill
                <div className="OkayColImg">
                  <img className='OkayShirtImage' alt='Okay Pill' src={BlankShirt} />
                </div>
                There&#39;s a social contract to always appear content or positive but you never know what someone is dealing with on the inside. The shirt has the word “depressed” printed on the inside of the shirt, completely invisible from the outside of the shirt. This mirrors the experience of working and living in a world where it&#39;s taboo to feel apathetic and melancholy.
              </div>
            </div>
          </div>

          <p className="OkayBig">Take your Okay Pill</p>

          <div className="MissionSection">
            <div className="MissionTitle">
              Our Real Mission
            </div>
            <div className="MissionBody">
              <p className="MissionText">The goal of okay pill is to create clothing with designs that become conversation pieces for mental health. By using non conventional designs that mirror mental health experiences, we aim to integrate conversations about mental health into people&#39;s day to day lives. Mental health is a nuanced issue and our aim is to stay true to that by designing clothes in an equally nuanced way. We don&#39;t support the fetishization of mental health issues or the idea that people should have to share their experience with everyone. The clothes can be used to spark conversation or just to complete your look. </p>

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

export default NotOkay;
