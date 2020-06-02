import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as shipsActions from '../actions/ships';
import App from '../components/App';

const mapStateToProps = ({ ships }) => ({//statki jako propsy aby wyswietlic ich na ekranie
  ships: ships.items ,//statki
  isReady: ships.isReady//czy są gotowe do wyswietlania
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(shipsActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
