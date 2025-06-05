"use client";
import React from "react";

function MainComponent() {
  return (
    <div className="bg-[#121212] text-white min-h-screen font-poppins">
      <section className="min-h-screen flex flex-col justify-center items-center relative p-4 bg-gradient-to-b from-[#1a1a1a] to-[#121212]">
        <div className="w-48 h-48 rounded-full overflow-hidden mb-8 border-4 border-[#00FF94] shadow-lg">
          <img
            src="https://ucarecdn.com/c9b824ef-5e27-41a5-9540-704e434c91b3/-/format/auto/"
            alt="Obakeng Mdonyelwa"
            className="w-full h-full object-cover"
          />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-4">
          Obakeng Mdonyelwa
        </h1>
        <h2 className="text-xl md:text-2xl text-[#00FF94] mb-4">
          Software Engineer | Data Scientist
        </h2>
        <p className="text-lg md:text-xl text-center max-w-2xl text-gray-300">
          Building innovative solutions at the intersection of software
          development and data science
        </p>
        <div className="mt-6">
          <a
            href="/welcome-page"
            className="text-[#00FF94] hover:text-[#00CC75] transition-colors text-lg"
          >
            ← Back to Welcome Page
          </a>
        </div>
      </section>
      <section className="py-20 px-4 bg-[#1A1A1A]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-[#00FF94] text-center">
            About Me
          </h2>
          <p className="text-xl leading-relaxed text-gray-300 text-center">
            Mathematical Science graduate specializing in Computer Science and
            Statistics. Passionate about creating innovative solutions and
            leveraging data to solve complex problems.
          </p>
        </div>
      </section>
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-[#00FF94] text-center">
            Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#1E1E1E] p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-[#00FF94]">
                Web Development
              </h3>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-[#2A2A2A] rounded-full text-gray-300">
                  JavaScript
                </span>
                <span className="px-4 py-2 bg-[#2A2A2A] rounded-full text-gray-300">
                  HTML5
                </span>
                <span className="px-4 py-2 bg-[#2A2A2A] rounded-full text-gray-300">
                  CSS3
                </span>
                <span className="px-4 py-2 bg-[#2A2A2A] rounded-full text-gray-300">
                  React.js
                </span>
                <span className="px-4 py-2 bg-[#2A2A2A] rounded-full text-gray-300">
                  Node.js
                </span>
              </div>
            </div>
            <div className="bg-[#1E1E1E] p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-[#00FF94]">
                Mobile Development
              </h3>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-[#2A2A2A] rounded-full text-gray-300">
                  React Native
                </span>
                <span className="px-4 py-2 bg-[#2A2A2A] rounded-full text-gray-300">
                  Java (Android)
                </span>
                <span className="px-4 py-2 bg-[#2A2A2A] rounded-full text-gray-300">
                  Swift
                </span>
              </div>
            </div>
            <div className="bg-[#1E1E1E] p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-[#00FF94]">
                Programming Languages
              </h3>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-[#2A2A2A] rounded-full text-gray-300">
                  Python
                </span>
                <span className="px-4 py-2 bg-[#2A2A2A] rounded-full text-gray-300">
                  Java
                </span>
                <span className="px-4 py-2 bg-[#2A2A2A] rounded-full text-gray-300">
                  C++
                </span>
                <span className="px-4 py-2 bg-[#2A2A2A] rounded-full text-gray-300">
                  JavaScript
                </span>
              </div>
            </div>
            <div className="bg-[#1E1E1E] p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-[#00FF94]">
                Data Science & Tools
              </h3>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-[#2A2A2A] rounded-full text-gray-300">
                  Machine Learning
                </span>
                <span className="px-4 py-2 bg-[#2A2A2A] rounded-full text-gray-300">
                  Data Analysis
                </span>
                <span className="px-4 py-2 bg-[#2A2A2A] rounded-full text-gray-300">
                  SAS
                </span>
                <span className="px-4 py-2 bg-[#2A2A2A] rounded-full text-gray-300">
                  SQL
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 px-4 bg-[#1A1A1A]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-[#00FF94] text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#1E1E1E] p-6 rounded-lg hover:transform hover:scale-105 transition-all duration-300">
              <h3 className="text-xl font-bold mb-3 text-[#00FF94]">
                Campus E-commerce App
              </h3>
              <p className="text-gray-300">
                A comprehensive e-commerce solution for campus needs
              </p>
            </div>
            <div className="bg-[#1E1E1E] p-6 rounded-lg hover:transform hover:scale-105 transition-all duration-300">
              <h3 className="text-xl font-bold mb-3 text-[#00FF94]">
                Energy Monitoring System
              </h3>
              <p className="text-gray-300">
                Advanced system for tracking and optimizing energy usage
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-[#00FF94]">
            Get in Touch
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Interested in collaboration? Let's connect!
          </p>
          <a
            href="mailto:your.email@example.com"
            className="inline-block px-8 py-3 bg-[#00FF94] text-black font-bold rounded-lg hover:bg-[#00CC75] transition-colors"
          >
            Contact Me
          </a>
        </div>
      </section>
      <footer className="py-8 bg-[#1A1A1A] text-center text-gray-400">
        <p>© 2024 Obakeng Mdonyelwa. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default MainComponent;