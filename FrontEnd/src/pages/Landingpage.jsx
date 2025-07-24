import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white flex flex-col font-poppins">

      <header className="p-4 sm:p-6 flex justify-between items-center max-w-7xl mx-auto w-full">
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-orange-400">
          Pay-it
        </h1>
        <div className="flex items-center gap-3 sm:gap-5">
          <Link
            to="/signin"
            className="text-orange-300 hover:text-orange-200 text-sm sm:text-base font-medium transition-colors duration-200"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full text-sm sm:text-base font-medium shadow-sm hover:shadow-md transition-all duration-300"
          >
            Get Started
          </Link>
        </div>
      </header>

      <main className="flex flex-1 items-center justify-center px-4 py-16 sm:py-24">
        <div className="max-w-1xl text-center space-y-5">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-amber-400 to-orange-500 leading-tight tracking-wide text-shadow-glow">
            Not a Real Bank.
            <br />
            Just Vibes and Pay Buttons.
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-md mx-auto">
            Totally secure (probably). Built for fun, not finance. Click stuff,
            send “money” and pretend you’re the next fintech founder.
          </p>
          <Link
            to="/signup"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full text-base sm:text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            Tap Here, to play with Pay-it
          </Link>
        </div>
      </main>

      <footer className="p-4 text-center text-gray-500 text-sm border-t border-gray-800">
        <p className="flex justify-center items-center gap-1 flex-wrap text-center text-xs sm:text-sm">
          © {new Date().getFullYear()} Pay-it. Built by
          <a
            href="https://github.com/shreeteja172"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-orange-400 hover:text-orange-300 transition-colors"
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