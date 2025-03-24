import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";

// Define card data type
export type FeatureCard = {
  title: string;
  description: string;
  buttonText: string;
  link: string;
};

// Define props type
type FeatureCardsProps = {
  cards: FeatureCard[];
  activeCard: number | null;
  setActiveCard: (index: number | null) => void;
};

export function FeatureCards({
  cards,
  activeCard,
  setActiveCard,
}: FeatureCardsProps) {
  return (
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
  );
}
