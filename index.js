import db from "./_db.js";
import { typeDefs } from "./schema.js";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

const resolvers = {
  Query: {
    games() {
      return db.games;
    },
    game(_, args) {
      return db.games.find((game) => game.id === args.id);
    },
    authors() {
      return db.authors;
    },
    author(_, args) {
      return db.authors.find((author) => author.id === args.id);
    },
    reviews() {
      return db.reviews;
    },
    review(_, args) {
      return db.reviews.find((review) => review.id === args.id);
    },
  },
  Game: {
    reviews(game) {
      return db.reviews.filter((review) => review.gameId === game.id);
    },
  },
  Author: {
    reviews(author) {
      return db.reviews.filter((review) => review.authorId === author.id);
    },
  },
  Review: {
    author(review) {
      return db.authors.find((author) => author.id === review.authorId);
    },
    game(review) {
      return db.games.find((game) => game.id === review.gameId);
    },
  },
  Mutation: {
    addGame(_, args) {
      const game = {
        ...args.game,
        id: String(db.games.length + 1),
      };
      db.games.push(game);
      return game;
    },
    addAuthor(_, args) {
      const author = {
        ...args.author,
        id: String(db.authors.length + 1),
      };
      db.authors.push(author);
      return author;
    },
    addReview(_, args) {
      const review = {
        ...args.review,
        id: String(db.reviews.length + 1),
      };
      db.reviews.push(review);
      return review;
    },
    updateGame(_, args) {
      const game = db.games.find((game) => game.id === args.id);
      Object.assign(game, args);
      return game;
    },
    updateAuthor(_, args) {
      const author = db.authors.find((author) => author.id === args.id);
      Object.assign(author, args);
      return author;
    },
    updateReview(_, args) {
      const review = db.reviews.find((review) => review.id === args.id);
      Object.assign(review, args);
      return review;
    },
    deleteGame(_, args) {
      const game = db.games.find((game) => game.id === args.id);
      db.games = db.games.filter((game) => game.id !== args.id);
      return game, db.games;
    },
    deleteAuthor(_, args) {
      const author = db.authors.find((author) => author.id === args.id);
      db.authors = db.authors.filter((author) => author.id !== args.id);
      return author, db.authors;
    },
    deleteReview(_, args) {
      const review = db.reviews.find((review) => review.id === args.id);
      db.reviews = db.reviews.filter((review) => review.id !== args.id);
      return review, db.reviews;
    },
    deleteAllGames() {
      db.games = [];
      return db.games;
    },
    deleteAllAuthors() {
      db.authors = [];
      return db.authors;
    },
    deleteAllReviews() {
      db.reviews = [];
      return db.reviews;
    },
  },
};

// server setup
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀 Server ready at port `, 4000);
