export const typeDefs = `#graphql
    type Game {
        id: ID!
        title: String!
        platform: [String!]!
        reviews: [Review!]
    }

    type Review {
        id: ID!
        rating: Int!
        content: String!
        game: Game!
        author: Author!
    }

    type Author {
        id: ID!
        name: String!
        verified: Boolean!
        reviews: [Review!]
    }

    type Query {
        games: [Game]
        game(id: ID!): Game
        reviews: [Review]
        review(id: ID!): Review
        authors: [Author]
        author(id: ID!): Author
    }

    type Mutation {
        addGame(game: AddGameInput): Game
        addAuthor(author: addAuthorInput): Author
        addReview(review: addReviewInput): Review

        updateGame(id: ID!, title: String, platform: [String]): Game
        updateAuthor(id: ID!, name: String, verified: Boolean): Author
        updateReview(id: ID!, rating: Int, content: String, gameId: ID, authorId: ID): Review

        deleteGame(id: ID!): [Game]
        deleteAuthor(id: ID!): [Author]
        deleteReview(id: ID!): [Review]

        deleteAllGames: [Game]
        deleteAllAuthors: [Author]
        deleteAllReviews: [Review]
    }

    input AddGameInput {
        title: String!
        platform: [String!]!   
    }
    input addAuthorInput {
        name: String!
        verified: Boolean!
    }
    input addReviewInput {
        rating: Int!
        content: String!
        gameId: ID!
        authorId: ID!
    }
`;
