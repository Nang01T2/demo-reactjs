import "@/styles/globals.css";
import { StoreContext } from "@/utils/StoreContext";
import AuthContext from "@/utils/AuthContext";
import { headers } from "next/headers";
import TopNavBar from "./components/TopNavBar";
import Toaster from "./components/Toaster";

async function getSession() {
  let cookie = headers().get("cookie") ?? "";
  const response = await fetch(
    `${process.env.LOCAL_AUTH_URL}/api/auth/session`,
    {
      headers: {
        cookie,
      },
    }
  );

  const session = await response.json();

  return Object.keys(session).length > 0 ? session : null;
}

export default async function RootLayout({ children }) {
  const session = await getSession();
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <StoreContext>
          <AuthContext session={session}>
            <div className="flex min-h-screen flex-col justify-between ">
              <header>
                <nav className="flex h-12 items-center px-4 justify-between shadow-md">
                  <TopNavBar />
                </nav>
              </header>
              <Toaster />
              <main className="container m-auto mt-4 px-4">{children}</main>
              <footer className="flex h-10 justify-center items-center shadow-inner">
                <p>Copyright © 2022 Shopping</p>
              </footer>
            </div>
          </AuthContext>
        </StoreContext>
      </body>
    </html>
  );
}
