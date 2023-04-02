import React from 'react';
import './App.scss';
import TableService from './utilities/tableService/tableServiceUtility';
import { exampleOptions } from './utilities/tableService/tableTools/exampleTable';
import ExampleData from './exampleData/exampleData';
import SpellCollapse from './components/spellCollapse';
import person from './models/person';
import spell from './models/spell';
import config from './utilities/tableService/tableConfig.model';
function App() {
  const tableService = React.useMemo(() => new TableService(exampleOptions), []);
  const exampleData = new ExampleData();
  // people
  const [peopleData, setPeopleData] = React.useState<person[]>(exampleData.largePeopleArray);
  const daKeys: [string, string][] = [["name", "Name"], ["age", "Age"]];
  const peopleConfig:config = {
    key_name: daKeys,
    state: {
      tableData: peopleData,
      setTableData: setPeopleData
    }
  }
  // spells
  const [spellData, setSpellData] = React.useState<spell[]>(exampleData.largeSpellsArray);
  const daSpellKeys: [string, string][] = [["name", "Name"], ["level", "Level"], ["school", "School"], ["casting_time", "Casting Time"], ["range", "Range"], ["components", "Components"], ["duration", "Duration"]];
  const spellConfig:config = {
    key_name: daSpellKeys,
    state: {
      tableData: spellData,
      setTableData: setSpellData
    },
    collapsible: {
      styleClass: "spell",
      collapseValue: (row, index) => <SpellCollapse desc={row.description}/>,
    }
  }
  //--------------------------------
  return (
    <div className="App">
      <div className='tableContainer'>
        <div>
          {tableService.generateTable(peopleConfig)}
          <button onClick={() => setPeopleData([...peopleData, ...peopleData])}>double people</button>
        </div>
        <div>
          {tableService.generateTable(spellConfig)}
          <button onClick={() => setSpellData([...spellData, ...spellData])}>double spells</button>
        </div>
      </div>
    </div>
  );
}

export default App;
