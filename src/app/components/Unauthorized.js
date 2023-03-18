import React from "react";

export default function Unauthorized({ message }) {
  return (
    <div>
      <h1 className="text-xl">Access Denied</h1>
      {message && <div className="mb-4 text-red-500">{message}</div>}
    </div>
  );
}
