import "./App.css";

import Navabar from "./components/Navabar";
import Textform from "./components/Textform";
// import About from "./components/about";

function App() {
  return (
    <>
      <Navabar about="About TextPlay" />
      <div className="container">
        <Textform name="Enter your text:" />
      </div>
    </>
  );
}
export default App;
