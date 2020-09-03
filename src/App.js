import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

var person = {
  name: "Ashraf",
  job: "Singer"
}
var person2 = {
  name: "Imran",
  job: "Singer"
}
var class_style = {
  color: 'red',
  backgroundColor: 'yellow'
}

function App() {
  const cricketers = ['Shakib', 'Tamim', 'Mominul', 'Mahmudullah']
  const products = [
    {name: 'Photoshop', price: '$90.99'},
    {name:'Illustrator', price:'$80.50'},
    {name:'PDF', price:'$30.50'},
    {name:'Premiere', price:'$50.50'},
  ]
  const productNames = products.map(product => product.name)
  console.log(productNames)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edited done <code>src/App.js</code> and save to reload.
        </p>
        <h1 style={class_style}>My Heading: {person.name + " " + person.job} </h1>
        <h2 style={{ color: 'cyan', backgroundColor: 'white' }}>My Heading2: {person2.name + " " + person2.job} </h2>
        <ul>
          {
            cricketers.map(cricketer => <li>{cricketer}</li>)
          }
          {
            products.map(product => <li>{product.name}</li>)
          }
        </ul>
        <Users></Users>
        <Counter></Counter>
        <p> My first paragraph</p>
        <p>I am a learning React.</p>
        {
          products.map(pd => <Product product = {pd}></Product>)
        }
        <Product product={products[0]}></Product>
        <Product product={products[1]}></Product>
        <Person name="Shakib Al Hasan" wife="Shishir" food="Fuska "></Person>
        <Person name="Mominul Haque"></Person>
        <Person name="Tamim Iqbal" wife="Ayesha Siddika"></Person>
        <Person name="Hamim Iqbal"></Person>
        <Person name={cricketers[0]}></Person>
      </header>
    </div>
  );
}

function Product(props){
  const productStyle ={
    border: '1px solid gray',
    borderRadius: '5px',
    backgroundColor: 'lightgray',
    width: '300px',
    height: '250px',
    float: 'left'
  }
  const {name, price} = props.product
  console.log('products',props)
  return (
  <div style={productStyle}>
    <h2>Name:{name}</h2>
   <h1>{price}</h1>
    <button>Buy Now</button>
  </div>
  );
}

function Users(){
  const [users, setUsers] = useState([])
  useEffect(()=>{
    console.log('Calling Effect')
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => setUsers(data))
  },[])
  return (
     <div>
       <h1>Dynamic users: {users.length}</h1>
      <ul>
        {
          users.map(user => <li>{user.name}</li>)
        }
      </ul>
    </div>
  );
}

function Counter(){
  const [count, setCount] = useState(0)
  const handleIncrease = () =>{
    setCount(count + 1)
    // const newCount = count + 1
    // setCount(newCount)
  } 
  const handleDecrease = () =>{
    if(count > 0){
      setCount(count - 1)
      // const newCount = count - 1
      // setCount(newCount)
    } 
  } 
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick ={handleIncrease}>Increase</button><button onClick ={handleDecrease}>Decrease</button>
    </div>
   
  
  );
}

function Person(props) {
  console.log(props)
  return (
    <div style={{ border: '2px solid red', margin: '10px' }}>
      <h1>Name: {props.name}</h1>
      <h3>Cricketer</h3>
    </div>
  );
}

export default App;
