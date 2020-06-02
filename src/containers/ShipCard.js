import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as cartActions from '../actions/cart';
import ShipCard from '../components/ShipCard';

const mapStateToProps = ({ cart }, { name }) => ({
  addedCount: cart.items.reduce((count, ship) => count + (ship.name === name ? 1 : 0), 0),
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(cartActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ShipCard);
