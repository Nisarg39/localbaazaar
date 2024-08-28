export default function Home() {
  return (
    <div className="min-h-screen bg-black text-gray-300 py-12 px-4">
      <h1 className="text-3xl font-bold mb-2 text-center text-white">Privacy Policy</h1>
      <p className="mb-8 text-gray-400 text-center">Last updated: [Current Date]</p>
    
      <div className="space-y-6">
        {[
          { title: "1. Information We Collect", content: "We collect information you provide directly to us when you create an account, list items for sale, make purchases, or communicate with other users. This may include your name, email address, phone number, physical address, payment information, and any other information you choose to provide. We also automatically collect certain information about your device and how you interact with our platform, including your IP address, browser type, operating system, and browsing behavior." },
          { title: "2. How We Use Your Information", content: "We use the information we collect to provide, maintain, and improve our services, process transactions, and communicate with you. This includes personalizing your experience, analyzing usage patterns to enhance our platform, sending you promotional offers and updates (with your consent), detecting and preventing fraud, and complying with legal obligations. We may also use your information to resolve disputes, enforce our terms of service, and protect the rights and safety of our users and the public." },
          { title: "3. Information Sharing and Disclosure", content: "We do not sell your personal information. We may share your information with third-party service providers who help us operate our platform, such as payment processors, cloud storage providers, and analytics services. These service providers are contractually obligated to use your information only for the purposes of providing services to us. We may also share information when required by law, to protect our rights, or with your consent. In the event of a merger, acquisition, or sale of all or part of our assets, your information may be transferred as part of that transaction." },
          { title: "4. Security", content: "We take reasonable measures to help protect your personal information from loss, theft, misuse, and unauthorized access. This includes using encryption for data transmission, secure servers for data storage, and regular security audits. However, no method of transmission over the Internet or electronic storage is 100% secure, so we cannot guarantee absolute security. We encourage you to use strong passwords and to keep your login credentials confidential." },
          { title: "5. Your Choices", content: "You can access, update, or delete your account information at any time through your account settings. You can also choose to opt-out of certain communications or data collection practices. If you wish to delete your account entirely, you can contact our support team. Please note that some information may be retained for legal or legitimate business purposes even after account deletion. You may also have certain rights under applicable data protection laws, such as the right to request access to your data or to object to certain processing activities." },
          { title: "6. Changes to This Policy", content: "We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page. For significant changes, we will provide a more prominent notice, such as an email notification or an in-app message. We encourage you to review this policy periodically to stay informed about how we protect your information. Your continued use of our services after any changes to this policy constitutes your acceptance of the new terms." },
          { title: "7. Contact Us", content: "If you have any questions about this privacy policy, please contact us at contact@localbaazaar.com. You can also reach our dedicated privacy team at privacy@localbaazaar.com or by mail at LocalBaazaar Privacy Office, 123 Market Street, Cityville, State 12345. For urgent matters, you can call our privacy hotline at +1 (555) 123-4567 during business hours. We are committed to addressing your concerns and resolving any issues in a timely and transparent manner." }
        ].map((section, index) => (
          <section key={index} className="mb-6">
            <h2 className="text-xl font-semibold mb-2 text-gray-200">{section.title}</h2>
            <p className="text-gray-400 leading-relaxed">{section.content}</p>
          </section>
        ))}
      </div>
    </div>
  );
}