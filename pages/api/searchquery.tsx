// import { NextApiRequest, NextApiResponse } from "next";
// const apiKey = process.env.TMDB_APIKEY;

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   const { query } = req.query;

//   let allItems: any[] = [];

//   const response = await fetch(
//     `https://api.themoviedb.org/3/search/multi?api_key=${apiKey}&query=${query}&include_adult=false&with_keywords=158718`
//   );

//   const data = await response.json();
//   allItems = data.results;

//   res.status(200).json(allItems);
// }
