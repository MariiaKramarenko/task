import React from "react";
import {Menu, Button, Popup, List, Icon,} from "semantic-ui-react";

//komponent wyswietlający kartkę statku
const CartComponent = ({ name, costInCredits, removeFromCart }) => (
  <List selection divided verticalAlign="middle">
    <List.Item>
      <List.Content floated="center">
        <Button onClick={removeFromCart.bind(this, name)} color="blue">
          Usunąć
        </Button>
      </List.Content>
      <List.Content>{`${name} - ${costInCredits}`}</List.Content>
    </List.Item>
  </List>
);

//komponent wyswietlający menu aplikacji
const MenuComponent = ({ totalPrice, count, items }) => (
  <Menu>
    <Menu.Item color='purple' name="browse">Star Wars Shop</Menu.Item>

    <Menu.Menu position="center">
      <Menu.Item color='purple' name="signup">
       Razem: &nbsp; <b>{totalPrice}</b>&nbsp;<Icon color='violet' name='dollar sign' />
      </Menu.Item>

      <Popup trigger={
          <Menu.Item color='purple' name="help">
              <Icon color='violet' name='shopping cart' /> (<b>{count} </b>)
          </Menu.Item>
        }
        content={items.map(ship => (
          <CartComponent key={ship.name} {...ship} />
        ))}
        on="click"
        hideOnScroll
      />
    </Menu.Menu>
  </Menu>
);

export default MenuComponent;
