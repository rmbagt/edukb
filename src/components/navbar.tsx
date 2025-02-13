"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Input } from "./ui/input";
import { IoCloseSharp, IoMenu } from "react-icons/io5";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { MdKeyboardArrowDown, MdLogout } from "react-icons/md";
import { ModeToggle } from "./mode-toggle";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [isShow, setIsShow] = useState<boolean>(false);

  const handleLogout = () => {
    console.log("logout");
  };

  return (
    <div className="z-50 flex w-full items-center justify-center transition-all duration-300">
      {isOpen && (
        <>
          {/* Click everywhere to close the Navbar on mobile */}
          {/* <div
              className="md:hidden fixed top-0 w-full h-full"
              onClick={() => setIsOpen(false)}
            /> */}
          <div className="fixed top-0 z-50 flex w-full items-center justify-center bg-opacity-50 md:hidden">
            <div className="flex w-full flex-col gap-6 bg-white p-10 shadow-lg dark:bg-gray-700">
              <div className="flex items-center justify-between">
                <Link href="#" className="font-bold md:text-[24px]">
                  <Image
                    src="/logo/logo-text.png"
                    alt="profile"
                    className="h- aspect-video overflow-hidden rounded-full"
                    width={100}
                    height={100}
                  />
                </Link>
                <IoCloseSharp
                  className="text-2xl"
                  onClick={() => setIsOpen(false)}
                />
              </div>
              <div className="flex items-center justify-between"></div>
              <div className="flex w-full items-center justify-center gap-4">
                <Input
                  placeholder="Search..."
                  value={search}
                  className="w-3/4 rounded-xl border px-2 outline-none"
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
            </div>
          </div>
        </>
      )}
      <div className="flex w-full items-center justify-between gap-6 border-b bg-white px-4 py-2 dark:bg-gray-800">
        <Link href="#" className="font-bold md:text-[24px]">
          <Image
            src="/logo/logo-text.png"
            alt="profile"
            className="h- aspect-video overflow-hidden rounded-full"
            width={200}
            height={200}
          />
        </Link>
        <div className="flex w-full items-center justify-between gap-4">
          <div className="relative hidden items-center justify-center gap-1 md:flex md:gap-2">
            <ul className="flex gap-4">
              <li className="flex items-center gap-1">
                <p className="font-semibold">Informasi tambahan</p>
                <MdKeyboardArrowDown />
              </li>
              <li className="flex items-center gap-1">
                <p className="font-semibold">Kunjungan ulang</p>
                <MdKeyboardArrowDown />
              </li>
              <li className="flex items-center gap-1">
                <p className="font-semibold">Kebutuhan khusus</p>
                <MdKeyboardArrowDown />
              </li>
            </ul>
          </div>
          <div className="hidden md:block">
            <Input
              placeholder="Search..."
              value={search}
              className="rounded-xl border px-2 outline-none"
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
        <div className="block md:hidden">
          <IoMenu className="text-3xl" onClick={() => setIsOpen(true)} />
        </div>
      </div>
    </div>
  );
}
