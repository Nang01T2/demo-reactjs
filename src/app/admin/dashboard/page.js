import AuthPage from "@/app/components/AuthPage";
import Link from "next/link";
import React from "react";

export default function DashboardPage() {
  return (
    <div>
      <AuthPage adminOnly={true}>
        <div className="grid  md:grid-cols-4 md:gap-5">
          <div>
            <ul>
              <li>
                <Link href="/admin/dashboard" className="font-bold">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link href="/admin/orders">Orders</Link>
              </li>
              <li>
                <Link href="/admin/products">Products</Link>
              </li>
              <li>
                <Link href="/admin/users">Users</Link>
              </li>
            </ul>
          </div>
          <div className="md:col-span-3">
            <h1 className="mb-4 text-xl">Admin Dashboard</h1>
          </div>
        </div>
      </AuthPage>
    </div>
  );
}
