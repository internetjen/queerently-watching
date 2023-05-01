import { signIn } from "next-auth/react";

function handleSignInGoogle() {
  return () => {
    signIn("google");
  };
}

function handleSignInFacebook() {
  return () => {
    signIn("facebook");
  };
}

function handleSignInGithub() {
  return () => {
    signIn("github");
  };
}

const LoginAccountCreate = () => {
  const stats = [
    { id: 1, 
      name: "Find LGBTQ+ media content", 
      value: "Discover" },
    { id: 2, 
      name: "Share favorite queer stories safely", 
      value: "Share" },
    {
      id: 3,
      name: "Have in discussions about representation",
      value: "Engage",
    },
    {
      id: 4,
      name: "Connecting with passionate LGBTQ+ community",
      value: "Celebrate",
    },
  ];

  return (
    <>
      <div className="bg-white">
        <main className="isolate">
          {/* Content section */}
          <div className="mt-20 overflow-hidden sm:mt-20 text-center">
            <div className="mt-6 mb-10 flex flex-col justify-center gap-4 w-96 mx-auto">
              <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Get started sharing
              </h2>
              <p className="text-gray-600 mb-10">
                Sign in below to create or access your account.
              </p>
              <div className="relative">
                <div
                  className="absolute inset-0 flex items-center"
                  aria-hidden="true"
                >
                  <div className="w-full border-t border-gray-200" />
                </div>
                <div className="relative flex justify-center text-sm font-medium leading-6">
                  <span className="bg-white px-6 text-gray-900">
                    Sign in with
                  </span>
                </div>
              </div>

              <button
                onClick={handleSignInGoogle()}
                className="flex w-full items-center justify-center gap-3 rounded-md bg-[#3cba54] px-3 py-1.5 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D9BF0]"
              >
                <svg
                  className="h-5 w-5"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 488 512"
                >
                  <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
                </svg>

                <span className="text-sm font-semibold leading-6">Google</span>
              </button>

              <button
                onClick={handleSignInGithub()}
                className="flex w-full items-center justify-center gap-3 rounded-md bg-[#24292F] px-3 py-1.5 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D9BF0]"
              >
                <svg
                  className="h-5 w-5"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm font-semibold leading-6">GitHub</span>
              </button>

              <button
                onClick={handleSignInFacebook()}
                className="flex w-full items-center justify-center gap-3 rounded-md bg-[#4267B2] px-3 py-1.5 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D9BF0]"
              >
                <svg
                  className="h-5 w-5"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 512 512"
                >
                  <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
                </svg>
                <span className="text-sm font-semibold leading-6">
                  Facebook
                </span>
              </button>
            </div>

            <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
              <div className="mx-auto mt-32 grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
                <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
                  <dl className="mt-8 grid grid-cols-2 gap-1 overflow-hidden rounded-2xl text-center  xl:grid-cols-2 lg:grid-cols-2">
                    {stats.map((stat) => (
                      <div
                        key={stat.id}
                        className="flex flex-col bg-gray-400/5 p-8"
                      >
                        <dt className="text-sm leading-6 text-gray-600">
                          {stat.name}
                        </dt>
                        <dd className="order-first text-xl font-semibold tracking-tight text-gray-900">
                          {stat.value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>

                <div className="hidden flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
                  <div className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
                    <img
                      src="https://legendary-digital-network-assets.s3.amazonaws.com/wp-content/uploads/2022/06/27111259/TheUmbrellaAcademy_Season3_Episode2_00_39_44_00R-1-1.jpg"
                      alt=""
                      className="aspect-[7/5] w-[37rem] max-w-none rounded-2xl bg-gray-50 object-cover"
                    />
                  </div>
                  <div className="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8">
                    <div className="order-first flex w-64 flex-none justify-end self-end lg:w-auto">
                      <img
                        src="https://www.leparisien.fr/resizer/suMLBvWEOViLymtKTpIeUlHpyH4=/932x582/cloudfront-eu-central-1.images.arcpublishing.com/leparisien/CAGQIFXKTVFKBEMOMCM3JVQWUU.jpg"
                        alt=""
                        className="aspect-[4/3] w-[24rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                      />
                    </div>
                    <div className="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none">
                      <img
                        src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2022%2F07%2F26%2FChante-Adams-Abbi-Jacobson-a-league-of-their-own-072622-1.jpg"
                        alt=""
                        className="aspect-[7/5] w-[37rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                      />
                    </div>
                    <div className="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
                      <img
                        src="https://64.media.tumblr.com/605fb8c257831cfcbd062398b73f90c1/2a77fc4c481f0914-7d/s540x810/40e1023c1dbcc0185d0effb0b02eb17b5e8b791b.gifv"
                        alt=""
                        className="aspect-[4/3] w-[24rem] max-w-none rounded-2xl bg-gray-50 object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default LoginAccountCreate;
