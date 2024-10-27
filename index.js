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
