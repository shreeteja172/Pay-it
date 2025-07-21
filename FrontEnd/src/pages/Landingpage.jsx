import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950 text-white flex flex-col">

      <header className="p-6 flex flex-col sm:flex-row justify-between items-center gap-4 max-w-6xl mx-auto w-full">
        <h1 className="text-3xl font-bold text-indigo-500 tracking-wide">
          Pay-it
        </h1>
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
          <Link
            to="/signin"
            className="text-zinc-300 hover:text-white transition-colors text-base"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-xl shadow-md transition-all duration-200 text-base"
          >
            Get Started
          </Link>
        </div>
      </header>

      <main className="flex flex-1 items-center justify-center px-4">
        <div className="max-w-3xl text-center space-y-6 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-500 to-blue-500 drop-shadow-md leading-tight">
            Not a Real Bank.
            <br />
            Just Vibes and Pay Buttons.
          </h2>

          <p className="text-zinc-400 text-base sm:text-lg max-w-xl mx-auto">
            Totally secure (probably). Built for fun, not finance. Click stuff,
            send “money,” and pretend you’re the next fintech founder.
          </p>

          <Link
            to="/signup"
            className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-2xl text-base sm:text-lg font-medium shadow-lg transition-all duration-300 hover:-translate-y-0.5"
          >
            Tap Here, to play with Pay-it
          </Link>
        </div>
      </main>

      <footer className="p-4 text-center text-zinc-500 text-sm border-t border-zinc-800">
        <p className="flex justify-center items-center gap-1 flex-wrap text-center text-xs sm:text-sm">
          © {new Date().getFullYear()} Pay-it. Built by
          <a
            href="https://github.com/shreeteja172"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-zinc-400 hover:text-white transition"
          >
            Shreeteja
          </a>
          for fun, not finance 💸
        </p>
      </footer>
    </div>
  );
};

export default LandingPage;
