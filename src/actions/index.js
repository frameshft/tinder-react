export function selectBook(book) {
  // selectbook is an ActionCreator, it needs to return an aciton,
  // an object with a type property.
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}
