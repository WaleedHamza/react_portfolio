import React from 'react';
import "./email.css"
import Particles from 'react-particles-js';


class EmailInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    // alert('A message was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div className="wrapper">
       <Particles></Particles>

      <div className="contactForm">
      <h1>Email Me</h1>
        <div className="formDiv">
          <form method="POST" action="https://formspree.io/hamzah.waleed@gmail.com" >
            <input className="emailInput" type="email" name="email" placeholder="Your email"/>
            <textarea className="textInput" name="message" placeholder="Your message"></textarea>
            <input className="sendBtn" type="submit" value="Send" />
          </form>
        </div>
      </div>
      </div>
    );
  }
}

export default EmailInput;