"use client";

import { useState } from "react";
import { Background } from "@/components/Background";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

// Team member type definition
type TeamMember = {
  id: number;
  name: string;
  role: string;
  description: string;
  imageUrl: string;
  twitter?: string;
  linkedin?: string;
  github?: string;
};

// Team members data
const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Asharib Ali",
    role: "Founder & CTO",
    description:
      "I build AI & Blockchain solutions and teach others to do the same. Currently instructing 1,500+ students (on-site) in Cloud Native + Agentic AI while managing a 30k+ tech community at GIAIC.",
    imageUrl: "/team/asharib.jpeg",
    twitter: "0xAsharib",
    linkedin: "AsharibAli",
    github: "AsharibAli",
  },
  {
    id: 2,
    name: "Khizar Bakhtiar",
    role: "Lead Developer",
    description:
      "Full-stack developer focused on smart contract integration and decentralized applications. Contributed to several major DeFi projects.",
    imageUrl: "/team/khizar.jpeg",
    twitter: "khizarbakhtiar1",
    linkedin: "khizarbakhtiar",
    github: "khizarbakhtiar1",
  },
  {
    id: 3,
    name: "Ezeigwe Chukwubundu",
    role: "Community Manager",
    description:
      "Community builder with a passion for education and Web3. Previously managed communities with over 50,000 members in the crypto space.",
    imageUrl: "/team/bubble1.jpg",
    twitter: "bubblefarms",
  },
  {
    id: 4,
    name: "Muhammad Ahmed",
    role: "Moderator",
    description:
      "Moderator specializing in managing blockchain projects. Focused on creating intuitive challenges for community.",
    imageUrl: "/team/ahmed.jpg",
    twitter: "ahmedarain717",
  },
];

export default function Team() {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  // Handler for mouse enter
  const handleMouseEnter = (id: number) => {
    setActiveCard(id);
  };

  // Handler for mouse leave
  const handleMouseLeave = () => {
    setActiveCard(null);
  };

  return (
    <div className="flex flex-col min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background effects */}
      <Background activeCard={activeCard} />

      {/* Header */}
      <Header />

      <section className="container mx-auto px-6 py-20 relative z-10 flex-grow">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-6 text-center mb-16">
            <h1 className="text-5xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-teal-200">
              Our Team
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Meet the passionate builders behind EduHub. We&lsquo;re committed
              to creating powerful tools and resources for the EDU Chain
              ecosystem.
            </p>
          </div>

          {/* Team members grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="p-8 rounded-2xl bg-gray-900/40 backdrop-blur-sm border border-teal-900/50 transition-all duration-300 hover:border-teal-500/70"
                onMouseEnter={() => handleMouseEnter(member.id)}
                onMouseLeave={handleMouseLeave}
              >
                <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start">
                  {/* Member photo */}
                  <div className="w-32 h-32 relative rounded-full overflow-hidden border-2 border-teal-500/30">
                    <Image
                      src={member.imageUrl}
                      alt={member.name}
                      fill
                      style={{ objectFit: "cover" }}
                      className="rounded-full"
                    />
                  </div>

                  {/* Member details */}
                  <div className="flex-1 text-center sm:text-left">
                    <h3 className="text-2xl font-bold text-teal-300 mb-1">
                      {member.name}
                    </h3>
                    <p className="text-lg text-gray-400 mb-3">{member.role}</p>
                    <p className="text-gray-300 mb-4">{member.description}</p>

                    {/* Social media links */}
                    <div className="flex gap-4 justify-center sm:justify-start">
                      {member.twitter && (
                        <a
                          href={`https://x.com/${member.twitter}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-teal-400 transition-colors"
                          aria-label={`${member.name}'s Twitter`}
                        >
                          <FaTwitter size={24} />
                        </a>
                      )}
                      {member.linkedin && (
                        <a
                          href={`https://linkedin.com/in/${member.linkedin}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-teal-400 transition-colors"
                          aria-label={`${member.name}'s LinkedIn`}
                        >
                          <FaLinkedin size={24} />
                        </a>
                      )}
                      {member.github && (
                        <a
                          href={`https://github.com/${member.github}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-teal-400 transition-colors"
                          aria-label={`${member.name}'s GitHub`}
                        >
                          <FaGithub size={24} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Join the team section
          <div className="mt-16 p-8 rounded-2xl bg-gray-900/40 backdrop-blur-sm border border-teal-900/50 text-center">
            <h2 className="text-3xl font-bold text-teal-300 mb-4">
              Join Our Team
            </h2>
            <p className="text-xl text-gray-300 mb-6 max-w-2xl mx-auto">
              Interested in building the future of education on the blockchain?
              We&lsquo;re always looking for talented individuals to join our
              journey.
            </p>
            <Link
              href="/careers"
              className="px-8 py-3 rounded-full bg-gradient-to-r from-teal-600 to-teal-500 text-white font-semibold hover:from-teal-700 hover:to-teal-600 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              View Open Positions
            </Link>
          </div> */}
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
