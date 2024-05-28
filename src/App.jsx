import Hero from "./components/Hero";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="md:px-4">
      <Navbar />
      {/* hero section */}
      <div className="min-h-full  max-w-7xl mx-auto mt-10">
        <Hero />
      </div>
    </div>
  );
}

export default App;
