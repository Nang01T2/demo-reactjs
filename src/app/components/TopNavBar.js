"use client";
import Link from "next/link";
import React from "react";
import CartItem from "./CartItem";
import { useSession } from "next-auth/react";
import DropdownUserMenu from "./DropdownUserMenu";

export default function TopNavBar() {
  const { data: session } = useSession();
  return (
    <>
      <Link href="/" className="text-lg font-bold">
        Shopping
      </Link>
      <div>
        <CartItem />
        {session?.user ? (
          <DropdownUserMenu userInfo={session.user} />
        ) : (
          <Link href="/login" className="p-2">
            Login
          </Link>
        )}
      </div>
    </>
  );
}
