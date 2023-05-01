import { NextApiRequest, NextApiResponse } from "next";
const apiKey = process.env.TMDB_APIKEY;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { limit } = req.query;
  const maxLimit = parseInt(limit as string) || 20;
  const itemsPerPage = 20; // TMDB API returns 20 items per page

  const totalPages = Math.ceil(maxLimit / itemsPerPage);

  let allItems: any[] = [];

  for (let page = 1; page <= totalPages; page++) {
    const response = await fetch(
      `https://api.themoviedb.org/3/discover/tv?api_key=${apiKey}&sort_by=popularity.desc&include_adult=false&with_keywords=158718&page=${page}`
    );

    const data = await response.json();
    allItems = allItems.concat(data.results);
  }

  // Truncate the array to the specified limit
  const limitedItems = allItems.slice(0, maxLimit);

  res.status(200).json(limitedItems);
}
