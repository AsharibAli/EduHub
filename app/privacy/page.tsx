"use client";

import { Background } from "@/components/Background";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function Privacy() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background effects */}
      <Background activeCard={null} />

      {/* Header */}
      <Header />

      <section className="container mx-auto px-6 py-20 relative z-10 flex-grow">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6 text-center mb-16">
            <h1 className="text-5xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-teal-200">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-300">
              At EduHub, we are committed to protecting your privacy. This
              privacy policy outlines how we collect, use, and safeguard your
              personal information when you use our platform and services
              including EduAgent, EduKit, and EduBox.
            </p>
          </div>
          <div className="space-y-12">
            <div className="p-8 rounded-2xl bg-gray-900/40 backdrop-blur-sm border border-teal-900/50">
              <h3 className="text-2xl font-bold text-teal-300">
                Data Collection
              </h3>
              <p className="mt-4 text-gray-300">
                We collect certain personal information when you use our
                services, including but not limited to your name, email address,
                wallet addresses, and interaction data with our tools (EduAgent,
                EduKit, and EduBox). We also collect technical information about
                how you use our platform and blockchain interaction data.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-gray-900/40 backdrop-blur-sm border border-teal-900/50">
              <h3 className="text-2xl font-bold text-teal-300">Data Usage</h3>
              <p className="mt-4 text-gray-300">
                We use your information to provide and improve our services,
                including EduAgent&apos;s AI blockchain exploration
                capabilities, EduKit&apos;s development tools, and EduBox&apos;s
                no-code deployment features. This data helps us enhance user
                experience, provide technical support, and develop new features.{" "}
                <strong>
                  While we strive to provide accurate and reliable tools for the
                  EDU Chain ecosystem, you are responsible for your own actions
                  and transactions on the blockchain.
                </strong>
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-gray-900/40 backdrop-blur-sm border border-teal-900/50">
              <h3 className="text-2xl font-bold text-teal-300">Data Sharing</h3>
              <p className="mt-4 text-gray-300">
                We may share your data with third-party service providers who
                help us operate our platform, such as cloud hosting providers,
                analytics services, and blockchain infrastructure providers.
                These providers are bound by strict confidentiality agreements.
                We may also share anonymized data about platform usage to
                improve the EDU Chain ecosystem.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-gray-900/40 backdrop-blur-sm border border-teal-900/50">
              <h3 className="text-2xl font-bold text-teal-300">User Rights</h3>
              <p className="mt-4 text-gray-300">
                You have the right to access, update, or delete your personal
                information. For blockchain-related data that is publicly
                visible, please note that we cannot modify or delete information
                stored on the blockchain. If you have any questions about your
                data rights, please{" "}
                <a
                  href="https://t.me/eduhub_tg"
                  target="_blank"
                  className="text-teal-400 hover:text-teal-300 underline transition"
                >
                  contact us
                </a>
                .
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-gray-900/40 backdrop-blur-sm border border-teal-900/50">
              <h3 className="text-2xl font-bold text-teal-300">
                Data Security
              </h3>
              <p className="mt-4 text-gray-300">
                We implement industry-standard security measures to protect your
                data, including encryption, secure workflows, and regular
                security audits. However, please note that blockchain
                transactions are public by nature, and any information you
                submit to the blockchain will be publicly visible.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-gray-900/40 backdrop-blur-sm border border-teal-900/50">
              <h3 className="text-2xl font-bold text-teal-300">
                Changes to This Privacy Policy
              </h3>
              <p className="mt-4 text-gray-300">
                We may update this privacy policy to reflect changes in our
                services, practices, or applicable laws. Any significant changes
                will be communicated through our website or email notifications.
                We recommend checking this policy periodically.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-gray-900/40 backdrop-blur-sm border border-teal-900/50">
              <h3 className="text-2xl font-bold text-teal-300">Contact Us</h3>
              <p className="mt-4 text-gray-300">
                If you have questions about this privacy policy or our data
                practices related to EduAgent, EduKit, EduBox, or any other
                EduHub services, please{" "}
                <a
                  href="https://t.me/eduhub_tg"
                  target="_blank"
                  className="text-teal-400 hover:text-teal-300 underline transition"
                >
                  contact us
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
