import React from "react";
import AuthPage from "../components/AuthPage";
import CheckoutWizard from "../components/CheckoutWizard";
import PaymentMethod from "./components/PaymentMethod";

export default function PaymentPage() {
  return (
    <AuthPage>
      <CheckoutWizard activeStep={1} />
      <PaymentMethod />
    </AuthPage>
  );
}
