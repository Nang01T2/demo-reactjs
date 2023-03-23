import React from "react";
import Results from "./components/Results";

const API_KEY = process.env.IMDB_API_KEY;

async function getData(genre) {
  const res = await fetch(
    `https://api.themoviedb.org/3/${
      genre === "fetchTopRated" ? "movie/top_rated" : "trending/all/week"
    }?api_key=${API_KEY}&language=en-US&page=1`,
    { next: { revalidate: 10000 } }
  );
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function HomePage({ searchParams }) {
  const genre = searchParams.genre || "fetchTrending";
  const data = await getData(genre);
  return (
    <div>
      <Results results={data.results} />
    </div>
  );
}
