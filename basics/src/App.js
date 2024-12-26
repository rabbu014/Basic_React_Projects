import Contact from "./Contact";
import About from "./About";
import Home from "./Home";
import Greeting from "./Greeting";

function App() {
  return (
    <div>
    <h1>Hello, from KodNest</h1>
    <Greeting name = {'Akash'} />
    <Greeting name = {'Anil'} />

    <Home />
    <Contact />
    <About />
    </div>
  );
}

export default App;
