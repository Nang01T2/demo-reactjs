import React from "react";
import AuthPage from "../components/AuthPage";
import CheckoutWizard from "../components/CheckoutWizard";
import PlaceOrder from "./components/PlaceOrder";

export default function PlaceOrderPage() {
  return (
    <AuthPage>
      <CheckoutWizard activeStep={2} />
      <PlaceOrder />
    </AuthPage>
  );
}
