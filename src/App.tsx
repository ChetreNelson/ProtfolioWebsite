import Navbar from "./components/organism/Navbar";
import AboutHero from "./views/About";

import HomePage from "./views/Home";

function App() {
  return (
    <div className="flex flex-col gap-4">
      <Navbar />
        <HomePage/>
        <AboutHero/>
    </div>
  );
}

export default App;
