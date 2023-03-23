"use client";
import { Menu } from "@headlessui/react";
import React from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import DropdownLink from "./DropdownLink";
import { useDispatch } from "react-redux";
import { resetCart } from "@/slices/cartSlice";
import { signOut } from "next-auth/react";

export default function DropdownUserMenu({ userInfo }) {
  let { name, isAdmin } = userInfo;
  const dispatch = useDispatch();
  const logoutClickHandler = () => {
    dispatch(resetCart());
    signOut({ callbackUrl: "/login" });
  };

  return (
    <>
      <Menu as="div" className="relative inline-block text-left">
        <Menu.Button className="inline-flex w-full justify-center rounded-md bg-white bg-opacity-20 py-2 text-sm font-medium text-blue-600 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
          {name}
          <ChevronDownIcon
            className="ml-2 -mr-1 h-5 w-5 text-blue-600 hover:text-blue-800"
            aria-hidden="true"
          />
        </Menu.Button>
        <Menu.Items className="absolute right-0 w-56 origin-top-right bg-white  shadow-lg ">
          <Menu.Item>
            <DropdownLink className="dropdown-link" href="/profile">
              Profile
            </DropdownLink>
          </Menu.Item>
          <Menu.Item>
            <DropdownLink className="dropdown-link" href="/order-history">
              Order History
            </DropdownLink>
          </Menu.Item>
          {isAdmin && (
            <Menu.Item>
              <DropdownLink className="dropdown-link" href="/admin/dashboard">
                Admin Dashboard
              </DropdownLink>
            </Menu.Item>
          )}
          <Menu.Item>
            <a className="dropdown-link" href="#" onClick={logoutClickHandler}>
              Logout
            </a>
          </Menu.Item>
        </Menu.Items>
      </Menu>
    </>
  );
}
