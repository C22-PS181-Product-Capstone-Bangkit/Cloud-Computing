import App from "../layout/App";
import About from "../containers/About";
import Banner from "../containers/Banner";
import Demo from "../containers/Demo";
import Features from "../containers/Features";

function Home() {
  return (
    <App
      children={
        <>
          <Banner />
          <About />
          <Features />
          <Demo />
        </>
      }
    />
  );
}

export default Home;
