import React, { Component } from 'react';
import {Card, Container, Image} from 'semantic-ui-react';
import axios from 'axios';
import ShipCard from '../containers/ShipCard';
import Menu from '../containers/Menu';
import { Loader } from 'semantic-ui-react'
class App extends Component {

  async componentWillMount() { //przed zamontowaniem robimy zapyt na server
      const { setShips } = this.props; //dodajmy do propsow metode ktora bedzie wstawiac statki
      const { data } = await axios({
        url: 'https://swapi.apis.guru',
        method: 'post',
        data: {
          query: `
            query Root {
              allStarships{
                starships{
                  name
                  manufacturers
                  costInCredits
                }
              }
            }
          `}
      })

      setShips(data.data.allStarships.starships);
  }

  render() {
    const { ships, isReady, addedCount} = this.props; //propsy potrzebne do wyswietlania w aplikacji
    return (
      <Container>

        <Menu props={addedCount}/>
        <Card.Group itemsPerRow={2}>
          {!isReady ? <Loader active inline='centered' size='large' /> : ships.map((ship, i) => <ShipCard key={i} {...ship} />)}
        </Card.Group>
      </Container>
    );
  }
}

export default App;
