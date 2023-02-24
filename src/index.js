import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

class Item extends React.Component{
  render (){
    return <div className="item">
    <b>Name:</b> {this.props.name} <br />
    <b>Price:</b> ${this.props.price}
    </div>;
  }
}

function Fruit(){
  return <div>
    <Item name="Banana" price="4"/>
    <Item name="Orange" price="5"/>
    <Item name="Strawberry" price="10"/>
  </div>
}

const el = <Fruit/>

root.render(el)



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
