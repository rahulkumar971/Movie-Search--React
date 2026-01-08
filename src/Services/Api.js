const API_KEY = "7482964a3b52db7510eb5bcb15c10f85";
const BASE_URL = "https://api.themoviedb.org/3";

export const getpopularmovies = async () => {
  const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
  
  const data = await response.json();
  console.log()
  return data.results;
};

export const searchMovies = async (query) => {
  const response = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
      query
    )}`
  );
  const data = await response.json();
  return data.results;
};
