import React from 'react';
import { useEffect, useState } from 'react';
import logo from './logo.svg';
import { Dropdown,FormGroup,Form } from 'react-bootstrap';
import Background from './data/img.jpg';
import './App.css';
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
export default App;
