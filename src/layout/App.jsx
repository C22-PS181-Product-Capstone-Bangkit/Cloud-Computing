import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function App({ children }) {
  return (
    <>
      <Navbar />
      <div className="pt-24 min-h-screen">{children}</div>
      <Footer />
    </>
  );
}

export default App;
