import React from 'react';
import logo from './logo.svg';
import './App.css';
import './styles.scss';
import './test';
import {Container, Header, Menu, Sticky} from "semantic-ui-react";
import HeaderMenu from "./components/Menu";
import PizzaCard from "./components/PizzaCard";

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
        <PizzaCard></PizzaCard>
      </header>
    </div>
  );
}

export default App;
