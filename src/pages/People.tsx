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
        <h2 className="text-4xl mb-2">Communication Seminar</h2>
        <div className="text-lg"><b>Date:</b> Thursday, June 12, 2025. <b>Time:</b> 1:00pm - 2:00pm PT. </div>
        <div> <b>Register for Zoom Link</b>: <a href="https://stanford.zoom.us/meeting/register/MYW6D4olRPG5-3IkD_bGPg" target="_blank" rel="noopener noreferrer" className="underline text-[#740000]">https://stanford.zoom.us/meeting/register/MYW6D4olRPG5-3IkD_bGPg</a></div>
        <div className="mt-4 rounded-lg grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {communicationSpeakers.map((person, idx) => (
            <PersonPortrait person={{...person, id: idx + 100}} />
          ))}
        </div>
      </div>
      <div>
        <h2 className="text-4xl mb-2">Creativity Seminar</h2>
        <div className="text-lg"><b>Date:</b> Thursday, June 19, 2025. <b>Time:</b> 11:00am - 12:00pm PT. </div>
        <div><b>Register for Zoom Link</b>: <a className="underline text-[#740000]" href="https://stanford.zoom.us/meeting/register/RnH0roe6RoCMrL7H1yRuXg" target="_blank" rel="noopener noreferrer">https://stanford.zoom.us/meeting/register/RnH0roe6RoCMrL7H1yRuXg</a></div>
        <div className="mt-4 rounded-lg grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {creativitySpeakers.map((person, idx) => (
            <PersonPortrait person={{...person, id: idx + 100}} />
          ))}
        </div>
      </div>
      <div>
        <h2 className="text-4xl mb-2">Problem Solving Seminar</h2>
        <div className="text-lg"><b>Date:</b> Monday, June 30, 2025. <b>Time:</b> 1:00pm - 2:00pm PT. </div>
        <div> <b>Register for Zoom Link</b>: <a className="underline text-[#740000]" href="https://stanford.zoom.us/meeting/register/DV-6hsSWT02L6UH-RdHewA" target="_blank" rel="noopener noreferrer">https://stanford.zoom.us/meeting/register/DV-6hsSWT02L6UH-RdHewA</a></div>
        <div className="mt-4 rounded-lg grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {problemSolvingSpeakers.map((person, idx) => (
            <PersonPortrait person={{...person, id: idx + 100}} />
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-4xl mb-2">Learning Seminar</h2>
        <div className="text-lg"><b>Date:</b> TBD. <b>Time:</b> TBD </div>
        <div> <b>Register for Zoom Link</b>: <a className="underline text-[#740000]">TBD</a></div>
        <div className="mt-4 rounded-lg grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {learningSpeakers.map((person, idx) => (
            <PersonPortrait person={{...person, id: idx + 100}} />
          ))}
        </div>
      </div>
      <div>
        <h2 className="text-4xl mb-2">Workshop @ CogSci 2025</h2>
        <div className="text-lg" ><b>Date:</b> Wednesday, July 30th. <b>Time:</b> 9:00am - 12:00pm PT. </div>
        <div><b>Location:</b> San Francisco, California </div>
        <div className="mt-4 rounded-lg grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
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
