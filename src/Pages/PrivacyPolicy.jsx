import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 ">
      <h1 className="text-3xl font-bold mb-6 text-center">Privacy Policy</h1>

      <p className="mb-4">Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your information when you use our website.</p>

      <h2 className="text-xl font-semibold mt-6 mb-2">1. Information We Collect</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>Your name and email (when you sign up or subscribe)</li>
        <li>Usage data, such as pages visited and time spent</li>
        <li>Device and browser information</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">2. How We Use Your Information</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>To provide and improve our services</li>
        <li>To send updates, newsletters, or promotions (if you subscribe)</li>
        <li>To analyze website performance</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">3. Data Protection</h2>
      <p className="mb-4">We take appropriate security measures to protect your data from unauthorized access, loss, or misuse.</p>

      <h2 className="text-xl font-semibold mt-6 mb-2">4. Third-Party Services</h2>
      <p className="mb-4">We may use trusted third-party tools like Google Analytics or Firebase. These services may collect anonymous usage data.</p>

      <h2 className="text-xl font-semibold mt-6 mb-2">5. Your Choices</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>You can unsubscribe from emails anytime</li>
        <li>You can contact us to delete your data</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">6. Changes to This Policy</h2>
      <p className="mb-4">We may update this policy from time to time. We'll notify you of significant changes.</p>

      <h2 className="text-xl font-semibold mt-6 mb-2">7. Contact Us</h2>
      <p className="mb-4">
        If you have any questions, feel free to contact us at <span className="font-medium">supportmail@PlantTick.com</span>.
      </p>
    </div>
  );
};

export default PrivacyPolicy;
