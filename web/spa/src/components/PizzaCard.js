import React from 'react';
import {Button, Card, Image} from "semantic-ui-react";

const PizzaCard = () => (
  <Card>
    <Image src='/images/avatar/large/matthew.png' wrapped ui={false} />
    <Card.Content>
      <Card.Header>Pizza name</Card.Header>
      <Card.Description>
        Pizza description
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
