import Hero from "./components/Hero";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="md:px-4">
      <Navbar />
      {/* hero section */}
      <div className="min-h-full  max-w-7xl mx-auto mt-10 ">
        <div className="relative w-full max-w-lg hidden md:flex">
          <div className="absolute top-2 left-20  mix-blend-muliply filter blur-xl w-40 opacity-40 animate-blob  h-40 bg-purple-300 rounded-full"></div>
          <div className="absolute top-0 right-8 mix-blend-muliply filter blur-xl w-40 h-40 opacity-40 bg-yellow-300 rounded-full animate-blob animation-delay-2000"></div>
          <div className="absolute left-20 -bottom-8 mix-blend-muliply filter blur-xl w-40 h-40 opacity-40 bg-pink-300 rounded-full,animate-blob animation-delay-4000"></div>
        </div>
        <div className="z-100">
          <Hero />
        </div>
      </div>
    </div>
  );
}

export default App;
