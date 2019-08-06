const booksReducer = (state = {}, action) => {
   let newState = { ...state };

   switch (action.type) {
      case 'BOOKS_LOAD_BULK':
         newState = action.payload;
         return newState;
      default:
         return state;
   }
};

export default booksReducer;