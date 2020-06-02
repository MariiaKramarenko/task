const initialState = {
  isReady: false,
  items: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "SET_SHIPS"://wyswietlamy statki
      return {
        ...state,
        items: action.payload,
        isReady: true
      };
    case "SET_IS_READY"://statki sa gotowe do wyswietlania
      return {
        ...state,
        isReady: action.payload
      };
    default:
      return state;
  }
};
