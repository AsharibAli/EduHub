export function Footer() {
  return (
    <footer className="pb-8 bg-black/80 backdrop-blur-sm">
      <div className="container mx-auto px-6 text-center">
        <div className="text-teal-400 text-lg">
          © {new Date().getFullYear()} EduHub. <span>All rights reserved.</span>
        </div>
        <div className="flex justify-center space-x-2 mt-2">
          <a
            href="/privacy"
            className="text-gray-400 hover:text-teal-500 transition-colors text-xs"
          >
            Privacy Policy
          </a>
          <span className="text-gray-600 mx-1">|</span>
          <a
            href="/terms"
            className="text-gray-400 hover:text-teal-500 transition-colors text-xs"
          >
            Terms of Service
          </a>
          <span className="text-gray-600 mx-1">|</span>
          <a
            href="/team"
            className="text-gray-400 hover:text-teal-500 transition-colors text-xs"
          >
            Team
          </a>
          <span className="text-gray-600 mx-1">|</span>
          <a
            href="/careers"
            className="text-gray-400 hover:text-teal-500 transition-colors text-xs"
          >
            Careers
          </a>
        </div>
      </div>
    </footer>
  );
}
