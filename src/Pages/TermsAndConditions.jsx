import React from "react";
import SetTitle from "../Utilities/SetTitle";

const TermsAndConditions = () => {
  SetTitle("Terms And Conditions");

  return (
    <div className="max-w-4xl mx-auto p-6 ">
      <h1 className="text-3xl font-bold mb-6 text-center">Terms & Conditions</h1>

      <p className="mb-4">By using our website, you agree to the following terms and conditions. Please read them carefully.</p>

      <h2 className="text-xl font-semibold mt-6 mb-2">1. Use of Our Site</h2>
      <p className="mb-4">You agree to use our site only for lawful purposes. You must not use it in a way that may cause damage or interrupt service.</p>

      <h2 className="text-xl font-semibold mt-6 mb-2">2. User Accounts</h2>
      <p className="mb-4">If you create an account, you are responsible for keeping your login information secure. You must notify us of any unauthorized use of your account.</p>

      <h2 className="text-xl font-semibold mt-6 mb-2">3. Intellectual Property</h2>
      <p className="mb-4">All content on this website (text, images, code, etc.) is owned by us or used with permission. You may not copy, reuse, or distribute our content without written permission.</p>

      <h2 className="text-xl font-semibold mt-6 mb-2">4. Limitation of Liability</h2>
      <p className="mb-4">We are not responsible for any damages caused by using our website, including data loss or service issues.</p>

      <h2 className="text-xl font-semibold mt-6 mb-2">5. Third-Party Links</h2>
      <p className="mb-4">Our site may contain links to other websites. We are not responsible for the content or privacy practices of those sites.</p>

      <h2 className="text-xl font-semibold mt-6 mb-2">6. Changes to Terms</h2>
      <p className="mb-4">We may update these terms at any time. If we make significant changes, we’ll notify you. Your continued use means you accept the updated terms.</p>

      <h2 className="text-xl font-semibold mt-6 mb-2">7. Contact Us</h2>
      <p className="mb-4">
        If you have any questions about these terms, contact us at <span className="font-medium">supportmail@PlantTick.com</span>.
      </p>
    </div>
  );
};

export default TermsAndConditions;
