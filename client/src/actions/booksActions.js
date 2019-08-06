export function booksLoadBulk(booksObj) {
   return {
      type: 'BOOKS_LOAD_BULK',
      payload: booksObj
   };
};