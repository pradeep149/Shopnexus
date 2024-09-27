import React from "react";

const CancellationAndRefund = () => {
  return (
    <div className="refund-policy-container p-8">
      <h1 className="text-2xl font-bold mb-4">
        Cancellation and Refund Policy
      </h1>
      <p className="text-sm text-gray-600">
        Last updated on <strong>Sep 25, 2024</strong>
      </p>

      <p className="mt-4">
        <strong>NETHETI PRADEEP</strong> believes in helping its customers as
        much as possible and has therefore implemented a liberal cancellation
        policy. Under this policy:
      </p>

      <h2 className="text-xl font-semibold mt-6">Cancellation Policy</h2>
      <ul className="list-disc ml-6 mt-2">
        <li>
          Cancellations will be considered only if the request is made within
          2-3 days of placing the order. However, the cancellation request may
          not be entertained if the orders have been communicated to the
          vendors/merchants and they have initiated the process of shipping
          them.
        </li>
        <li>
          <strong>NETHETI PRADEEP</strong> does not accept cancellation requests
          for perishable items like flowers, eatables, etc. However, a
          refund/replacement can be made if the customer establishes that the
          quality of the product delivered is not good.
        </li>
      </ul>

      <h2 className="text-xl font-semibold mt-6">
        Refund for Damaged or Defective Items
      </h2>
      <p className="mt-2">
        In case of receipt of damaged or defective items, please report the same
        to our Customer Service team. The request will be entertained once the
        merchant has checked and determined the same at their end. This should
        be reported within 2-3 days of receipt of the products.
      </p>

      <h2 className="text-xl font-semibold mt-6">Products Not as Expected</h2>
      <p className="mt-2">
        In case you feel that the product received is not as shown on the site
        or does not meet your expectations, you must bring it to the notice of
        our Customer Service within 2-3 days of receiving the product. The
        Customer Service Team will review your complaint and take an appropriate
        decision.
      </p>

      <h2 className="text-xl font-semibold mt-6">Warranty Issues</h2>
      <p className="mt-2">
        For complaints regarding products that come with a warranty from the
        manufacturer, please refer the issue to them directly.
      </p>

      <h2 className="text-xl font-semibold mt-6">Refund Processing</h2>
      <p className="mt-2">
        In case any refunds are approved by <strong>NETHETI PRADEEP</strong>, it
        will take 3-4 days for the refund to be processed to the end customer.
      </p>
    </div>
  );
};

export default CancellationAndRefund;
