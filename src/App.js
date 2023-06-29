import "./App.css";
import IngameLayout from "./component/layout/IngameLayout";
import logo from "./logo.svg";
import LearnPage from "./page/LearnPage.js";
import SolvePage from "./page/SolvePage";

function App() {
  return (
    <div className="App">
      <IngameLayout>
        <SolvePage />
      </IngameLayout>
    </div>
  );
}

export default App
