import React from 'react';
import { useEffect, useState } from 'react';
import logo from './logo.svg';
import { Dropdown,FormGroup,Form } from 'react-bootstrap';
import Background from './data/img.jpg';
import './App.css';
import firebase from 'firebase/app';
import 'firebase/database';
import 'bootstrap/dist/css/bootstrap.min.css';

var sectionStyle = {
  width: "100%",
  height: "1000px",
  margin: "0",
  backgroundImage: `url(${Background})`
};



const form1 = () => ( 

  // return(
<div>
  <h1>Test</h1>
<Form>
  {['checkbox', 'radio'].map(type => (
    <div key={type} className="mb-3">
      <Form.Check type={type} id={`check-api-${type}`}>
        <Form.Check.Input type={type} isValid />
        <Form.Check.Label>{`Custom api ${type}`}</Form.Check.Label>
        <Form.Control.Feedback type="valid">You did it!</Form.Control.Feedback>
      </Form.Check>
    </div>
  ))}
</Form>
</div>  
  
);

const App = () => {

  const [data, setData] = useState(null);

return(
  <div>
    <section style={ sectionStyle }>
    <h1 align="center"> On The Go : Our Travel Expert </h1>
    <br />
    <br />
    <Dropdown align="center" >
  <Dropdown.Toggle variant="secondary" id="dropdown-basic">
    Country
  </Dropdown.Toggle>
  <Dropdown.Menu>
    <Dropdown.Item onClick={() => form1()}>Singapore</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Slovakia</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Slovenia</Dropdown.Item>
    <Dropdown.Item href="#/action-3">SriLanka</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
{console.log({data})}

<div>
<Form>
  {['checkbox', 'radio'].map(type => (
    <div key={type} className="mb-3">
      <Form.Check type={type} id={`check-api-${type}`}>
        <Form.Check.Input type={type} isValid />
        <Form.Check.Label>{`Custom api ${type}`}</Form.Check.Label>
        <Form.Control.Feedback type="valid">You did it!</Form.Control.Feedback>
      </Form.Check>
    </div>
  ))}
</Form>
</div>  

      </section>
  </div>
);

}
const firebaseConfig = {
  apiKey: "AIzaSyBdTkdXSYAUdiiXAFlVaaAgJ_QQaZfdyHI",
  authDomain: "onthego-101.firebaseapp.com",
  databaseURL: "https://onthego-101.firebaseio.com",
  projectId: "onthego-101",
  storageBucket: "onthego-101.appspot.com",
  messagingSenderId: "768309926661",
  appId: "1:768309926661:web:7ff6e9a9e622d97c3f756c",
  measurementId: "G-8RNRCGX4PZ"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.database().ref();

export {db};
export default App;
