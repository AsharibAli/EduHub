"use client";

import { useState } from "react";

// Import custom components
import { Background } from "@/components/Background";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { FeatureCards, type FeatureCard } from "@/components/FeatureCards";
import { Impact } from "@/components/Impact";
import { Footer } from "@/components/Footer";

export default function Home() {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  // Feature card data
  const featureCards: FeatureCard[] = [
    {
      title: "EduAgent",
      description:
        "The First AI Agent for EduChain | Send, Swap, Bridge, Balance, Convert, Analyze & More",
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
    <div className="flex flex-col min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background effects */}
      <Background activeCard={activeCard} />

      {/* Header */}
      <Header />

      {/* Main content */}
      <main className="container mx-auto px-6 py-20 flex flex-col items-center relative z-10 flex-grow">
        {/* Hero section */}
        <Hero />

        {/* Feature Cards */}
        <FeatureCards
          cards={featureCards}
          activeCard={activeCard}
          setActiveCard={setActiveCard}
        />

        {/* Impact section */}
        <Impact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
