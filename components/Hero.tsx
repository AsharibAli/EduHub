import Link from "next/link";
import { BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <div className="flex flex-col items-center mb-20">
      <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-center mb-6 tracking-tight leading-tight">
        <span className="whitespace-nowrap">Building Vibe Tooling</span>
        <span className="block text-teal-500">for EduChain</span>
      </h1>
      <p className="text-lg md:text-2xl text-center mb-16 text-gray-400 max-w-3xl">
        Vibe Tooling? simple tools for community to learn and engage, and
        developers to build dApps on EduChain.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full justify-center items-center">
        <Link
          href="https://app.eduhub.dev/"
          passHref
          target="_blank"
          rel="noopener noreferrer"
          className="w-auto sm:w-auto"
        >
          <Button
            size="lg"
            className="w-auto sm:w-auto bg-teal-500 hover:bg-teal-600 text-black font-semibold px-8 sm:px-10 py-4 sm:py-6 text-base sm:text-lg"
          >
            Start Learning
          </Button>
        </Link>
        <Link
          href="https://docs.eduhub.dev/"
          passHref
          target="_blank"
          rel="noopener noreferrer"
          className="w-auto sm:w-auto"
        >
          <Button
            size="lg"
            variant="outline"
            className="w-auto sm:w-auto border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-black px-8 sm:px-10 py-4 sm:py-6 text-base sm:text-lg"
          >
            <BookOpen className="mr-2 sm:mr-3 h-5 w-5 sm:h-6 sm:w-6" />
            Go to Docs
          </Button>
        </Link>
      </div>
    </div>
  );
}
