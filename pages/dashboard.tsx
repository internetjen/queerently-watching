import { useSession } from "@supabase/auth-helpers-react";
import { ArrowDownIcon, ArrowUpIcon } from "@heroicons/react/20/solid";
import {
  CursorArrowRaysIcon,
  EnvelopeOpenIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface Item {
  id: number;
  title: string;
  name: string;
  overview: string;
  poster_path?: string;
  backdrop_path?: string;
  media_type: string;
  original_language: string;
  genres: Genre[];
  original_name: string;
  original_title: string;
  release_date: string;
  first_air_date: string;
}

interface Genre {
  id: number;
  name: string;
}

const favorite = [
  {
    id: 1,
    name: "Total Subscribers",
    stat: "71,897",
    icon: UsersIcon,
    change: "122",
    changeType: "increase",
  }
];


const watchlist = [
  {
    id: 1,
    name: "Total Subscribers",
    stat: "71,897",
    icon: UsersIcon,
    change: "122",
    changeType: "increase",
  }
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Dashboard = () => {
  const session = useSession();
  const router = useRouter();
  const { id, media_type } = router.query;
  const [item, setItem] = useState<Item | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const response = await fetch(`/api/item?id=155513&media_type=tv`);
      const data = await response.json();
      setItem(data);
      setLoading(false);
    };

    fetchData();
  }, []);

  if (session) {
    return (
      <>
        <div className="flex items-center py-4">
          <h2 className="text-transform: uppercase mt-4 text-3xl font-bold text-custom-c18c5d">
            Dashboard
          </h2>
        </div>

        {/* featured content */}

        <div className="bg-white shadow sm:rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-base font-semibold leading-6 text-gray-900">
              Featured This Month
            </h3>
            <div className="mt-2 text-sm text-gray-900 grid sm:grid-cols-2 gap-4">
              {item && (
                <>
                  <div className="col-span-1 flex flex-col justify-center">
                    <h4 className="text-xl font-bold">
                      {item.title || item.name}
                    </h4>
                    <p className="mt-4 flex justify-center">{item.overview}</p>
                    <Link 
                    href={`/media/155513?media_type=tv`}
                    className="mt-4 mb-4 font-semibold text-indigo-600 hover:text-indigo-500"
                    >
                    Learn more about our GAP The Series
                    <span aria-hidden="true"> &rarr;</span>
                    </Link>
                  </div>
                  <div className="col-span-1 flex justify-center">
                    <Image
                      src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                      alt={item.title || item.name}
                      width={250}
                      height={250}
                      className="rounded-lg"
                    />
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        
        {/* Favorites */}
        <div>
          <h3 className="text-base font-semibold leading-6 text-gray-900 mt-6">
            My favorites
          </h3>

          <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {favorite.map((item) => (
              <div
                key={item.id}
                className="relative overflow-hidden rounded-lg bg-white px-4 pb-12 pt-5 shadow sm:px-6 sm:pt-6"
              >
                <dt>
                  <div className="absolute rounded-md bg-indigo-500 p-3">
                    <item.icon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  <p className="ml-16 truncate text-sm font-medium text-gray-500">
                    {item.name}
                  </p>
                </dt>
                <dd className="ml-16 flex items-baseline pb-6 sm:pb-7">
                  <p className="text-2xl font-semibold text-gray-900">
                    {item.stat}
                  </p>
                  <p
                    className={classNames(
                      item.changeType === "increase"
                        ? "text-green-600"
                        : "text-red-600",
                      "ml-2 flex items-baseline text-sm font-semibold"
                    )}
                  >
                    {item.changeType === "increase" ? (
                      <ArrowUpIcon
                        className="h-5 w-5 flex-shrink-0 self-center text-green-500"
                        aria-hidden="true"
                      />
                    ) : (
                      <ArrowDownIcon
                        className="h-5 w-5 flex-shrink-0 self-center text-red-500"
                        aria-hidden="true"
                      />
                    )}

                    <span className="sr-only">
                      {" "}
                      {item.changeType === "increase"
                        ? "Increased"
                        : "Decreased"}{" "}
                      by{" "}
                    </span>
                    {item.change}
                  </p>
                  <div className="absolute inset-x-0 bottom-0 bg-gray-50 px-4 py-4 sm:px-6">
                    <div className="text-sm">
                      <a
                        href="#"
                        className="font-medium text-indigo-600 hover:text-indigo-500"
                      >
                        View all
                        <span className="sr-only"> {item.name} favorites</span>
                      </a>
                    </div>
                  </div>
                </dd>
              </div>
            ))}
          </dl>
        </div>


        {/* Watchlist */}
        <div>
          <h3 className="text-base font-semibold leading-6 text-gray-900 mt-6">
            My Watchlist
          </h3>

          <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {watchlist.map((item) => (
              <div
                key={item.id}
                className="relative overflow-hidden rounded-lg bg-white px-4 pb-12 pt-5 shadow sm:px-6 sm:pt-6"
              >
              <p>hi</p>
              </div>
            ))}
          </dl>
        </div>


      </>
    );
  }


  return (
    <>
      <div>Not logged in</div>
    </>
  );
};

export default Dashboard;
