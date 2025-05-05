import React from 'react';

const TermsAndPrivacy: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 text-gray-800">
      <h1 className="text-3xl font-bold mb-8 text-center">Terms and Conditions & Privacy Policy</h1>
      
      {/* Terms and Conditions Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Terms and Conditions</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-medium mb-2">1. Acceptance of Terms</h3>
            <p className="text-gray-600">
              By accessing and using SendSafe, you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our service.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-medium mb-2">2. Service Description</h3>
            <p className="text-gray-600">
              SendSafe is a delivery service platform that facilitates the sending of physical items and gift cards. We are not a payment platform, financial institution, or money transfer service.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-medium mb-2">3. Gift Card Service</h3>
            <p className="text-gray-600">
              Our gift card feature is not a payment platform. It is a service that allows users to send physical gift cards with cash value. The actual monetary value is handled by the gift card issuer, not SendSafe.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-medium mb-2">4. User Responsibilities</h3>
            <p className="text-gray-600">
              Users are responsible for:
              <ul className="list-disc ml-6 mt-2">
                <li>Providing accurate and complete information</li>
                <li>Maintaining the security of their account</li>
                <li>Complying with all applicable laws and regulations</li>
                <li>Ensuring the legality of items being sent</li>
              </ul>
            </p>
          </div>

          <div>
            <h3 className="text-xl font-medium mb-2">5. Prohibited Activities</h3>
            <p className="text-gray-600">
              Users are prohibited from:
              <ul className="list-disc ml-6 mt-2">
                <li>Using the service for illegal purposes</li>
                <li>Attempting to use the service as a payment platform</li>
                <li>Sending prohibited or restricted items</li>
                <li>Violating any applicable laws or regulations</li>
              </ul>
            </p>
          </div>

          <div>
            <h3 className="text-xl font-medium mb-2">6. Limitation of Liability</h3>
            <p className="text-gray-600">
              SendSafe is not liable for:
              <ul className="list-disc ml-6 mt-2">
                <li>Any financial losses related to gift cards</li>
                <li>Delays or issues with delivery partners</li>
                <li>Misuse of the service by users</li>
                <li>Any indirect or consequential damages</li>
              </ul>
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Policy Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Privacy Policy</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-medium mb-2">1. Information Collection</h3>
            <p className="text-gray-600">
              We collect information necessary to provide our services, including:
              <ul className="list-disc ml-6 mt-2">
                <li>Personal identification information</li>
                <li>Contact details</li>
                <li>Delivery addresses</li>
                <li>Transaction information</li>
              </ul>
            </p>
          </div>

          <div>
            <h3 className="text-xl font-medium mb-2">2. Information Sharing</h3>
            <p className="text-gray-600">
              We share necessary information with:
              <ul className="list-disc ml-6 mt-2">
                <li>Delivery partners to facilitate secure transactions</li>
                <li>Service providers who assist in our operations</li>
                <li>Legal authorities when required by law</li>
              </ul>
            </p>
          </div>

          <div>
            <h3 className="text-xl font-medium mb-2">3. Data Security</h3>
            <p className="text-gray-600">
              We implement appropriate security measures to protect your information, including:
              <ul className="list-disc ml-6 mt-2">
                <li>Encryption of sensitive data</li>
                <li>Secure data storage</li>
                <li>Regular security assessments</li>
                <li>Access controls and authentication</li>
              </ul>
            </p>
          </div>

          <div>
            <h3 className="text-xl font-medium mb-2">4. User Rights</h3>
            <p className="text-gray-600">
              Users have the right to:
              <ul className="list-disc ml-6 mt-2">
                <li>Access their personal information</li>
                <li>Request corrections to their data</li>
                <li>Delete their account and associated data</li>
                <li>Opt-out of marketing communications</li>
              </ul>
            </p>
          </div>

          <div>
            <h3 className="text-xl font-medium mb-2">5. Data Retention</h3>
            <p className="text-gray-600">
              We retain user data for as long as necessary to provide our services and comply with legal obligations. Users can request data deletion at any time.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-medium mb-2">6. Changes to Policy</h3>
            <p className="text-gray-600">
              We may update this privacy policy periodically. Users will be notified of any significant changes through the app or via email.
            </p>
          </div>
        </div>
      </section>

      <div className="mt-8 text-center">
        <p className="text-sm text-gray-500">
          Last updated: {new Date().toLocaleDateString()}
        </p>
      </div>
    </div>
  );
};

export default TermsAndPrivacy; 