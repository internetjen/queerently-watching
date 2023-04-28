// import { useEffect, useState } from "react";
// import { useRouter } from "next/router";
// import { useSession } from "next-auth/react";
// import Landing from "../../../components/Landing";

// interface Item {
//   id: number;
//   title: string;
//   name: string;
//   overview: string;
//   poster_path?: string;
//   backdrop_path?: string;
//   media_type: string;
//   original_language: string;
//   genres: Genre[];
//   original_name: string;
//   original_title: string;
//   release_date: string;
//   first_air_date: string;
// }

// interface Genre {
//   id: number;
//   name: string;
// }


// const ItemPage = () => {
//   const router = useRouter();
//   const { id, media_type } = router.query;
//   const [item, setItem] = useState<Item | null>(null);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [isFavorite, setIsFavorite] = useState(false);
//   const { data: session } = useSession();

//   useEffect(() => {
//     if (!id || !media_type) return;

//     const fetchData = async () => {
//       setLoading(true);
//       const response = await fetch(
//         `/api/item?id=${id}&media_type=${media_type}`
//       );
//       const data = await response.json();
//       setItem(data);
//       setLoading(false);

//       // Check if the item is in the user's favorites
//       const getResponse = await fetch(
//         `/api/favorites?userId=${session?.user?.id}&itemId=${id}`
//       );

//       const getData = await getResponse.json();

//       if (getData.success) {
//         setIsFavorite(getData.isFavorite);
//       } else {
//         console.error(getData.error);
//       }
//     };

//     fetchData();
//   }, [id, media_type, session]);



//   const handleFavoriteToggle = async (itemId: number, isFavorite: boolean) => {
//     try {
//       // const response = await fetch('/api/favorites', {
//       //   method: isFavorite ? 'DELETE' : 'POST',
//       //   headers: {
//       //     'Content-Type': 'application/json'
//       //   },
//       //   body: JSON.stringify({
//       //     userId: session?.user?.id,
//       //     itemId
//       //   })
//       // });
  
//       const response = await fetch(`/api/favorites?userId=${session?.user?.id}&itemId=${itemId}`, {
//         method: isFavorite ? 'DELETE' : 'POST',
//         headers: isFavorite ? undefined : { 'Content-Type': 'application/json' },
//         body: isFavorite ? undefined : JSON.stringify({ userId: session?.user?.id, itemId }),
//       });

//       const data = await response.json();

//       if (data.success) {
//         setIsFavorite(!isFavorite);
//       } else {
//         console.error(data.error);
//       }
    
//     } catch (error) {
//       console.error(error);
//     }
//   };
  

//   return (
//     <Landing>
//       <div className="flex flex-col items-center justify-center h-full">
//         <div className="mt-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="sm:flex">
//             {item?.poster_path && (
//               <div className="mb-4 flex-shrink-0 sm:mb-0 sm:mr-4">
//                 <div className="flex items-center flex-col sm:flex-row">
//                   <img
//                     className="h-full w-full object-cover border border-gray-300 bg-white text-gray-300 sm:w-64 block sm:hidden"
//                     src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`}
//                     alt={item.title || item.name}
//                   />
//                   <img
//                     className="h-full w-full object-cover border border-gray-300 bg-white text-gray-300 sm:w-64 hidden sm:flex"
//                     src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
//                     alt={item.title || item.name}
//                   />
//                   <div className="ml-4 max-w-md">
//                     <h4 className="text-lg font-bold">
//                       {item?.title || item?.name}
//                     </h4>
//                     <div className="mt-1">{item?.overview}</div>
//                     <div className="mt-1 flex">
//                       <div className="font-bold  mr-2">Genres: </div>
//                       <div>
//                         {item?.genres.map((genre) => genre.name).join(", ")}
//                       </div>
//                     </div>
//                     <div className="mt-1 flex">
//                       <div className="font-bold  mr-2">Original language:</div>
//                       <div className="uppercase">
//                         {" "}
//                         {item?.original_language}{" "}
//                       </div>
//                     </div>
//                     {item?.first_air_date && (
//                       <div className="mt-1 flex">
//                         <div className="font-bold  mr-2">First Air Date:</div>
//                         <div className="uppercase">
//                           {" "}
//                           {item?.first_air_date}{" "}
//                         </div>
//                       </div>
//                     )}
//                     {item?.release_date && (
//                       <div className="mt-1 flex">
//                         <div className="font-bold  mr-2">Release Date:</div>
//                         <div className="uppercase"> {item?.release_date} </div>
//                       </div>
//                     )}
//                   </div>
//                 </div>

//                 <button onClick={() => handleFavoriteToggle(item?.id, isFavorite)}>
//                   {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
//                 </button>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </Landing>
//   );
// };

// export default ItemPage;