import React from 'react';
import {Button, Card, Image} from "semantic-ui-react";

const PizzaCard = (props) => (
  <Card>
    <Image src={props.imges} wrapped ui={true} />
    <Card.Content>
      <Card.Header>Pizza {props.pizzaname}</Card.Header>
      <Card.Description>
        {props.description}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <div className='ui two buttons'>
        <Button basic color='green'>
          Buy
        </Button>
        <Button basic color='red'>
          More info
        </Button>
      </div>
    </Card.Content>
  </Card>
)
export default PizzaCard
