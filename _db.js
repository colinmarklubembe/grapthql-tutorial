let games = [
  { id: "1", title: "Game One", platform: ["PC", "PS4"] },
  { id: "2", title: "Game Two", platform: ["Xbox One", "PC"] },
  { id: "3", title: "Game Three", platform: ["Switch"] },
  { id: "4", title: "Game Four", platform: ["PC"] },
  { id: "5", title: "Game Five", platform: ["PS4", "Xbox One"] },
  { id: "6", title: "Game Six", platform: ["PC", "Switch"] },
  { id: "7", title: "Game Seven", platform: ["PS4"] },
  { id: "8", title: "Game Eight", platform: ["Xbox One"] },
  { id: "9", title: "Game Nine", platform: ["PC", "PS4", "Switch"] },
  { id: "10", title: "Game Ten", platform: ["PC"] },
];

let authors = [
  { id: "1", name: "Author One", verified: true },
  { id: "2", name: "Author Two", verified: false },
  { id: "3", name: "Author Three", verified: true },
];

let reviews = [
  { id: "1", rating: 5, content: "Great game!" },
  { id: "2", rating: 4, content: "Pretty good" },
  { id: "3", rating: 3, content: "It's okay" },
  { id: "4", rating: 2, content: "Not great" },
  { id: "5", rating: 1, content: "Terrible" },
  { id: "6", rating: 5, content: "Amazing experience" },
  { id: "7", rating: 4, content: "Really enjoyed it" },
  { id: "8", rating: 3, content: "Average game" },
  { id: "9", rating: 2, content: "Could be better" },
  { id: "10", rating: 1, content: "Would not recommend" },
];

const db = {
  games,
  authors,
  reviews,
};

export default db;
