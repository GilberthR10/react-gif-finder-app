const API_KEY = '';
export const getGifs = async (category) => {

  const url = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${category}&limit=5`;
  const result = await fetch(url);
  const { data } = await result.json();

  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }));
  return gifs;
};
