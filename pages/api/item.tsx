// import { NextApiRequest, NextApiResponse } from "next";
// const apiKey = process.env.TMDB_APIKEY;

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   const { id, media_type } = req.query;

//   const apiUrl =
//     media_type === "movie"
//       ? `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`
//       : `https://api.themoviedb.org/3/tv/${id}?api_key=${apiKey}&language=en-US`;

//   const response = await fetch(apiUrl);
//   const item = await response.json();

//   if (!item) {
//     res.status(404).json({ message: "Item not found" });
//     return;
//   }

//   res.status(200).json(item);
// }
