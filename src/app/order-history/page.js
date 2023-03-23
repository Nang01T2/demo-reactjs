//"use client";
import React from "react";
import AuthPage from "../components/AuthPage";
import OrderHistory from "./components/OrderHistory";

export default function OrderHistoryPage() {
  return (
    <AuthPage>
      <OrderHistory />
    </AuthPage>
  );
}
