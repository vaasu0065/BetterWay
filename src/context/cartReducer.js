export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const item = state.find(i => i.id === action.payload.id);
      if (item) {
        return state.map(i =>
          i.id === item.id
            ? { ...i, quantity: i.quantity + 1 }
            : i
        );
      }
      return [...state, { ...action.payload, quantity: 1 }];
    }

    case "REMOVE_FROM_CART":
      return state.filter(item => item.id !== action.payload);

    case "UPDATE_QTY":
      return state.map(item =>
        item.id === action.payload.id
          ? { ...item, quantity: action.payload.qty }
          : item
      );

    default:
      return state;
  }
};
