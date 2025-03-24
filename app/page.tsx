"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Github,
  Twitter,
  Globe,
  BookOpen,
  Code,
  MessageCircleCode,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";

export default function Home() {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const cards = [
    {
      title: "EduGPT",
      description:
        "The First AI-Powered Blockchain Explorer for EduChain, Analyze transactions, tokens, and more.",
      buttonText: "Start Chatting",
      link: "https://ai.eduhub.dev/",
    },
    {
      title: "EduKit",
      description:
        "A starter-kit with many libraries and frameworks support for Building dApps on EduChain.",
      buttonText: "Start Building",
      link: "https://kit.eduhub.dev/",
    },
    {
      title: "EduBox",
      description:
        "A no-code tool to configure and deploy your Tokens and NFTs with one click on EduChain.",
      buttonText: "Start Deploying",
      link: "https://box.eduhub.dev/",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Improved Grid background */}
      <div
        className="absolute inset-0 bg-grid-pattern opacity-20 transition-opacity duration-300"
        style={{
          backgroundSize: "50px 50px",
          backgroundImage:
            "linear-gradient(to right, #1e293b 1px, transparent 1px), linear-gradient(to bottom, #1e293b 1px, transparent 1px)",
        }}
      />

      {/* Teal glow effect */}
      <div
        className={`absolute top-0 left-1/4 w-1/2 h-1/2 bg-teal-500 rounded-full filter blur-[150px] opacity-20 transition-all duration-500 ${
          activeCard !== null ? "opacity-40" : ""
        }`}
      />

      {/* Header */}
      <header className="container mx-auto px-6 py-8 flex justify-between items-center relative z-10">
        <div className="text-3xl font-bold text-teal-500">EduHub</div>
        <div className="flex space-x-6">
          <Link
            href="https://x.com/eduhub__"
            className="text-white hover:text-teal-500 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twitter className="w-7 h-7" />
            <span className="sr-only">Twitter</span>
          </Link>
          <Link
            href="https://github.com/EduHub-dev"
            className="text-white hover:text-teal-500 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="w-7 h-7" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link
            href="https://t.me/+2LHHeOdkZvJmZWJk"
            className="text-white hover:text-teal-500 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircleCode className="w-7 h-7" />
            <span className="sr-only">Telegram</span>
          </Link>
        </div>
      </header>

      {/* Main content */}
      <main className="container mx-auto px-6 py-20 flex flex-col items-center relative z-10">
        <h1 className="text-6xl md:text-8xl font-bold text-center mb-6 tracking-tight">
          Learn. Create. Innovate.
          <span className="block text-teal-500">On EduChain</span>
        </h1>
        <p className="text-xl md:text-2xl text-center mb-16 text-gray-400 max-w-3xl">
          EduHub enables the community with dynamic tools to learn, create, and
          explore exciting possibilities, while helping developers seamlessly
          build innovative dApps on the EDU Chain.
        </p>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 mb-20">
          <Link
            href="https://app.eduhub.dev/"
            passHref
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="lg"
              className="bg-teal-500 hover:bg-teal-600 text-black font-semibold px-10 py-6 text-lg"
            >
              Launch App
            </Button>
          </Link>
          <Link
            href="https://docs.eduhub.dev/"
            passHref
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="lg"
              variant="outline"
              className="border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-black px-10 py-6 text-lg"
            >
              <BookOpen className="mr-3 h-6 w-6" />
              Go to Documentation
            </Button>
          </Link>
        </div>

        {/* Data cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-6xl mb-20">
          {cards.map((card, index) => (
            <Card
              key={index}
              className={`bg-black/50 border-teal-500/50 text-white backdrop-blur-sm transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-teal-500/20 ${
                activeCard === index ? "ring-4 ring-teal-500" : ""
              }`}
              onMouseEnter={() => setActiveCard(index)}
              onMouseLeave={() => setActiveCard(null)}
              style={{
                backgroundImage:
                  "radial-gradient(circle at center, rgba(45, 212, 191, 0.1) 0%, transparent 70%)",
                backgroundSize: "200% 200%",
                backgroundPosition: "center",
                transition: "all 0.3s ease-in-out",
              }}
            >
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl font-bold text-teal-500">
                  {card.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-gray-300 mb-6">{card.description}</p>
              </CardContent>
              <CardFooter>
                <Link
                  href={card.link}
                  passHref
                  className="w-full"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="w-full bg-teal-500 hover:bg-teal-600 text-black font-semibold py-5 text-lg">
                    {card.buttonText}
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Backed by section */}
        <div className="w-full max-w-4xl mb-20">
          <div className="text-center mb-8 text-teal-500 font-semibold text-xl">
            ACHIEVEMENTS
          </div>
          <div className="flex flex-row justify-center items-center space-x-12 mb-10">
            <div className="text-center">
              <div className="text-gray-200 font-bold text-4xl mb-2">
                20+ Million
              </div>
              <div className="text-gray-400 text-xl">
                Transactions on Testnet
              </div>
            </div>
            <div className="text-center">
              <div className="text-gray-200 font-bold text-4xl mb-2">
                10+ Million
              </div>
              <div className="text-gray-400 text-xl">
                Transactions on Mainnet
              </div>
            </div>
          </div>

          <div className="text-center">
            <a
              href="https://oci.opencampus.xyz/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="text-gray-400 font-semibold text-2xl hover:text-teal-500 transition-colors">
                From Hackathon Winner to Backed by OC Incubar
              </p>
            </a>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="absolute py-6 bottom-0 left-0 right-0 bg-black/80 backdrop-blur-sm">
        <div className="container mx-auto px-6 text-center">
          <div className="text-gray-400 text-lg">
            © {new Date().getFullYear()} EduHub.{" "}
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-500 hover:underline"
            >
              All rights reserved.
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
