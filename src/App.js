import React from 'react';
import logo from './logo.svg';
import { Dropdown } from 'react-bootstrap';
import Background from './data/img.jpg';
import './App.css';
import firebase from 'firebase/app';
import 'firebase/database';
import 'bootstrap/dist/css/bootstrap.min.css';

var sectionStyle = {
  width: "100%",
  height: "2000px",
  backgroundImage: `url(${Background})`
};



const App = () =>  (
  <div>
    <section style={ sectionStyle }>
    <h1 align="center"> On The Go : Our Travel Expert </h1>
    
    <Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
    Dropdown Button
  </Dropdown.Toggle>
  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
      </section>
  </div>
);

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
