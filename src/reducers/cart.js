const initialState = {
  items: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART"://dodac statek do koszyka
      return {
        ...state,
        items: [...state.items, action.payload]};//zapisujemy dodane statki

    case "REMOVE_FROM_CART"://wydalic statek z koszyka
      return {
        ...state,
        items: state.items.filter(o => o.name !== action.payload)//robimy filtr statków za id i potrzebne będą usunięte
      };
    default:
      return state;
  }
};
