import Link from "next/link";

const HomeSignedOut = () => {
  return (
    <main>
      <div className="overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 pb-32 pt-16 sm:pt-16 lg:px-8 lg:pt-16">
          <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
            <div className="w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Sharing and celebrating authentic queer stories in media.
              </h1>
              <p className="relative mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none">
                Queerently Watching is a community-driven platform for LGBTQ+
                individuals and allies to share and discover media that tells
                authentic queer stories. Our mission is to create a safe and
                inclusive space for users to connect, discuss, and celebrate
                queer representation in film and television.
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <button className="rounded-md bg-gray-800 px-3.5 py-2.5 text-xs font-semibold text-white shadow-sm hover:bg-pink-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600">
                  <Link href="/Get-Started">Get started</Link>
                </button>

                <Link
                  href="/Media-Titles/All"
                  className="text-xs font-semibold leading-6 text-gray-900"
                >
                  See what we're watching <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
            
            <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
              <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                <div className="relative">
                  <img
                    src="https://www.comingsoon.net/wp-content/uploads/sites/3/2020/04/korra-asami-e1585852770490.jpg"
                    alt=""
                    className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                  />
                  <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                </div>
              </div>
              <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                <div className="relative">
                  <img
                    src="https://compote.slate.com/images/aee9c805-16f6-43d4-aea0-47ed47d58a86.jpeg?crop=1920%2C1280%2Cx0%2Cy0"
                    alt=""
                    className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                  />
                  <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                </div>
                <div className="relative">
                  <img
                    src="https://64.media.tumblr.com/37029a8da68883045d41e8f6b4f8c3f0/9eb23de6929f9502-9e/s400x600/48c9acdb53b1a64439bf153ce27265d1e933c453.gifv"
                    alt=""
                    className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                  />
                  <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                </div>
              </div>
              <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                <div className="relative">
                  <img
                    src="https://64.media.tumblr.com/050274d5dd29ca2f598e4c6fd7e7662d/b7f1365ee21807f4-b4/s540x810/930b5104ba22a9ac553cbf3c7df1af399def5b3e.gifv"
                    alt=""
                    className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                  />
                  <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                </div>
                <div className="relative">
                  <img
                    src="https://www.gannett-cdn.com/presto/2022/04/28/USAT/01694614-2c9b-4517-9074-f3ac344fda46-HS_101_Unit_00349_1.png?crop=3000,2537,x0,y463"
                    alt=""
                    className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                  />
                  <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HomeSignedOut;
