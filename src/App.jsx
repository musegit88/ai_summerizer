import "./App.css";
import { Demo, Hero } from "./components";
import useDirection from "./hooks/useDirection";
const App = () => {
  // change the direction of the document based on the language
  useDirection();
  return (
    <main>
      <div className="main">
        <div className="gradient" />
      </div>
      <div className="app">
        <Hero />
        <Demo />
      </div>
    </main>
  );
};

export default App;
