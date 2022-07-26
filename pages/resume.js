import React from "react";

export default function Resume() {
  return (
    <div className="p-5 md:p-0 text-white w-full md:w-1/2 leading-7">
      <div className="mt-5">
        <h2 className="text-2xl font-semibold mb-3 text-yellow">About me</h2>
        <p>
          A 25 years old developer, interested in gamedev and webdev. Mostly
          coding stuff with JavaScript/TypeScript, C#, C++.
        </p>
      </div>
      <div className="mt-5">
        <h2 className="text-2xl font-semibold mb-3 text-yellow">Experiences</h2>
				<h3 className="text-xl text-magenta mb-2">Tales Up - React Native Developper</h3>
        <p>
					A local, multiplayer and narrative mobile game.
        </p>
					<ul className="list-disc pl-7 mt-1">
					<li>Co-founded the company</li>
					<li>Coded in TypeScript with React Native</li>
					<li>Created a game framework</li>
					<li>Built tools for developers</li>
				</ul>
				<h3 className="text-xl text-magenta mb-2 mt-3">Undisclosed Project - QA Engineer</h3>
        <p>
					I am a lazy person and prefer when machines do the boring stuff for me.
        </p>
					<ul className="list-disc pl-7 mt-1">
					<li>Automating stuff</li>
				</ul>
      </div>
      <div className="mt-5">
        <h2 className="text-2xl font-semibold mb-3 text-yellow">My tools</h2>
				<div className="grid grid-flow-row gap-4 md:grid-flow-col">
					<div className="border-white rounded-lg border-2 p-4 border-solid shadow-xl hover:bg-light-black transition duration-300">JavaScript</div>
					<div className="border-white rounded-lg border-2 p-4 border-solid shadow-xl hover:bg-light-black transition duration-300">TypeScript</div>
					<div className="border-white rounded-lg border-2 p-4 border-solid shadow-xl hover:bg-light-black transition duration-300">C#</div>
					<div className="border-white rounded-lg border-2 p-4 border-solid shadow-xl hover:bg-light-black transition duration-300">C++</div>
					<div className="border-white rounded-lg border-2 p-4 border-solid shadow-xl hover:bg-light-black transition duration-300">Python</div>
					<div className="border-white rounded-lg border-2 p-4 border-solid shadow-xl hover:bg-light-black transition duration-300">Brain</div>
				</div>
      </div>
    </div>
  );
}
