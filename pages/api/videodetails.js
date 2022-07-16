import axios from "axios";

export default async function handler(req, res) {
  const options = {
    method: "GET",
    url: "https://youtube-v31.p.rapidapi.com/videos",
    params: { part: "contentDetails,snippet,statistics", id: req.query.id },
    headers: {
      "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPIDAPI_KEY,
      "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
    },
  };

  try {
    let response = await axios(options);
    res.status(200).json(response.data);
  } catch (error) {
    console.error(error);
  }
}
