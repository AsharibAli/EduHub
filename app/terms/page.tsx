"use client";

import { Background } from "@/components/Background";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function Terms() {
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
              Terms of Service
            </h1>
            <p className="text-xl text-gray-300">
              Welcome to EduHub. By using our services, you agree to these terms
              and conditions.
            </p>
          </div>
          <div className="space-y-12">
            <div className="p-8 rounded-2xl bg-gray-900/40 backdrop-blur-sm border border-teal-900/50">
              <h3 className="text-2xl font-bold text-teal-300">Introduction</h3>
              <p className="mt-4 text-gray-300">
                EduHub provides developer tools and community resources for the
                EDU Chain ecosystem. Our platform includes EduAgent (AI Agent),
                EduKit (dApp Development Starter Kit), and EduBox (No-Code
                Token/NFT Deployment Tool). These Terms of Service outline the
                rules and regulations for using our platform.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-gray-900/40 backdrop-blur-sm border border-teal-900/50">
              <h3 className="text-2xl font-bold text-teal-300">
                User Responsibilities
              </h3>
              <p className="mt-4 text-gray-300">
                As a user of EduHub, you are responsible for maintaining the
                security of your account and for all activities that occur under
                your account. When using our tools, particularly EduBox for
                token/NFT deployment, you are solely responsible for your
                on-chain actions. While our tools aim to simplify blockchain
                development, you should understand the implications of deploying
                smart contracts and conduct proper testing before deployment.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-gray-900/40 backdrop-blur-sm border border-teal-900/50">
              <h3 className="text-2xl font-bold text-teal-300">
                Service Usage
              </h3>
              <p className="mt-4 text-gray-300">
                Our services (EduAgent, EduKit, and EduBox) are provided as
                development and educational tools. You agree to use these
                services responsibly and in compliance with EDU Chain&apos;s
                protocols and standards. While EduBox simplifies deployment
                processes, you remain responsible for any smart contracts,
                tokens, or NFTs you deploy using our platform.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-gray-900/40 backdrop-blur-sm border border-teal-900/50">
              <h3 className="text-2xl font-bold text-teal-300">Data Privacy</h3>
              <p className="mt-4 text-gray-300">
                We take the privacy of your data seriously. When using EduAgent
                or any of our tools, your interaction data may be collected to
                improve our services. We will collect and use your personal
                information in accordance with our{" "}
                <a
                  href="/privacy"
                  className="text-teal-400 hover:text-teal-300 underline transition"
                >
                  Privacy Policy
                </a>
                .
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-gray-900/40 backdrop-blur-sm border border-teal-900/50">
              <h3 className="text-2xl font-bold text-teal-300">
                Intellectual Property
              </h3>
              <p className="mt-4 text-gray-300">
                All content and materials on our platform, including
                EduKit&apos;s libraries, EduAgent&apos;s interface, and
                EduBox&apos;s tools, are the property of EduHub or our
                licensors. While we encourage development on EDU Chain, you may
                not reproduce or distribute our proprietary tools without
                express permission.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-gray-900/40 backdrop-blur-sm border border-teal-900/50">
              <h3 className="text-2xl font-bold text-teal-300">
                Limitation of Liability
              </h3>
              <p className="mt-4 text-gray-300">
                EduHub will not be liable for any losses or damages arising from
                your use of our services, including but not limited to errors in
                smart contract deployment, token creation, or AI-powered
                blockchain exploration. Users should exercise caution and
                conduct proper testing before deploying any solutions.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-gray-900/40 backdrop-blur-sm border border-teal-900/50">
              <h3 className="text-2xl font-bold text-teal-300">
                Changes to Terms
              </h3>
              <p className="mt-4 text-gray-300">
                EduHub reserves the right to modify these terms at any time. We
                will notify users of any significant changes to our services or
                terms. Your continued use of EduAgent, EduKit, or EduBox after
                such changes constitutes acceptance of the new terms.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-gray-900/40 backdrop-blur-sm border border-teal-900/50">
              <h3 className="text-2xl font-bold text-teal-300">Contact Us</h3>
              <p className="mt-4 text-gray-300">
                If you have any questions about these terms or our services,
                please{" "}
                <a
                  href="https://t.me/eduhub_tg"
                  target="_blank"
                  className="text-teal-400 hover:text-teal-300 underline transition"
                >
                  contact us
                </a>
                . We are here to support your development journey on EDU Chain.
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
