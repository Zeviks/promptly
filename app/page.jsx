import Feed from "@components/feed";

const Home = () => {
  return (
    <section className="font-inter">
      <h1 className="head_text text-center">
        Discover & Share
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center">AI-Powered Prompts</span>
      </h1>
      <p className="desc text-center">
        Promptly is an open-source AI prompting tool made for the modern world
        to discover, create and share creative prompts.
      </p>
      <Feed />
    </section>
  );
};

export default Home;
