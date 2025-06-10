const Feedback: React.FC = () => {
  return (
    <div className="text-[#740000]">
      {/* <Header /> */}
      <div
        style={{
          fontFamily: "'Arvo', serif",
        }}
        id="feedback"
        className="bg-center flex flex-col"
      >
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSe-1bDIj--lMzkubyEzoRcQ81_XXeHXOXlCE1ovAqg6z7c0Ww/viewform?embedded=true"
          title="Google Form"
          className="w-full h-screen bg-[#f0ca89]"
        >
          Loading…
        </iframe>
      </div>
    </div>
  );
};

export default Feedback;
