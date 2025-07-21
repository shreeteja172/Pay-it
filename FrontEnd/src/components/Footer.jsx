import { FaUserAstronaut } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="w-full bg-zinc-950 border-t border-zinc-800 shadow-inner">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">

        <span className="text-zinc-500 text-xs sm:text-sm text-center md:text-left">
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold text-zinc-300">Pay-it</span>. All rights reserved.
        </span>

        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6 items-center text-xs sm:text-sm">
          <Link
            to="/dashboard"
            className="text-zinc-400 hover:text-white transition"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-zinc-400 hover:text-white transition"
          >
            About
          </Link>
          
          <a
            href="https://github.com/shreeteja172"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs font-semibold text-zinc-400 hover:text-white transition"
          >
            <FaUserAstronaut className="w-4 h-4 text-blue-300" />
            Shreeteja Mutukundu
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
