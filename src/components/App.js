import Navbar from "./Navbar";
import Home from "./Home";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
    </div>
  );
}

function About() {
  return (
    <div id="about">
      <h2>About</h2>
    </div>
  );
}

export default App;
