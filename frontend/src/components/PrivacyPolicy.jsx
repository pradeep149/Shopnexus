import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-semibold mb-4">Privacy Policy</h1>
      <p className="text-gray-600 mb-6">Last Updated: [Insert Date]</p>

      <p className="mb-6">
        Welcome to <strong>ShopNexus</strong>! We value your privacy and are
        committed to protecting your personal information. This Privacy Policy
        outlines how we collect, use, and safeguard the information you provide
        when using our website.
      </p>

      <h2 className="text-2xl font-semibold mb-3">1. Information We Collect</h2>

      <h3 className="text-xl font-semibold mb-2">1.1 Personal Information</h3>
      <p className="mb-4">
        This includes any details you provide during registration, checkout, or
        account creation, such as:
      </p>
      <ul className="list-disc pl-6 mb-6">
        <li>Name</li>
        <li>Email Address</li>
        <li>Shipping Address</li>
        <li>Payment Information (e.g., credit card details)</li>
        <li>Phone Number</li>
      </ul>

      <h3 className="text-xl font-semibold mb-2">
        1.2 Non-Personal Information
      </h3>
      <p className="mb-6">
        We also gather non-identifiable data for analytics and improving user
        experience, such as:
      </p>
      <ul className="list-disc pl-6 mb-6">
        <li>Browser type and version</li>
        <li>Device type (e.g., mobile or desktop)</li>
        <li>IP address</li>
        <li>Browsing habits and pages visited</li>
        <li>Referral sources</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-3">
        2. How We Use Your Information
      </h2>
      <p className="mb-6">
        We collect and use your information for the following purposes:
      </p>
      <ul className="list-disc pl-6 mb-6">
        <li>
          <strong>Processing Transactions:</strong> To fulfill your orders,
          process payments, and provide customer support.
        </li>
        <li>
          <strong>Account Management:</strong> To help you manage your account
          settings and preferences.
        </li>
        <li>
          <strong>Marketing & Communications:</strong> To send you promotional
          offers, newsletters, and updates, if you have opted into receiving
          these.
        </li>
        <li>
          <strong>Website Improvement:</strong> To analyze how users interact
          with our site and improve our offerings and services.
        </li>
        <li>
          <strong>Security & Fraud Prevention:</strong> To protect against
          unauthorized access, ensure your data’s safety, and prevent fraud.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mb-3">
        3. Cookies and Tracking Technologies
      </h2>
      <p className="mb-6">
        We use cookies and similar tracking technologies to enhance your
        browsing experience. Cookies allow us to:
      </p>
      <ul className="list-disc pl-6 mb-6">
        <li>Remember your login details and preferences</li>
        <li>Keep items in your cart while shopping</li>
        <li>Track website analytics and performance</li>
        <li>Personalize your experience based on your browsing behavior</li>
      </ul>
      <p className="mb-6">
        You can manage your cookie preferences in your browser settings.
        However, disabling cookies may affect your shopping experience.
      </p>

      <h2 className="text-2xl font-semibold mb-3">4. Third-Party Services</h2>

      <h3 className="text-xl font-semibold mb-2">4.1 Payment Processors</h3>
      <p className="mb-6">
        We work with trusted third-party payment processors to handle
        transactions securely. These providers adhere to strict security
        standards, and we do not store your full payment information.
      </p>

      <h3 className="text-xl font-semibold mb-2">4.2 Shipping Partners</h3>
      <p className="mb-6">
        To fulfill your orders, we share your shipping information with courier
        services. These partners use your information solely for delivery
        purposes.
      </p>

      <h3 className="text-xl font-semibold mb-2">4.3 Analytics & Marketing</h3>
      <p className="mb-6">
        We use third-party analytics tools (e.g., Google Analytics) to
        understand user behavior and improve our services. Third-party marketing
        tools may also use your data to present personalized ads.
      </p>

      <h2 className="text-2xl font-semibold mb-3">5. Data Security</h2>
      <p className="mb-6">
        Your personal data is important to us, and we implement
        industry-standard security measures to protect it. However, no method of
        transmission over the Internet is completely secure, so we cannot
        guarantee absolute security. In the event of a data breach, we will
        notify you as required by law.
      </p>

      <h2 className="text-2xl font-semibold mb-3">6. Your Rights</h2>
      <p className="mb-6">
        You have certain rights regarding your personal data:
      </p>
      <ul className="list-disc pl-6 mb-6">
        <li>
          <strong>Access & Correction:</strong> You can access and update your
          account information at any time.
        </li>
        <li>
          <strong>Deletion:</strong> You may request that we delete your
          personal information, subject to legal and operational limitations.
        </li>
        <li>
          <strong>Opt-Out:</strong> You can opt out of receiving marketing
          emails by following the unsubscribe instructions in any promotional
          email or adjusting your account settings.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mb-3">7. Children’s Privacy</h2>
      <p className="mb-6">
        Our website is not intended for children under the age of 13. We do not
        knowingly collect personal information from children. If you believe a
        child has provided us with personal data, please contact us immediately.
      </p>

      <h2 className="text-2xl font-semibold mb-3">8. Updates to this Policy</h2>
      <p className="mb-6">
        We may update this Privacy Policy from time to time to reflect changes
        in our practices. When we do, we will revise the "Last Updated" date at
        the top of the page. We encourage you to review this policy
        periodically.
      </p>

      <h2 className="text-2xl font-semibold mb-3">9. Contact Us</h2>
      <p className="mb-6">
        If you have any questions about this Privacy Policy or how we handle
        your personal information, please reach out to us at:
      </p>
      <p className="mb-2">
        <strong>Email:</strong> privacy@shopnexus.com
      </p>

      <p className="text-gray-500 mt-6">
        Your trust matters to us. We are committed to keeping your data safe and
        respecting your privacy.
      </p>
    </div>
  );
};

export default PrivacyPolicy;
