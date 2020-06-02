import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as cartActions from '../actions/cart';
import Menu from '../components/Menu';
import uniqBy from 'lodash/uniqBy';

const mapStateToProps = ({ cart }) => ({
  totalPrice: cart.items.reduce((total, ship) => total + ship.costInCredits, 0),
  count: cart.items.length,
  items: uniqBy(cart.items, o => o.name)
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(cartActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Menu);
