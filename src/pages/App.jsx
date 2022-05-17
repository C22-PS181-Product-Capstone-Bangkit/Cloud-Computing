import Navbar from "../components/Navbar";

function App({ children }) {
  return (
    <>
      <Navbar />
      <div className="pt-24bg-cyan-400 min-h-screen">{children}</div>
    </>
  );
}

export default App;
