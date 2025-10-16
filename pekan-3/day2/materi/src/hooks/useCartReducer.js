export const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return {
        ...state,
        items: [...state.items, action.payload],
        count: state.count + 1
      };
    case 'REMOVE_ITEM':
      const newItems = [...state.items];
      const index = newItems.findIndex(item => item.id === action.payload.id);
      
      if (index !== -1) {
        newItems.splice(index, 1);
        return {
          ...state,
          items: newItems,
          count: state.count - 1
        };
      }
      return state;
    case 'CLEAR_CART':
      return {
        items: [],
        count: 0
      };
    default:
      return state;
  }
};