"use client";
import React from "react";

function MainComponent() {
  return (
    <div className="bg-[#0A0A0A] text-white min-h-screen font-poppins overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="code-rain"></div>
      </div>

      <div className="relative z-10 min-h-screen flex flex-col justify-center items-center">
        <div className="text-center mb-12 reveal-text">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-[#00FF94] to-[#00BCD4] text-transparent bg-clip-text">
            Welcome
          </h1>
          <div className="typewriter">
            <p className="text-xl md:text-2xl text-gray-300">
              This is my portfolio, my name is Obakeng Mdonyelwa
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto p-4">
          <div className="bg-[#1E1E1E] p-6 rounded-lg transform hover:scale-105 transition-all duration-300 shadow-neon">
            <div className="flex items-center mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <pre className="text-sm md:text-base">
              <code className="text-[#00FF94]">
                {`class SoftwareEngineer {
  constructor() {
    this.name = "Obakeng";
    this.skills = ["Python", "React", "ML"];
    this.coffee = Infinity;
  }

  solveProblems() {
    while(problems.exist()) {
      code.write();
      coffee.drink();
    }
  }
}`}
              </code>
            </pre>
          </div>

          <div className="bg-[#1E1E1E] p-6 rounded-lg transform hover:scale-105 transition-all duration-300 shadow-neon">
            <h3 className="text-[#00FF94] font-bold mb-4">
              Skills Distribution
            </h3>
            <div className="h-48 flex items-end justify-around">
              <div
                className="w-12 bg-gradient-to-t from-[#00FF94] to-[#00BCD4] rounded-t"
                style={{ height: "90%" }}
              >
                <span className="text-xs mt-2 block text-center">Web Dev</span>
              </div>
              <div
                className="w-12 bg-gradient-to-t from-[#00FF94] to-[#00BCD4] rounded-t"
                style={{ height: "85%" }}
              >
                <span className="text-xs mt-2 block text-center">Mobile</span>
              </div>
              <div
                className="w-12 bg-gradient-to-t from-[#00FF94] to-[#00BCD4] rounded-t"
                style={{ height: "95%" }}
              >
                <span className="text-xs mt-2 block text-center">ML/AI</span>
              </div>
              <div
                className="w-12 bg-gradient-to-t from-[#00FF94] to-[#00BCD4] rounded-t"
                style={{ height: "80%" }}
              >
                <span className="text-xs mt-2 block text-center">Data</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <a
            href="/portfolio"
            className="group relative inline-flex items-center px-12 py-4 overflow-hidden text-lg font-medium text-[#00FF94] border-2 border-[#00FF94] rounded-full hover:text-white"
          >
            <span className="absolute left-0 block w-full h-0 transition-all bg-[#00FF94] opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
            <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </span>
            <span className="relative">Enter Portfolio</span>
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-0 right-0 flex justify-center gap-8 text-gray-400">
        <i className="fab fa-python text-2xl hover:text-[#00FF94] transition-colors"></i>
        <i className="fab fa-react text-2xl hover:text-[#00FF94] transition-colors"></i>
        <i className="fab fa-js text-2xl hover:text-[#00FF94] transition-colors"></i>
        <i className="fas fa-database text-2xl hover:text-[#00FF94] transition-colors"></i>
      </div>

      <style jsx global>{`
        .code-rain {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(180deg, transparent, rgba(0,255,148,0.1));
          animation: rain 20s linear infinite;
        }

        @keyframes rain {
          0% { background-position: 0% 0%; }
          100% { background-position: 0% 100%; }
        }

        .shadow-neon {
          box-shadow: 0 0 15px rgba(0,255,148,0.2);
        }

        .reveal-text {
          animation: reveal 1s ease-out forwards;
        }

        @keyframes reveal {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        .typewriter p {
          overflow: hidden;
          border-right: .15em solid #00FF94;
          white-space: nowrap;
          margin: 0 auto;
          animation: 
            typing 3.5s steps(40, end),
            blink-caret .75s step-end infinite;
        }

        @keyframes typing {
          from { width: 0 }
          to { width: 100% }
        }

        @keyframes blink-caret {
          from, to { border-color: transparent }
          50% { border-color: #00FF94; }
        }
      `}</style>
    </div>
  );
}

export default MainComponent;