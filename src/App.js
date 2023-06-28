import logo from './logo.svg';
import './App.css';
import LearnPage from './page/LearnPage.js';
import IngameLayout from './component/layout/IngameLayout';
import SolvePage from './page/SolvePage';


function App() {
  return (
    <div className="App">
      <IngameLayout>
        <SolvePage/>
      </IngameLayout>
    </div>
  );
}

export default App
