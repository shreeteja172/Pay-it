import React from "react";
import { FaGithub, FaCode } from "react-icons/fa";
import AppBar from "../components/AppBar";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-zinc-900 via-zinc-950 to-black text-zinc-100 ">
    
      <AppBar />

      <div className="mt-24 px-4 pb-8 sm:px-6 lg:px-8 flex-grow">

        <div className="bg-zinc-900 border border-zinc-800 rounded-xl shadow-xl p-6 max-w-2xl mx-auto">
          <div className="flex flex-col md:flex-row items-center mb-6">
            <div className="md:w-1/3 mb-4 md:mb-0">
              <img
                src="https://github.com/shreeteja172.png"
                alt="Profile"
                className="w-40 h-40 rounded-full mx-auto border border-zinc-800"
              />
            </div>
            <div className="md:w-2/3 md:pl-6">
              <h2 className="text-2xl font-semibold mb-2">Shreeteja</h2>
              <p className="text-zinc-400 mb-4">
                I'm a developer passionate about building real-world apps.
                Currently working on{" "}
                <span className="text-white font-medium">Pay-it</span>, a
                full-stack payments dashboard that helps users manage balances
                and perform secure transactions.
              </p>

              <div className="flex items-center mb-2">
                <FaGithub className="mr-2 text-zinc-400" />
                <a
                  href="https://github.com/shreeteja172"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  github.com/shreeteja172
                </a>
              </div>

              <div className="flex items-center mb-2">
                <FaCode className="mr-2 text-zinc-400" />
                <a
                  href="https://github.com/shreeteja172/Pay-it"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  Source Code: Pay-it
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-zinc-800 pt-6">
            <h3 className="text-xl font-semibold mb-4">About This Project</h3>
            <p className="text-zinc-400 mb-4">
              <span className="text-white font-medium">Pay-it</span> is a
              full-stack application that allows users to manage balances and
              interact with a user list. It features secure API integration,
              dynamic components, and a clean, minimal UI.
            </p>
            <p className="text-zinc-400 mb-4">
              🔧 <span className="text-white">Frontend</span>: Built with{" "}
              <span className="text-white">React.js</span> and{" "}
              <span className="text-white">Tailwind CSS</span> for a modern and
              responsive UI.
            </p>
            <p className="text-zinc-400 mb-4">
              🧠 <span className="text-white">Backend</span>: Developed using{" "}
              <span className="text-white">Express.js</span> and{" "}
              <span className="text-white">MongoDB</span>, connected via RESTful
              APIs with authentication powered by JWT.
            </p>
            <p className="text-zinc-400">
              This project demonstrates my growing skills in the{" "}
              <span className="text-white font-medium">MERN stack</span> and is
              part of my practical learning in full-stack web development.
            </p>
          </div>
        </div>
      </div>
        <Footer />
    </div>
  );
};

export default About;
