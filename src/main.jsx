import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const name = "Teodor Popa";
const first_page = 2015;

{/*const demo = (
<div>
  <h1>Hello, my name is {name}</h1>
  <p>I have {2024 - first_page} years of bulding websites.</p>
</div>
);.*/}

const Box = (props) => {
  return (
    <div>
      <p>Name: {props.name}</p>
      <p>Title: {props.title}</p>
      <p>Age: {props.age}</p>
    </div>
  );
};

const Demo = () => {
  return ( <div>
  <h1>Hello, my name is {name}</h1>
  <p>I have {2024 - first_page} years of bulding websites.</p>
  <Box name ="Teodor" title="Student" age="28" />
  <Box name ="Dana" title="Student" age="23"/>
  <Box name ="Marius" title="Junior Web Dev" age="25" />
</div>
);
};

ReactDOM.createRoot(document.getElementById('root')).render(<React.StrictMode>
  <Demo/>
</React.StrictMode>
)



