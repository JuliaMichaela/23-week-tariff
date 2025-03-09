import { useState } from 'react';
import Tariff from '../Components/Tariff/Tariff';
import './App.scss';
import tariffs from '../data/tarriffs';
import themeA from '../styles/300.module.scss';
import themeB from "../styles/450.module.scss";
import themeC from "../styles/550.module.scss";
import themeD from "../styles/1000.module.scss";

function App() {
  const [selectedId, setSelectedId] = useState();

  const themes = [themeA, themeB, themeC, themeD];

  return (
    <>
      <div className="plans">
        {tariffs.map((tariff, i) =>
          <Tariff
            key={tariff.id}
            card={tariff}
            isSelected={tariff.id === selectedId}
            setId={setSelectedId}
            theme={themes[i]}
          />
        )
        }
      </div>
    </>
  )
}

export default App
