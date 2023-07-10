import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useSession } from "@supabase/auth-helpers-react";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import Link from "next/link";
import Logo from "./Logo";
import {
  Bars3Icon,
  HomeIcon,
  BellAlertIcon,
  UserCircleIcon,
  XMarkIcon,
  ArrowLeftOnRectangleIcon,
  TvIcon,
} from "@heroicons/react/24/outline";
import { useRouter } from "next/router";
import Footer from "./footer";

interface LayoutProps {
  children: React.ReactNode;
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const supabase = useSupabaseClient();
  const session = useSession();
  const router = useRouter();

  const navigation = [
    {
      name: "Home",
      href: "/",
      icon: HomeIcon,
    },
    {
      name: "Titles",
      href: "/media/all-titles",
      icon: TvIcon,
    },
    // {
    //   name: "Notifications",
    //   href: "/notifications",
    //   icon: BellAlertIcon,
    // },
    {
      name: "Profile",
      href: `/profile/${session?.user.id}`,
      icon: UserCircleIcon,
    },
  ];

  async function signout() {
    const { error } = await supabase.auth.signOut();
  }

  function isActiveRoute(href: string) {
    return href === router.asPath ? true : false;
  }

  return (
    <>
      <div>
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-50 lg:hidden"
            onClose={setSidebarOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-50" />
            </Transition.Child>

            <div className="fixed inset-0 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                      <button
                        type="button"
                        className="-m-2.5 p-2.5"
                        onClick={() => setSidebarOpen(false)}
                      >
                        <span className="sr-only">Close sidebar</span>
                        <XMarkIcon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                  </Transition.Child>

                  <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-50 px-6 pb-2 ring-1 ring-white/10">
                    <div className="flex h-16 shrink-0 items-center">
                      <Logo />
                    </div>
                    <nav className="flex flex-1 flex-col">
                      <ul role="list" className="-mx-2 flex-1 space-y-1">
                        {navigation.map((item) => (
                          <li key={item.name}>
                            <a
                              href={item.href}
                              className={classNames(
                                isActiveRoute(item.href)
                                  ? "bg-gray-200 text-gray-900"
                                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-100",
                                "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                              )}
                            >
                              <item.icon
                                className="h-6 w-6 shrink-0"
                                aria-hidden="true"
                              />
                              {item.name}
                            </a>
                          </li>
                        ))}
                        {/* Sign out button */}
                        {session && (
                          <li className="flex items-center group gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold text-gray-600 hover:text-gray-900 hover:bg-gray-100">
                            <button onClick={() => signout()} type="button">
                              <div className="flex items-center gap-x-2">
                                <ArrowLeftOnRectangleIcon className="h-6 w-6 mr-1" />
                                Logout
                              </div>
                            </button>
                          </li>
                        )}
                      </ul>
                    </nav>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        <div className="hidden lg:flex lg:justify-between lg:items-center lg:overflow-x-auto">
          <div className="flex h-16 shrink-0 px-4 items-center justify-center">
            <Logo />
          </div>
          <nav>
            <ul role="list" className="flex items-center mx-8">
              {navigation.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className={classNames(
                      isActiveRoute(item.href)
                        ? "bg-gray-200 text-gray-900"
                        : "text-gray-600 hover:text-gray-900 hover:bg-gray-100",
                      "group flex gap-x-3 rounded-md p-3 text-sm leading-6 font-semibold"
                    )}
                  >
                    {/* <item.icon
                      className="h-6 w-6 shrink-0"
                      aria-hidden="true"
                    /> */}
                    {/* <span className="sr-only">{item.name}</span> */}
                    {item.name}
                  </a>
                </li>
              ))}

              {/* Sign out button} */}
              {session && (
                <li className="flex items-center group flex gap-x-3 rounded-md p-3 text-sm leading-6 font-semibold text-gray-600 hover:text-gray-900 hover:bg-gray-100">
                  <button onClick={() => signout()} type="button">
                    {/* <ArrowLeftOnRectangleIcon className="h-6 w-6 mr-1" /> */}
                    Logout
                  </button>
                </li>
              )}
            </ul>
          </nav>
        </div>

        <div className="sticky top-0 z-40 flex items-center gap-x-6  px-4 py-4 shadow-sm sm:px-6 lg:hidden">
          <button
            type="button"
            className="-m-2.5 p-2.5 text-gray-900 lg:hidden"
            onClick={() => setSidebarOpen(true)}
          >
            <span className="sr-only">Open sidebar</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
          <div className="flex-1 text-sm font-semibold leading-6 text-gray-900"></div>

          {session && (
            <a href="#">
              <span className="sr-only">Your profile</span>
              <img
                className="h-8 w-8 rounded-full bg-gray-50"
                src={session?.user.user_metadata.avatar_url}
                alt="profile-pic"
                onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                  e.currentTarget.src =
                    "https://st3.depositphotos.com/6672868/13701/v/600/depositphotos_137014128-stock-illustration-user-profile-icon.jpg";
                }}
              />
            </a>
          )}
        </div>

        <main>
          <div className="px-4 py-10 sm:px-6 lg:px-8 lg:py-6">{children}</div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
