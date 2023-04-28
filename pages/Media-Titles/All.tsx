// import { useState, useEffect } from "react";
// import Landing from "../../components/Landing";
// import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
// import Link from "next/link";
// import { useSession } from "next-auth/react";

// interface Item {
//   id: number;
//   title: string;
//   name: string;
//   overview: string;
//   poster_path?: string;
//   media_type: string;
// }

// const AllTitles = () => {
//   const [items, setItems] = useState<Item[]>([]);
//   const { data: session } = useSession();

//   const handleSearch = async (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();

//     const formData = new FormData(event.currentTarget);
//     const query = formData.get("search") as string;

//     const response = await fetch(`/api/searchquery?query=${query}`);
//     const data = await response.json();

//     setItems(data);
//   };

//   useEffect(() => {
//     async function fetchItems() {
//       const responseTV = await fetch("/api/tv?limit=50");
//       const dataTV = await responseTV.json();

//       const responseMovies = await fetch("/api/movies?limit=50");
//       const dataMovies = await responseMovies.json();

//       const allItems = [
//         ...dataTV.map((item: Item) => ({ ...item, media_type: "tv" })),
//         ...dataMovies.map((item: Item) => ({ ...item, media_type: "movie" })),
//       ];
//       allItems.sort((a, b) => b.popularity - a.popularity);

//       setItems(allItems);
//     }

//     fetchItems();
//   }, []);

//   return (
//     <Landing>
//       <div className="bg-white">
//         <div className="mt-8 mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
//           <div className="relative flex items-center justify-center flex-1 lg:mx-6">
//             <form
//               className="relative w-full max-w-md"
//               onSubmit={handleSearch}
//               method="GET"
//             >
//               <div className="absolute inset-y-0 left-0 flex items-center pl-3">
//                 <MagnifyingGlassIcon
//                   className="h-5 w-5 text-gray-400"
//                   aria-hidden="true"
//                 />
//               </div>
//               <input
//                 id="search-field"
//                 className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-xl placeholder-gray-500 text-gray-900 focus:outline-none focus:placeholder-gray-400 focus:ring-custom-c18c5d focus:border-custom-c18c5d sm:text-sm border-gray-300"
//                 type="search"
//                 name="search"
//                 placeholder="Search for a title"
//               />
//             </form>
//           </div>

//           <div className="flex items-center justify-center py-4">
//             <h2 className="text-transform: uppercase mt-4 text-3xl font-bold text-custom-c18c5d">
//               All Titles
//             </h2>
//           </div>
//           <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
//             {Array.isArray(items) && items.length > 0 ? (
//               items.map((item: Item) => (
//                 <Link
//                   key={item.id}
//                   href={`/Media-Titles/Item/${item.id}?media_type=${
//                     item.title ? "movie" : "tv"
//                   }`}
//                   className="group"
//                 >
//                   <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-sm bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
//                     {item.poster_path ? (
//                       <img
//                         src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
//                         alt={item.title ? item.title : item.name}
//                         className="h-full w-full object-cover object-center group-hover:opacity-75"
//                       />
//                     ) : (
//                       <img
//                         height="700px"
//                         width="500px"
//                         src="../ImageUnavailable.svg"
//                         alt={item.title ? item.title : item.name}
//                         className="h-full w-full object-cover object-center group-hover:opacity-75"
//                       />
//                     )}
//                   </div>
//                   <div className="flex items-center justify-center">
//                     <h3 className="mt-4 text-lg font-medium text-gray-900">
//                       {item.title ? item.title : item.name}
//                     </h3>

//                   </div>
//                 </Link>
                
//               ))
//             ) : (
//               <p>Loading...</p>
//             )}

            
//           </div>
//         </div>
//       </div>
//     </Landing>
//   );
// };

// export default AllTitles;
