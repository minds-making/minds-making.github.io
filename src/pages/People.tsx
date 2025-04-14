import React from "react";
import communicationSpeakers from "../json/communicationSpeakers.json"
import creativitySpeakers from "../json/creativitySpeakers.json"
import problemSolvingSpeakers from "../json/problemSolvingSpeakers.json"
import learningSpeakers from "../json/learningSpeakers.json"
import researchTeam from "../json/researchTeam.json"
import cogsciSpeakers from "../json/cogsciSpeakers.json"

interface Person {
  id: number;
  name: string;
  imageUrl: string;
  affiliation: string;
  website?: string;
}


const People: React.FC = () => {
  return (
    <div
      style={{
        fontFamily: "'Arvo', serif",
      }}
      className="mx-auto flex flex-col space-y-6 text-[#740000]"
    >
      
      <div>
        <h2 className="text-4xl mb-2">Creativity Seminar</h2>
        <div><b>Date:</b> TBD. <b>Time:</b> TBD </div>
        <div className=" rounded-lg grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {creativitySpeakers.map((person, idx) => (
            <PersonPortrait person={{...person, id: idx + 100}} />
          ))}
        </div>
      </div>
      <div>
        <h2 className="text-4xl mb-2">Problem Solving Seminar</h2>
        <div><b>Date:</b> TBD. <b>Time:</b> TBD </div>
        <div className=" rounded-lg grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {problemSolvingSpeakers.map((person, idx) => (
            <PersonPortrait person={{...person, id: idx + 100}} />
          ))}
        </div>
      </div>
      <div>
        <h2 className="text-4xl mb-2">Communication Seminar</h2>
        <div><b>Date:</b> TBD. <b>Time:</b> TBD </div>
        <div className=" rounded-lg grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {communicationSpeakers.map((person, idx) => (
            <PersonPortrait person={{...person, id: idx + 100}} />
          ))}
        </div>
      </div>
      <div>
        <h2 className="text-4xl mb-2">Learning Seminar</h2>
        <div><b>Date:</b> TBD. <b>Time:</b> TBD </div>
        <div className=" rounded-lg grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {learningSpeakers.map((person, idx) => (
            <PersonPortrait person={{...person, id: idx + 100}} />
          ))}
        </div>
      </div>
      <div>
        <h2 className="text-4xl mb-2">Workshop @ CogSci 2025</h2>
        <div><b>Date:</b> Wednesday, July 30th. <b>Time:</b> TBD </div>
        <div><b>Location:</b> San Francisco, California </div>
        <div className=" rounded-lg grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {cogsciSpeakers.map((person, idx) => (
            <PersonPortrait person={{...person, id: idx + 100}} />
          ))}
        </div>
      </div>
      

      <div className="" id="team">
        <h2 className="text-4xl mb-2">Organizers</h2>
        <div className=" rounded-lg mb-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {researchTeam.map((person, idx) => (
            <PersonPortrait person={{...person, id: idx + 200}} />
          ))}
        </div>
      </div>
    </div>
    
  );
};

const PersonPortrait: React.FC<{ person: Person }> = ({ person }) => {
  return (
    <a
      id="people-portrait"
      target="_blank"
      href={person.website}
      key={person.id}
      className="px-2 py-4 text-sm flex flex-col items-center cursor-pointer hover:underline rounded-lg group"
    >
      <img
        id="people-portrait"
        src={person.imageUrl}
        alt={person.name}
        className="w-32 h-32 rounded-full object-cover cursor-pointer group-hover:outline group-hover:outline-4 group-hover:outline-[#bd6c33] "
      />
      <p className="mt-4 text-lg font-semibold">{person.name}</p>
      <p className="text-md">{person.affiliation}</p>
    </a>
  );
};

export default People;
