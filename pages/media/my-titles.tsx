import { useState, useEffect } from "react";
import Link from "next/link";

interface Movie {
  id: number;
  title: string;
  name: string;
  overview: string;
  poster_path?: string;
  media_type: string;
}

const MyTitles = () => {
  const [items, setItems] = useState<Movie[]>([]);

  useEffect(() => {
    async function fetchItems() {
      const allItems = [];
      for (const item of items) {
        const responseFavorites = await fetch(`/api/favorites?id=${item.id}&media_type=${item.title ? "movie" : "tv"}`);
        const dataFavorites = await responseFavorites.json();
        allItems.push(dataFavorites);
      }
      setItems(allItems);
    }
    

    fetchItems();
  }, []);

  return (
    
      <div className="bg-white">
        <div className="mt-8 mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <div className="flex items-center justify-center py-4">
            <h2 className="text-transform: uppercase mt-4 text-3xl font-bold text-custom-c18c5d">
              All Titles
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {Array.isArray(items) && items.length > 0 ? (
              items.map((item: Movie) => (
                <Link
                  key={item.id}
                  href={`/media-titles/${item.id}?media_type=${
                    item.title ? "movie" : "tv"
                  }`}
                  className="group"
                >
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-sm bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                    {item.poster_path ? (
                      <img
                        src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                        alt={item.title ? item.title : item.name}
                        className="h-full w-full object-cover object-center group-hover:opacity-75"
                      />
                    ) : (
                      <img
                        height="700px"
                        width="500px"
                        src="../ImageUnavailable.svg"
                        alt={item.title ? item.title : item.name}
                        className="h-full w-full object-cover object-center group-hover:opacity-75"
                      />
                    )}
                  </div>
                  <div className="flex items-center justify-center">
                    <h3 className="mt-4 text-lg font-medium text-gray-900">
                      {item.title ? item.title : item.name}
                    </h3>
                    <button>hello</button>
                  </div>
                </Link>
              ))
            ) : (
              <p>Loading...</p>
            )}
          </div>
        </div>
      </div>
  );
};

export default MyTitles;
