import React from "react";
import AuthPage from "../components/AuthPage";
import CheckoutWizard from "../components/CheckoutWizard";
import ShippingAddress from "./components/ShippingAddress";

export default function ShippingPage() {
  return (
    <AuthPage>
      <CheckoutWizard activeStep={0} />
      <ShippingAddress />
    </AuthPage>
  );
}
