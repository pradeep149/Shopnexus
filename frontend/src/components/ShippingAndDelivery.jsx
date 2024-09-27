import React from "react";

const ShippingAndDelivery = () => {
  return (
    <div className="shipping-policy-container p-8">
      <h1 className="text-2xl font-bold mb-4">Shipping and Delivery Policy</h1>
      <p className="text-sm text-gray-600">
        Last updated on <strong>Sep 25, 2024</strong>
      </p>

      <p className="mt-4">
        For international buyers, orders are shipped and delivered through
        registered international courier companies and/or International speed
        post only. For domestic buyers, orders are shipped through registered
        domestic courier companies and/or speed post only.
      </p>

      <p className="mt-4">
        Orders are shipped within 0-7 days or as per the delivery date agreed at
        the time of order confirmation. The delivery of the shipment is subject
        to courier company or post office norms.{" "}
        <strong>NETHETI PRADEEP</strong> is not liable for any delay in delivery
        by the courier company or postal authorities. We only guarantee to hand
        over the consignment to the courier company or postal authorities within
        0-7 days from the date of order and payment, or as per the delivery date
        agreed at the time of order confirmation.
      </p>

      <p className="mt-4">
        Delivery of all orders will be made to the address provided by the
        buyer. Delivery of our services will be confirmed through the email ID
        specified during registration.
      </p>

      <p className="mt-4">
        For any issues in utilizing our services, you may contact our helpdesk
        at:
      </p>
      <ul className="list-disc ml-6 mt-2">
        <li>Phone: 9063506254</li>
        <li>Email: npradeep1149@gmail.com</li>
      </ul>
    </div>
  );
};

export default ShippingAndDelivery;
