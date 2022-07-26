import React from "react";

export default function Resume() {
  return (
    <div className="p-5 md:p-0 text-white w-full md:w-2/3 lg:w-1/2 leading-7">
      <div className="mt-5">
        <h2 className="text-2xl font-semibold mb-3 text-yellow">About me</h2>
        <p>
          A 25 years old developer, interested in gamedev and webdev. Mostly
          coding stuff with JavaScript/TypeScript, C#, C++.
        </p>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-3 text-yellow">Experiences</h2>
        <h3 className="text-xl mb-2 font-semibold">
          Tales Up <span className="text-sm font-medium text-white">@ Periple Studio</span>
        </h3>
        <h3 className="text-lg font-semibold mb-2">
          Co-Founder & React Native Developer
        </h3>
        <p>A local, multiplayer and narrative mobile game.</p>
        <ul className="list-disc pl-7 mt-1">
          <li>Co-founded the company</li>
          <li>Coded in TypeScript with React Native</li>
          <li>Created a game framework</li>
          <li>Built tools for developers</li>
        </ul>
        <h3 className="text-xl font-semibold mb-2 mt-5">
          Undisclosed Project{" "}
          <span className="text-sm text-white font-medium">@ Ubisoft Ivory Tower</span>
        </h3>
        <h3 className="text-lg font-semibold mb-2">QA Engineer</h3>
        <p>
          I am a lazy person and prefer when machines do the boring stuff for
          me.
        </p>
        <ul className="list-disc pl-7 mt-1">
          <li>Automating stuff</li>
        </ul>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-3 text-yellow">My tools</h2>
        <div className="grid grid-flow-row gap-4 md:grid-flow-col">
          <div className="bg-white w-full text-black p-0 h-10 flex items-center pl-1 pr-5">
            {">"} JavaScript_
          </div>
          <div className="bg-white w-full text-black p-0 h-10 flex items-center pl-1 pr-5">
            {">"} Typescript_
          </div>
          <div className="bg-white w-full text-black p-0 h-10 flex items-center pl-1 pr-5">
            {">"} C++_
          </div>
          <div className="bg-white w-full text-black p-0 h-10 flex items-center pl-1 pr-5">
            {">"} C#_
          </div>
        </div>
      </div>
    </div>
  );
}
