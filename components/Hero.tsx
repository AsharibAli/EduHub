import Link from "next/link";
import { BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <div className="flex flex-col items-center mb-20">
      <h1 className="text-6xl md:text-8xl font-bold text-center mb-6 tracking-tight">
        Learn. Create. Innovate.
        <span className="block text-teal-500">On EduChain</span>
      </h1>
      <p className="text-xl md:text-2xl text-center mb-16 text-gray-400 max-w-3xl">
        EduHub enables the community with dynamic tools to learn, create, and
        explore exciting possibilities, while helping developers seamlessly
        build innovative dApps on the EDU Chain.
      </p>
      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
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
    </div>
  );
}
