import { useSession } from "@supabase/auth-helpers-react";
import { ArrowDownIcon, ArrowUpIcon } from '@heroicons/react/20/solid'
import { CursorArrowRaysIcon, EnvelopeOpenIcon, UsersIcon } from '@heroicons/react/24/outline'
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

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

const stats = [
  { id: 1, name: 'Total Subscribers', stat: '71,897', icon: UsersIcon, change: '122', changeType: 'increase' },
  { id: 2, name: 'Avg. Open Rate', stat: '58.16%', icon: EnvelopeOpenIcon, change: '5.4%', changeType: 'increase' },
  { id: 3, name: 'Avg. Click Rate', stat: '24.57%', icon: CursorArrowRaysIcon, change: '3.2%', changeType: 'decrease' },
]



function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

const Dashboard = () => {
  const session  = useSession();
  const router = useRouter();
  const { id, media_type } = router.query;
  const [item, setItem] = useState<Item | null>(null);
  const [loading, setLoading] = useState<boolean>(true);


  useEffect(() => {
    if (!id || !media_type) return;

    const fetchData = async () => {
      setLoading(true);
      const response = await fetch(
        `/api/item?id=${id}&media_type=${media_type}`
      );
      const data = await response.json();
      setItem(data);
      setLoading(false);
    };

    fetchData();
  }, [id, media_type, session]);


  if (session) {
  return (
    <>
    <div className="flex items-center py-4">
          <h2 className="text-transform: uppercase mt-4 text-3xl font-bold text-custom-c18c5d">
            Dashboard
          </h2>
    </div>

    <div className="bg-white shadow sm:rounded-lg">
      <div className="px-4 py-5 sm:p-6">
        <h3 className="text-base font-semibold leading-6 text-gray-900">Featured This Month</h3>
        <div className="mt-2 max-w-xl text-sm text-gray-500">
          {item?.title}
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, totam at reprehenderit maxime aut beatae
            ad.
          </p>
        </div>
        <div className="mt-3 text-sm leading-6">
          <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
            Learn more about our CI features
            <span aria-hidden="true"> &rarr;</span>
          </a>
        </div>
      </div>
    </div>

    <div>
      <h3 className="text-base font-semibold leading-6 text-gray-900 mt-6">Last 30 days</h3>

      <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {stats.map((item) => (
          <div
            key={item.id}
            className="relative overflow-hidden rounded-lg bg-white px-4 pb-12 pt-5 shadow sm:px-6 sm:pt-6"
          >
            <dt>
              <div className="absolute rounded-md bg-indigo-500 p-3">
                <item.icon className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <p className="ml-16 truncate text-sm font-medium text-gray-500">{item.name}</p>
            </dt>
            <dd className="ml-16 flex items-baseline pb-6 sm:pb-7">
              <p className="text-2xl font-semibold text-gray-900">{item.stat}</p>
              <p
                className={classNames(
                  item.changeType === 'increase' ? 'text-green-600' : 'text-red-600',
                  'ml-2 flex items-baseline text-sm font-semibold'
                )}
              >
                {item.changeType === 'increase' ? (
                  <ArrowUpIcon className="h-5 w-5 flex-shrink-0 self-center text-green-500" aria-hidden="true" />
                ) : (
                  <ArrowDownIcon className="h-5 w-5 flex-shrink-0 self-center text-red-500" aria-hidden="true" />
                )}

                <span className="sr-only"> {item.changeType === 'increase' ? 'Increased' : 'Decreased'} by </span>
                {item.change}
              </p>
              <div className="absolute inset-x-0 bottom-0 bg-gray-50 px-4 py-4 sm:px-6">
                <div className="text-sm">
                  <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                    View all<span className="sr-only"> {item.name} stats</span>
                  </a>
                </div>
              </div>
            </dd>
          </div>
        ))}
      </dl>
    </div>
    </>
  )
  }

  return ( 
    <>
    <div>Not logged in</div>
    </>
    )
}

export default Dashboard
