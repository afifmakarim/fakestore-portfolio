import React from "react";
import { Disclosure } from "@headlessui/react";
import {
  ChevronDownIcon,
  EnvelopeIcon,
  PhoneIcon,
} from "@heroicons/react/20/solid";

export default function Footer() {
  const collapseMenu: any[] = [
    {
      name: "Information",
      childMenu: [
        {
          name: "CPUS",
          href: "#",
        },
        {
          name: "Add On Cards",
          href: "#",
        },
        {
          name: "Hard Drives (Internal)",
          href: "#",
        },
        {
          name: "Graphic Cards",
          href: "#",
        },
        {
          name: "Keyboards / Mice",
          href: "#",
        },
        {
          name: "Cases / Power Supplies / Cooling",
          href: "#",
        },
        {
          name: "RAM (Memory)",
          href: "#",
        },
      ],
    },
    {
      name: "Desktop PCs",
      childMenu: [
        {
          name: "CPUS",
          href: "#",
        },
        {
          name: "Add On Cards",
          href: "#",
        },
        {
          name: "Hard Drives (Internal)",
          href: "#",
        },
        {
          name: "Graphic Cards",
          href: "#",
        },
        {
          name: "Keyboards / Mice",
          href: "#",
        },
        {
          name: "Cases / Power Supplies / Cooling",
          href: "#",
        },
        {
          name: "RAM (Memory)",
          href: "#",
        },
      ],
    },
    {
      name: "Laptops",
      childMenu: [
        {
          name: "CPUS",
          href: "#",
        },
        {
          name: "Add On Cards",
          href: "#",
        },
        {
          name: "Hard Drives (Internal)",
          href: "#",
        },
        {
          name: "Graphic Cards",
          href: "#",
        },
        {
          name: "Keyboards / Mice",
          href: "#",
        },
        {
          name: "Cases / Power Supplies / Cooling",
          href: "#",
        },
        {
          name: "RAM (Memory)",
          href: "#",
        },
      ],
    },
  ];

  const IsMobile = () => (
    <div className="flex md:hidden">
      <div className="w-full">
        {collapseMenu.map((item, idx) => (
          <Disclosure key={idx}>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between border-b py-4 text-left text-sm font-medium ">
                  <span>{item.name}</span>
                  <ChevronDownIcon
                    className={`${
                      open ? "rotate-180 transform" : ""
                    } h-5 w-5 text-purple-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pb-2 text-sm text-gray-500 flex flex-col">
                  {item.childMenu.map((itemChild, idxChild) => (
                    <a
                      key={idxChild}
                      href="#"
                      className="block px-2 pt-4 text-sm text-slate-500 font-light capitalize transition-colors duration-300 transform hover:text-white"
                    >
                      {itemChild.name}
                    </a>
                  ))}
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        ))}
      </div>
    </div>
  );
  return (
    <>
      <footer className="text-white body-font bg-black">
        <div className="container px-4 py-8 mx-auto max-w-7xl">
          <div className="flex md:flex-row flex-col md:justify-between items-center">
            <div className="flex flex-col text-center md:text-left">
              <h1 className="text-xl md:text-2xl">
                Sign Up To Our Newsletter.
              </h1>
              <p className="font-light text-xs pt-2">
                Be the first to hear about the latest offers.
              </p>
            </div>
            <div className="my-4 flex gap-2">
              <input
                className="bg-black px-4 py-2 border-2 border-white rounded-md w-3/5"
                placeholder="Your Email"
              />
              <button className="rounded-full border-0 px-12 py-2 text-sm bg-blueTheme ">
                Subscribe
              </button>
            </div>
          </div>
          <IsMobile />
          <div className="py-12 mx-auto md:flex hidden md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
            <div className="flex-grow flex flex-wrap md:pr-20 -mb-10 md:text-left text-center order-first">
              {collapseMenu.map((item, idx) => (
                <div className="lg:w-1/4 md:w-1/2 w-full pr-5" key={idx}>
                  <h2 className="title-font font-medium text-gray-300 tracking-widest text-sm mb-3">
                    {item.name}
                  </h2>
                  <nav className="list-none mb-10">
                    {item.childMenu.map((itemChild, idxChild) => (
                      <li key={idxChild}>
                        <a
                          className="text-gray-600 hover:text-white"
                          href={itemChild.href}
                        >
                          {itemChild.name}
                        </a>
                      </li>
                    ))}
                  </nav>
                </div>
              ))}
            </div>
          </div>
          <div className="container pt-8 mx-auto flex justify-between items-center">
            <div className="flex text-white gap-2">
              <EnvelopeIcon className="h-5 w-5" />
              <PhoneIcon className="h-5 w-5" />
            </div>
            <div className="text-xs">Copyright 2020 Shop Pty. Ltd.</div>
          </div>
        </div>
      </footer>
    </>
  );
}
