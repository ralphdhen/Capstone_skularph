import React from "react";
import "./components/contactusformcomponents/contactusform.css";
import contactusformheader from "./components/contactusformcomponents/contactusformheader.js";

function App() {
  return (
    <div>
      <Title>Contact US: Let's Start Your Journey</Title>
      <p className="are-you-ready-to-emb">
        Are you ready to embark on your journey towards a brighter future? We're here to help you take that crucial
        step. If you have any questions, suggestions, or feedback, don't hesitate to reach out to our dedicated support
        team. Together, let's turn your aspirations into achievements.
      </p>
      <div className="group-18">
        <div className="flex-row">
          <div className="flex-col roboto-thin-white-18px">
            <div className="overlap-group-1">
              <div className="first-name">First name</div>
            </div>
          </div>
          <div className="email">Email</div>
        </div>
      </div>
      <div className="overlap-group">
        <div className="last-name roboto-thin-white-18px">Last name</div>
      </div>
      <div className="overlap-group">
        <div className="phone roboto-thin-white-18px">Phone
        </div>
        </div>
        <div className="overlap-group1">
        <div className="message roboto-thin-white-18px">Message
        </div>
        </div>
        <div className="overlap-group3">
            <div className="place roboto-medium-white-18px">Send
            </div>
        </div>
    </div>

  );
}

function Title(props) {
  const { children } = props;

  return (
    <h1 className="title roboto-medium-white-35px">{children}</h1>
  );
}

export default App;
