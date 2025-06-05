"use client";
import React from "react";



export default function Index() {
  return (function MainComponent({
  variant = "primary",
  text,
  keyboardCommand,
  onClick,
}) {
  const buttonClasses =
    variant === "primary"
      ? "bg-[#171B26] text-[#EFEFED] border-[#262A36] hover:bg-[#262A36]"
      : "bg-[#ECECEE] text-[#1E222D] hover:bg-[#D8D8DA]";

  return (
    <button
      className={`inline-block font-inter text-sm px-4 py-2 rounded-lg border ${buttonClasses} transition-colors duration-200`}
      onClick={onClick}
    >
      <span>{text}</span>
      {keyboardCommand && (
        <span className="ml-2 bg-[#262A36] text-[#EFEFED] px-1.5 py-0.5 rounded text-xs">
          {keyboardCommand}
        </span>
      )}
    </button>
  );
}

function StoryComponent() {
  return (
    <div className="p-8 space-y-4">
      <div>
        <h2 className="font-inter text-lg mb-2">Primary Button:</h2>
        <MainComponent text="Click me" keyboardCommand="⌘K" />
      </div>
      <div>
        <h2 className="font-inter text-lg mb-2">
          Primary Button (without keyboard command):
        </h2>
        <MainComponent text="Submit" />
      </div>
      <div>
        <h2 className="font-inter text-lg mb-2">Secondary Button:</h2>
        <MainComponent variant="secondary" text="Cancel" />
      </div>
    </div>
  );
});
}