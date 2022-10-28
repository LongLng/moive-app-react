const apiConfig = {
  baseUrl: "https://api.themoviedb.org/3/",
  apiKey: "a92e8aeca6be007f7b167b256056dbec",
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};

export default apiConfig;
