let games = [
  { id: "1", title: "The Witcher 3: Wild Hunt", platform: ["PC", "PS4"] },
  { id: "2", title: "Halo 5: Guardians", platform: ["Xbox One", "PC"] },
  {
    id: "3",
    title: "The Legend of Zelda: Breath of the Wild",
    platform: ["Switch"],
  },
  { id: "4", title: "Cyberpunk 2077", platform: ["PC"] },
  { id: "5", title: "Red Dead Redemption 2", platform: ["PS4", "Xbox One"] },
  {
    id: "6",
    title: "Animal Crossing: New Horizons",
    platform: ["PC", "Switch"],
  },
  { id: "7", title: "God of War", platform: ["PS4"] },
  { id: "8", title: "Forza Horizon 4", platform: ["Xbox One"] },
  { id: "9", title: "Minecraft", platform: ["PC", "PS4", "Switch"] },
  { id: "10", title: "Half-Life: Alyx", platform: ["PC"] },
  { id: "11", title: "Ghost of Tsushima", platform: ["PS4"] },
];

let authors = [
  { id: "1", name: "Author One", verified: true },
  { id: "2", name: "Author Two", verified: false },
  { id: "3", name: "Author Three", verified: true },
];

let reviews = [
  { id: "1", rating: 5, content: "Great game!", gameId: "1", authorId: "1" },
  { id: "2", rating: 4, content: "Pretty good", gameId: "2", authorId: "2" },
  { id: "3", rating: 3, content: "It's okay", gameId: "2", authorId: "3" },
  { id: "4", rating: 2, content: "Not great", gameId: "4", authorId: "1" },
  { id: "5", rating: 1, content: "Terrible", gameId: "5", authorId: "2" },
  {
    id: "6",
    rating: 5,
    content: "Amazing experience",
    gameId: "6",
    authorId: "3",
  },
  {
    id: "7",
    rating: 4,
    content: "Really enjoyed it",
    gameId: "7",
    authorId: "1",
  },
  { id: "8", rating: 3, content: "Average game", gameId: "8", authorId: "2" },
  {
    id: "9",
    rating: 2,
    content: "Could be better",
    gameId: "9",
    authorId: "3",
  },
  {
    id: "10",
    rating: 1,
    content: "Would not recommend",
    gameId: "10",
    authorId: "1",
  },
  {
    id: "11",
    rating: 10,
    content: "Masterpiece!",
    gameId: "11",
    authorId: "3",
  },
];

export default {
  games,
  authors,
  reviews,
};
