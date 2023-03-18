//"use client";
import Unauthorized from "./Unauthorized";
import { headers } from "next/headers";
//import { useSession } from "next-auth/react";

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

export default async function AuthPage({ message, children }) {
  const session = await getSession();
  //const { data: session } = useSession();
  if (session?.user) {
    return <>{children}</>;
  }
  return <Unauthorized message={message} />;
}
