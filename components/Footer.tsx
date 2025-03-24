export function Footer() {
  return (
    <footer className="pb-8 bg-black/80 backdrop-blur-sm">
      <div className="container mx-auto px-6 text-center">
        <div className="text-teal-400 text-lg">
          © {new Date().getFullYear()} EduHub.{" "}
          <span>All rights reserved.</span>
        </div>
        <div className="flex justify-center space-x-6 mt-2">
          <a
            href="/privacy"
            className="text-gray-400 hover:text-teal-500 transition-colors text-sm"
          >
            Privacy Policy
          </a>
          <span className="text-gray-600">|</span>
          <a
            href="/terms"
            className="text-gray-400 hover:text-teal-500 transition-colors text-sm"
          >
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
}
