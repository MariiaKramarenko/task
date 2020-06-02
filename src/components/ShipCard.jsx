import React from 'react';
import { Card, Icon, Button } from 'semantic-ui-react';

//component reprezentujacy statek
const shipCard = ship => {
  const { name, manufacturers, costInCredits,  addToCart, addedCount } = ship;//propsy dla statku
  const hasPrice = typeof costInCredits === 'number';//sprawdzamy czy istnieje cena statku

  return (
    <Card>
      <Card.Content>
        <Card.Header>{name}</Card.Header>
        <Card.Meta>
          <span className="date">
            {manufacturers.join(', ')}
          </span>
        </Card.Meta>
      </Card.Content>
      <Card.Content extra>
        <a>
          {hasPrice ? costInCredits : 'Produkt niedostępny'} <Icon color='violet' name='dollar sign' />
        </a> <br/>
          <Button disabled={!hasPrice} color='violet' onClick={addToCart.bind(this, ship)}>
              Dodać do koszyka {addedCount > 0 && `(${addedCount})`}
          </Button>
      </Card.Content>

    </Card>
  );
};

export default shipCard;
