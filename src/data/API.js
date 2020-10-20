const apiKey = "iJkliktOclXXO9OCSOFWTeWjpuCUdTdR";
// ^^ move to dotenv 

const apiURL = 'http://api.giphy.com/v1/gifs/search'

export const getGifs = async (query) => {
  try {
    const response = await fetch(`${apiURL}?q=${query}&api_key=${apiKey}&limit=10`)
    const data = response.json()
    return data 
  } catch(err) {
    return err
  }
}