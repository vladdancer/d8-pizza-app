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
          <Header as="h1" >Chilintano Katalog</Header>
          <HeaderMenu />
        </Container>
      </Sticky>
      
      <header className="App-header">
      <p>
        Chose Pizza
      </p>
        <PizzaCard pizzaname="Margarita" description="11,50$" imges='https://pizzarini.info/wp-content/uploads/2018/06/Pizza-Margarita.jpg'/>
        <PizzaCard pizzaname="Diablo" description="15,00$" imges='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcBTxHqY4-M-XHTj_1L4qu1sPsGz_y2j7BgFqzGFoHDeBDU16H&s'/> 
        <PizzaCard pizzaname="Papirony" description="14,25$" imges='https://img05.rl0.ru/eda/c620x415i/s2.eda.ru/StaticContent/Photos/120131085053/171027192707/p_O.jpg'/>
      </header>

    </div>
    
  );
}

export default App;
