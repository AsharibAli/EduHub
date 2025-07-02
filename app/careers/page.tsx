"use client";

import { useState } from "react";
import { Background } from "@/components/Background";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Link from "next/link";

export default function Careers() {
  const [activeSection, setActiveSection] = useState<number | null>(null);

  return (
    <div className="flex flex-col min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background effects */}
      <Background activeCard={activeSection} />

      {/* Header */}
      <Header />

      {/* Main content */}
      <main className="container mx-auto px-6 py-20 flex flex-col items-center relative z-10 flex-grow">
        {/* Page Title */}
        <div className="w-full max-w-5xl mx-auto mb-12 text-center">
          <h1 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-teal-200 mb-4">
            Join Our Team
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Help us build the future of education on the EduChain
          </p>
        </div>

        {/* Project Overview */}
        <section className="w-full max-w-5xl mx-auto mb-16 p-8 rounded-2xl bg-gray-900/40 backdrop-blur-sm border border-teal-900/50">
          <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-teal-200">
            ⚡ About EduHub
          </h2>
          <div className="text-lg text-gray-300">
            <p className="mb-4">
              <strong>EduHub</strong> is building  <strong>vibe</strong> community and developer tools
              for <strong>EduChain</strong>— a cutting-edge L3 blockchain
              focused on education.
            </p>
            <p>
              We help the community to{" "}
              <strong>learn, create, and explore</strong> through dynamic tools,
              while enabling developers to create powerful{" "}
              <strong>dApps</strong> on the EDU Chain.
            </p>
          </div>
        </section>

        {/* Roles */}
        <div className="w-full max-w-5xl mx-auto space-y-16">
          {/* Role 1 */}
          <section className="p-8 rounded-2xl bg-gray-900/40 backdrop-blur-sm border border-teal-900/50">
            <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-teal-200">
              👨‍💻 Role 1: Founding Engineer (x2)
            </h2>

            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-4 text-teal-300">
                Why we need just 2:
              </h3>
              <p className="text-gray-300 mb-4">
                We don&#39;t want a bloated dev team—we want two highly
                versatile, driven builders who:
              </p>
              <ul className="list-disc pl-6 text-gray-300 space-y-2">
                <li>Can build full products from scratch</li>
                <li>Own systems end-to-end (backend, frontend, infra)</li>
                <li>Love iterating with early users and shipping fast</li>
              </ul>
              <p className="text-gray-300 mt-4 italic border-l-4 border-teal-500 pl-4 py-2">
                Small team = faster decisions, tighter collaboration, and
                greater individual impact.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-4 text-teal-300">
                Responsibilities
              </h3>
              <ul className="list-disc pl-6 text-gray-300 space-y-2">
                <li>Architect and build core EduHub tools</li>
                <li>Work closely with the founder and community</li>
                <li>Make critical tech and product decisions</li>
              </ul>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-4 text-teal-300">
                Experience
              </h3>
              <ul className="list-disc pl-6 text-gray-300 space-y-2">
                <li>2–5+ years as full-stack dev, backend, or Web3 engineer</li>
                <li>Prior startup or 0→1 project experience preferred</li>
                <li>
                  Comfortable with TypeScript, React, NextJs, NodeJs, and smart
                  contracts (Solidity/Rust)
                </li>
                <li>Bonus: prompt engineering skills + ai tools knowledge</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4 text-teal-300">
                Compensation
              </h3>
              <ul className="list-disc pl-6 text-gray-300 space-y-2">
                <li>
                  <strong>Equity-first</strong> (2%–4% ownership based on fit)
                </li>
                <li>Minimal salary at start ($500–$1,000/mo stipend)</li>
                <li>
                  <strong>Full salary + benefits post-funding</strong>
                </li>
              </ul>
            </div>
          </section>

          {/* Role 2 */}
          <section className="p-8 rounded-2xl bg-gray-900/40 backdrop-blur-sm border border-teal-900/50">
            <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-teal-200">
              🗣️ Role 2: Community Manager (x1)
            </h2>

            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-4 text-teal-300">
                Why just 1:
              </h3>
              <p className="text-gray-300 mb-4">
                We want someone who{" "}
                <strong>lives and breathes community</strong>, not someone who
                &quot;manages channels.&quot; One great community lead can:
              </p>
              <ul className="list-disc pl-6 text-gray-300 space-y-2">
                <li>Spark culture</li>
                <li>Build loyalty</li>
                <li>Scale vibes with growth</li>
              </ul>
              <p className="text-gray-300 mt-4 italic border-l-4 border-teal-500 pl-4 py-2">
                A strong single voice {">"} 3 fragmented ones. We&apos;ll grow
                the team when the community demands it.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-4 text-teal-300">
                Responsibilities
              </h3>
              <ul className="list-disc pl-6 text-gray-300 space-y-2">
                <li>Engage builders, creators & learners</li>
                <li>
                  Manage Discord, X/Twitter, content drops, and newsletters
                </li>
                <li>Gather feedback and bring it back to the product loop</li>
              </ul>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-4 text-teal-300">
                Experience
              </h3>
              <ul className="list-disc pl-6 text-gray-300 space-y-2">
                <li>Passion for tech, learning, and community culture</li>
                <li>
                  Past experience in Web3, TG/Discord modding, or early-stage
                  community building
                </li>
                <li>Bonus: content creation, memes, storytelling</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4 text-teal-300">
                Compensation
              </h3>
              <ul className="list-disc pl-6 text-gray-300 space-y-2">
                <li>
                  <strong>Equity-first</strong> (1%–2% ownership)
                </li>
                <li>Minimal stipend ($250–$500/mo)</li>
                <li>
                  <strong>Full-time salary + perks post-funding</strong>
                </li>
              </ul>
            </div>
          </section>

          {/* Why Fewer Hires Section */}
          <section className="p-8 rounded-2xl bg-gray-900/40 backdrop-blur-sm border border-teal-900/50">
            <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-teal-200">
              💡 Why Fewer Hires Make Bigger Impact
            </h2>
            <ul className="list-disc pl-6 text-gray-300 space-y-3">
              <li>
                <strong>Speed</strong>: Less overhead, more output.
              </li>
              <li>
                <strong>Focus</strong>: Everyone sees the full picture, not just
                a ticket.
              </li>
              <li>
                <strong>Ownership</strong>: Early hires shape the company, not
                just code or tweets.
              </li>
              <li>
                <strong>Equity</strong>: You don&apos;t work <em>for</em> us—you
                build <em>with</em> us.
              </li>
            </ul>
          </section>

          {/* What You Get Section */}
          <section className="p-8 rounded-2xl bg-gray-900/40 backdrop-blur-sm border border-teal-900/50">
            <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-teal-200">
              🧬 What You Get
            </h2>
            <ul className="list-disc pl-6 text-gray-300 space-y-3">
              <li>Co-founder level ownership</li>
              <li>Influence on product, culture, and roadmap</li>
              <li>
                Front-row seat in shaping EduChain&apos;s builder ecosystem
              </li>
              <li>Full-time salary + health benefits after first round</li>
            </ul>
          </section>

          {/* How to Apply */}
          <section className="p-8 rounded-2xl bg-gray-900/40 backdrop-blur-sm border border-teal-900/50">
            <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-teal-200">
              👏 How to Apply?
            </h2>
            <p className="mb-4 text-xl">
              Send an email to{" "}
              <a
                href="mailto:eduhub@asharib.xyz"
                className="text-teal-400 hover:text-teal-300 underline transition"
              >
                eduhub@asharib.xyz
              </a>
            </p>
            <div className="mb-6">
              <p className="font-semibold text-lg mb-2">
                Subject: [Role] – Let&apos;s Build EduHub Together
              </p>
              <p className="text-gray-400">Note: Keep it simple and concise</p>
            </div>

            <ul className="list-disc pl-6 text-gray-300 space-y-3">
              <li>Tell us who you are</li>
              <li>Your best projects or communities</li>
              <li>GitHub, Twitter, or personal site</li>
            </ul>

            {/* Not Hiring Notice */}
            <div className="mt-8 p-4 rounded-lg bg-orange-900/30 border border-orange-700/50">
              <p className="text-orange-200 font-medium text-center">
                <strong>⚠️ Currently Not Hiring</strong>
              </p>
              <p className="text-orange-300/80 text-sm mt-2 text-center">
                We are not actively recruiting at this time and have no open positions. 
                Please check back later for future opportunities.
              </p>
            </div>
          </section>
        </div>

        {/* Back to Home Button */}
        <div className="mt-16 text-center">
          <Link
            href="/"
            className="px-8 py-3 rounded-full bg-gradient-to-r from-teal-600 to-teal-500 text-white font-semibold hover:from-teal-700 hover:to-teal-600 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Back to Home
          </Link>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
