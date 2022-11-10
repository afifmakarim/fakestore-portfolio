import { Fragment, useState, useEffect } from "react";
import { Popover, Transition, Menu } from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
  MagnifyingGlassIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { useToggle } from "react-power-ups";
import OffcanvasMobile from "./OffcanvasMobile";
import DropdownCart from "./DropdownCart";
import { useRouter } from "next/router";
import Cookies from "js-cookie";

const navMenu: any[] = [
  {
    name: "electronics",
    href: "/products?categories=electronics&page=1",
  },
  {
    name: "jewelery",
    href: "/products?categories=jewelery&page=1",
  },
  {
    name: "men's clothing",
    href: "/products?categories=men's clothing&page=1",
  },
  {
    name: "women's clothing",
    href: "/products?categories=women's clothing&page=1",
  },
];

const profileMenu: any[] = [
  {
    name: "My Account",
    href: "#",
  },
  {
    name: "My Wish List",
    href: "#",
  },
  {
    name: "Compare",
    href: "#",
  },
  {
    name: "Sign In",
    href: "/login",
  },
];

export default function Navbar() {
  const [toggle, setToggle] = useState(false);
  const [showSearchbar, toggleShowSearchbar] = useToggle();
  const [searchBar, setSearchBar] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchBar !== "") {
      router.push({
        pathname: "/results/",
        query: { search_query: searchBar },
      });
    } else {
      return null;
    }
  };

  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const token = Cookies.get("authToken");

    if (token) {
      setIsLogin(true);
    }
  }, []);

  const onLogout = () => {
    Cookies.remove("authToken");
    router.push("/");
    setIsLogin(false);
  };

  return (
    <>
      <Popover className="relative bg-blueTheme md:bg-white border-b-2">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex items-center justify-between py-6 space-x-3">
            <div className="md:hidden">
              {/* -my-2 -mr-2*/}
              <button
                onClick={() => setToggle(true)}
                className="inline-flex items-center justify-center rounded-md p-2 text-white "
              >
                <span className="sr-only">Open menu</span>
                <Bars3Icon className="h-8 w-8 " aria-hidden="true" />
              </button>
            </div>
            <form
              className="md:hidden relative rounded-md shadow-sm w-full"
              onSubmit={handleSubmit}
            >
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <span className="text-gray-500 sm:text-sm">
                  <MagnifyingGlassIcon
                    className="h-6 w-6 text-gray"
                    aria-hidden="true"
                  />
                </span>
              </div>
              <input
                className="block w-full rounded-full border-gray-300 pl-10 py-3 pr-6 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm "
                placeholder="Search here"
                value={searchBar}
                onChange={(e) => setSearchBar(e.target.value)}
              />
            </form>
            <div className="md:hidden flex flex-end space-x-3">
              <DropdownCart />
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button
                    className="inline-flex w-full justify-center"
                    aria-label="profile-btn"
                  >
                    <UserCircleIcon
                      className="h-8 w-8 text-white"
                      aria-hidden="true"
                    />
                  </Menu.Button>
                </div>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="z-10 absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="px-1 py-1 ">
                      {profileMenu.map((item, idx) => (
                        <Menu.Item key={idx}>
                          {({ active }) => (
                            <Link
                              className={`${
                                active
                                  ? "bg-blueTheme text-white"
                                  : "text-gray-900"
                              } group flex w-full items-center px-2 py-2 text-sm`}
                              href={item.href}
                            >
                              {item.name}
                            </Link>
                          )}
                        </Menu.Item>
                      ))}
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
            <div className="hidden md:flex">
              <Link href="/">
                <span className="sr-only">Your Company</span>
                <Image
                  className="h-8 w-auto sm:h-10"
                  src="/icons/logo.svg"
                  alt="logo"
                  width={150}
                  height={150}
                />
              </Link>
            </div>
            {showSearchbar ? (
              <form
                className="hidden relative rounded-md w-3/4 md:flex"
                onSubmit={handleSubmit}
              >
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <span className="text-gray-500 sm:text-sm">
                    <MagnifyingGlassIcon
                      className="h-6 w-6 text-gray"
                      aria-hidden="true"
                    />
                  </span>
                </div>
                <input
                  type="text"
                  className="block rounded-full w-full pl-10 py-2 pr-6 bg-[#F5F7FF] focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm "
                  placeholder="Search here"
                  value={searchBar}
                  onChange={(e) => setSearchBar(e.target.value)}
                />
              </form>
            ) : (
              <Popover.Group as="nav" className="hidden space-x-8 md:flex">
                {navMenu.map((item, idx) => (
                  <Link
                    key={idx}
                    href={item.href}
                    className="text-sm font-medium text-gray-500 hover:text-gray-900 capitalize"
                  >
                    {item.name}
                  </Link>
                ))}
              </Popover.Group>
            )}

            <div className="hidden items-center justify-between gap-4 md:flex space-x-4">
              <button
                className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
                onClick={toggleShowSearchbar}
              >
                {showSearchbar ? (
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                ) : (
                  <MagnifyingGlassIcon className="h-6 w-6" aria-hidden="true" />
                )}
              </button>
              <DropdownCart desktopView />
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button
                    className="inline-flex w-full justify-center"
                    aria-label="profile-btn"
                  >
                    <Image
                      className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
                      src="/icons/profile.avif"
                      width={150}
                      height={150}
                      alt="avatar"
                    />
                  </Menu.Button>
                </div>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="z-10 absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="px-1 py-1 ">
                      {profileMenu.map((item, idx) => (
                        <Menu.Item key={idx}>
                          {({ active }) => (
                            <Link
                              className={`${
                                active
                                  ? "bg-blueTheme text-white"
                                  : "text-gray-900"
                              } group flex w-full items-center px-2 py-2 text-sm`}
                              href={item.href}
                              onClick={
                                isLogin && item.name === "Sign In"
                                  ? onLogout
                                  : () => console.log("test")
                              }
                            >
                              {isLogin && item.name === "Sign In"
                                ? "Sign Out"
                                : item.name}
                            </Link>
                          )}
                        </Menu.Item>
                      ))}
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
          </div>
        </div>
        <OffcanvasMobile
          toggle={toggle}
          setToggle={setToggle}
          navMenu={navMenu}
        />
      </Popover>
    </>
  );
}
