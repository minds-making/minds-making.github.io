import Header from "../components/Header";
import "../custom.css";
import People from "./People";

const Home: React.FC<{}> = () => {
  return (
    <div className="text-[#740000]">
      <Header />
      <div
        style={{
          fontFamily: "Georgia, serif",
        }}
        id="home"
        className="min-h-screen bg-center flex flex-col"
      >
        <div className="absolute w-full min-h-screen">
          {/* Background Image */}
          <div className="absolute inset-0 bg-[url('/head.png')] bg-cover z-0" />

          {/* Gradient Overlay for fade top & bottom */}
          <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-b from-[#f0ca89]/100 via-transparent via-80% to-[#f0ca89]/100" />
        </div>
        <div className="flex flex-col-reverse md:flex-row mt-16 z-50">
          <div className="w-72 h-72 "></div>
          <div className="flex flex-col ml-12">
            <div className="text-5xl"><b>m</b>inds in the <b>m</b>aking</div>
            <div className="text-3xl mt-6">
              A workshop for cognitive science and design thinking.
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="w-full px-12 flex flex-col">
            <div className="flex flex-col w-full mb-12">
              <div style={{ width: "100%" }} className=""></div>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{ backgroundColor: "#f0ca89" }}
        className="flex flex-col -mt-32 pb-32"
      >
        <div
          style={{
            // backgroundColor: "#ffe1a8",
            fontFamily: "Georgia, serif",
          }}
          className="text-lg mx-4 md:mx-24 mt-32"
        >
          Minds in the Making is a new workshop at the interface between
          cognitive science 🧠 and design thinking 🫖. The human capacity to
          shape our environments and experiences has long inspired research
          across many disciplines, from psychology and neuroscience to
          human-computer interaction and education. However, these communities
          have not generally had the opportunity to exchange insights. Our
          workshop aims to bridge this gap, fostering interdisciplinary
          knowledge sharing to deepen our understanding of human creativity and
          design cognition.
          <div className="my-4">
            We focus on two central questions about design cognition: <br />
            <span className="ml-12">
              1. How do people reason about design decisions?
            </span>
            <br />
            <span className="ml-12">
              2. How does design impact human behavior and learning?
            </span>
          </div>
          For more information, read our workshop proposal{" "}
          <a href="https://google.com" className="underline text-red-700">
            here
          </a>
          . <br /> Format In 2025, Minds in the Making will take place as a
          series of four virtual online seminars — free & open to the public —
          featuring interactive conversations with experts from cognitive
          science, education, design, human-computer interaction. We’re also
          planning for in-person activities (details tbd).
        </div>
        <div id="team" className="mt-24 mx-4 md:mx-24">
          <People />
        </div>
      </div>
    </div>
  );
};

export default Home;
