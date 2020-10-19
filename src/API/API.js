const apiKey = "iJkliktOclXXO9OCSOFWTeWjpuCUdTdR";
const apiURL = 'http://api.giphy.com/v1/gifs/search'

export const getGifs = async (query) => {
  return await fetch(`${apiURL}?q=${query}&api_key=${apiKey}&limit=10`)
}