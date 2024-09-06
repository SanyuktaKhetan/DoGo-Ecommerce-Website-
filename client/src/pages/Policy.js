import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy | DoGo - Protecting Your Data & Your Dog"}>
      <div className="container policy">
        <h1> Privacy Policy </h1>
        <p>
          Welcome to DoGo! Your privacy is important to us, and we are committed
          to protecting your personal information. This Privacy Policy outlines
          how we collect, use, and safeguard your information when you visit our
          website <a href="mailto:www.dogocare.com">www.dogo.com</a>. By using
          our site, you agree to the terms of this policy. If you disagree with
          any part of this policy, please refrain from using our website.
        </p>
        <h6>Information Collection and Use</h6>
        <p>
          We collect both personal and non-personal information to enhance your
          experience with DoGo. Personal information, such as your name, email
          address, phone number, shipping, and billing address, is collected
          when you make a purchase or contact us. Payment information is
          processed securely through our payment processors. Additionally, we
          gather non-personal data, including your IP address, browser type,
          device information, and browsing patterns, to improve our services and
          website functionality.
        </p>
        <h6>Sharing and Security</h6>
        <p>
          We do not sell or trade your personal information. However, we may
          share it with third-party service providers who assist us in operating
          our website and fulfilling orders. We may also disclose information if
          required by law. While we employ various security measures to protect
          your information, no online transmission is entirely secure. We strive
          to safeguard your data but cannot guarantee complete protection.
        </p>
        <h6>Your Rights and Choices</h6>
        <p>
          You have the right to access, update, and request the deletion of your
          personal information. You can also opt out of receiving marketing
          communications from us at any time. For any inquiries or concerns
          regarding this Privacy Policy, please contact us at{" "}
          <a href="mailto:support@dogo.com">support@dogo.com</a>. We may update
          this policy periodically, and continued use of our site signifies your
          acceptance of any changes.
        </p>
      </div>
    </Layout>
  );
};

export default Policy;
