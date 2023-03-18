import AuthPage from "@/app/components/AuthPage";
import React from "react";
import OrderDetail from "../components/OrderDetail";

export default function OrderPage({ params }) {
  const { id: orderId } = params;

  return (
    <AuthPage message={"Signin required"}>
      <OrderDetail orderId={orderId} />
    </AuthPage>
  );
}
