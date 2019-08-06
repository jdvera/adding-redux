### This is a change to the [11-Stu_ReactRouter](https://github.com/the-Coding-Boot-Camp-at-UT/UTAAUS201905FSF4-FT/tree/master/01-class-content/20-react/01-Activities/11-Stu_ReactRouter/Solved) activity, adding Redux to the React app in the `client` folder

### New npm's
- `redux`: The base Redux logic.  It is not reliant or specific to React, and can be used independently from it
- `react-redux`: Since redux and react are not inherently related, this allows us to connect our react app to our redux store
- `redux-logger`: A Middleware that creates useful logs in the browser's console whenever the redux store is updated

### New Folders/Files
- `client/src/reducers`: Where we define the different reducers in our redux instance.  You can think of this as *slightly* similar to models in Sequelize/Mongoose.
  - `client/src/reducers/index.js`: This collects all the reducers defined in the reducers folder and combines them into a single object. You will typically include **all** reducers here, even if they're not needed on every page/component you write.  When you connect a component to redux, you can define which reducers are included then.
  - `client/src/reducers/booksReducer.js`: This is where you define 1) the starting state of this reducer, and 2) the different ways the reducer can be manipulated.  It is important that the state is immutable.
- `client/src/actions`: This is where you define the functions that will be run throughout your react app.  These functions need to return an object with at least two properties: *type* - will match with a string in the reducer to say how the reducer is being manipulated, and *payload* - the data your reducer will use.
  - `client/src/actions/bookActions.js`: You'll often see actions separated into different files by each reducer.  So, in bookActions.js, you'll see the actions associated with the bookReducer.js reducer

### Edited Files
- `client/src/index.js`: Here's where we initialize Redux and add it to our app.  We include our middleware (in this case, just Logger), create the Redux store, and make our store accessible to the entire React app by wrapping the App component in a Provider component.
- `client/src/pages/Books.js`: loadBooks() is saving the data to Redux, not it's local state, so we need render() to refer to content in redux as well.  I'd also recommend having some kind of check after the api call to see if the database has actually changed and redux needs to be updated.
- `client/src/pages/Detail.js`: Since we already have all the book data in Redux, we no longer need to make an API call to get that information.
