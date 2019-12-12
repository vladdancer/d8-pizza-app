import React from 'react';
import {Button, Card, Image} from "semantic-ui-react";



const PizzaCard = (props) => (
  <Card>
    <Image src='https://pizzarini.info/wp-content/uploads/2018/06/Pizza-Margarita.jpg' wrapped ui={false} />
    <Card.Content>
      <Card.Header>{ props.header }</Card.Header>
      <Card.Description>
        {props.description}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <div className='ui two buttons'>
        <Button basic color='green'>
          Buy
        </Button>
        
      </div>
    </Card.Content>
  </Card>
)

export default PizzaCard
