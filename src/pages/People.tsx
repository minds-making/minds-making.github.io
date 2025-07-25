import React from "react";
import communicationSpeakers from "../json/communicationSpeakers.json";
import creativitySpeakers from "../json/creativitySpeakers.json";
import problemSolvingSpeakers from "../json/problemSolvingSpeakers.json";
import learningSpeakers from "../json/learningSpeakers.json";
import researchTeam from "../json/researchTeam.json";
import cogsciSpeakers from "../json/cogsciSpeakers.json";

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
        <h2 className="text-4xl mb-2"><a className="underline text-[#740000]" href="https://underline.io/events/489/sessions?eventSessionId=20401" target="_blank" rel="noopener noreferrer">Workshop @ CogSci 2025</a></h2>
        <div className="text-lg">
          <b>Date:</b> Wednesday, July 30th. <b>Time:</b> 9am - 12pm PT.{" "}
        </div>
        <div>
          <b>Location:</b> San Francisco, California (Room Pacific E){" "}
        </div>
        <div className="flex flex-col">
          <b>Schedule:</b> 
          <div>(9:00am - 9:15am) Welcome</div>
          <div>(9:15am - 10:00am) Design Workshop by Grace Hawthorne</div>
          <div>(10:00am - 11:00am) Coffee Break and Poster Session</div>
          <div>(11:00am - 11:30am) Keynote talk by Barbara Tversky</div>
          <div>(11:30am - 12:00pm) Panel Discussion and Q & A</div>
        </div>
        <div className="mt-4 rounded-lg grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {cogsciSpeakers.map((person, idx) => (
            <PersonPortrait person={{ ...person, id: idx + 100 }} />
          ))}
        </div>
      </div>
      <div>
        <h2 className="text-4xl mb-2">Communication Seminar</h2>
        <div className="text-lg">
          <b>Date:</b> Thursday, June 12, 2025. <b>Time:</b> 1pm - 2pm PT (3pm -
          4pm ET).{" "}
        </div>
        <div>
          {" "}
          <b>Recording</b>: Coming soon!
        </div>

        <div className="mt-4 rounded-lg grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {communicationSpeakers.map((person, idx) => (
            <PersonPortrait person={{ ...person, id: idx + 100 }} />
          ))}
        </div>
      </div>
      <div>
        <h2 className="text-4xl mb-2">Creativity Seminar</h2>
        <div className="text-lg">
          <b>Date:</b> Thursday, June 19, 2025. <b>Time:</b> 11am - 12pm PT (2pm
          - 3pm ET).{" "}
        </div>
        <div>
          {" "}
          <b>Recording</b>: Coming soon!
        </div>
        <div className="mt-4 rounded-lg grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {creativitySpeakers.map((person, idx) => (
            <PersonPortrait person={{ ...person, id: idx + 100 }} />
          ))}
        </div>
      </div>
      <div>
        <h2 className="text-4xl mb-2">Problem Solving Seminar</h2>
        <div className="text-lg">
          <b>Date:</b> Monday, June 30, 2025. <b>Time:</b> 1pm - 2pm PT (4pm -
          5pm ET).{" "}
        </div>
        <div>
          {" "}
          <b>Recording</b>: Coming soon!
        </div>
        <div className="mt-4 rounded-lg grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {problemSolvingSpeakers.map((person, idx) => (
            <PersonPortrait person={{ ...person, id: idx + 100 }} />
          ))}
        </div>
      </div>
      <div>
        <h2 className="text-4xl mb-2">Learning Seminar</h2>
        <div className="text-lg">
          <b>Date:</b> Wednesday, July 16, 2025. <b>Time:</b> 12pm - 1pm PT (3pm
          - 4pm ET).{" "}
        </div>
        <div>
          {" "}
          <b>Recording</b>: Coming soon!
        </div>
        <div className="mt-4 rounded-lg grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {learningSpeakers.map((person, idx) => (
            <PersonPortrait person={{ ...person, id: idx + 100 }} />
          ))}
        </div>
      </div>

      <div className="" id="team">
        <h2 className="text-4xl mb-2">Organizers</h2>
        <div className=" rounded-lg mb-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {researchTeam.map((person, idx) => (
            <PersonPortrait person={{ ...person, id: idx + 200 }} />
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
