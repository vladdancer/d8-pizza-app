import React from 'react';
import logo from './logo.svg';
import './App.css';
import './styles.scss';
import './test';
import {Container, Header, Menu, Sticky} from "semantic-ui-react";
import HeaderMenu from "./components/Menu";
import PizzaCard from "./components/PizzaCard";

const pizzas = [
  {
    id: 1, 
    price: 160, 
    name: "Маргарита",
    description: "Пиццка без мяска"
  },
  {
    id: 2, 
    price: 180, 
    name: "Баварская",
    description: "Пиццка с  мяском"
  },
  {
    id: 3, 
    price: 200, 
    name: "Пепероня с анавасеками",
    description: "Пиццка с колбасеками и анавасеками"
  },
  {
    id: 4, 
    price: 210, 
    name: "BarbIQ s anavasekami",
    description: "Пиццка с барби, но без кена"
  }
];

function App() {

  return (
    <div className="App">
      <Sticky>
        <Container style={{margin: 20}}>
          <Header as="h1" >Pizza Store v.2</Header>
          <HeaderMenu />
        </Container>
      </Sticky>
      <header className="App-header">
        <p>
          Here we will load our pizza.
        </p>
        {pizzas.map((item, key) =>
        <PizzaCard header={item.name} description={item.description}></PizzaCard>)}; 
      </header>
    </div>
  );
}



export default App;
