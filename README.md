# Puzzle App

## Summary:

-   This is a bidimensional puzzle (4x4).
-   Each piece can move in 4 directions (up, down, left, right).
-   At start all pieces are scrambled.
-   Movement of a piece is just possible when there is an empty cell next to it.
-   Just one movement is possible each time.
-   Game ends when all pieces are in the right position, showing the image clearly.
-   An image is provided to use for the test.
-   Project is done in React
-   Puzzle state is kept in redux instead of local state
-   The 'reselect' is used for retrieving and displaying the grid-index-position of the empty tile
-   Actions and reducers using community standards/libraries
-   Reducers are covered with Jest unit tests

## Run the task

### Get all dependencies

```bash
yarn
```

### Run application

```bash
yarn start
```

### Open http://localhost:7711 in your browser
