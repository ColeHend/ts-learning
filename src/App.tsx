import React from 'react';
import './App.scss';
import TableService from './utilities/tableService/tableServiceUtility';
import { exampleOptions } from './utilities/tableService/tableTools/exampleTable';
import ExampleData from './exampleData/exampleData';
import SpellCollapse from './components/spellCollapse';
import person from './models/person';
import spell from './models/spell';
import config from './utilities/tableService/tableConfig.model';
import RouteService, { customRoute } from './utilities/routeService/routeService';
import NavbarService from './utilities/navbarService/navbarService';
function App() {
  const tableService = React.useMemo(() => new TableService(exampleOptions), []);
  const exampleData = new ExampleData();

  //--------------People Table Config----------------------
  const [peopleData, setPeopleData] = React.useState<person[]>(exampleData.largePeopleArray);
  const peopleConfig: config = {
    key_name: [["name", "Name"], ["age", "Age"]],
    state: {
      tableData: peopleData,
      setTableData: setPeopleData
    }
  }
  //------------------Spell Table Config----------------------
  const [spellData, setSpellData] = React.useState<spell[]>(exampleData.largeSpellsArray);
  const spellConfig: config = {
    key_name: [["name", "Name"], ["level", "Level"], ["school", "School"], ["casting_time", "Casting Time"], ["range", "Range"], ["components", "Components"], ["duration", "Duration"]],
    state: {
      tableData: spellData,
      setTableData: setSpellData
    },
    collapsible: {
      styleClass: "spell",
      collapseValue: (row, index) => <SpellCollapse desc={row.description} />,
    }
  }
  //---------------Navbar Service-----------------
  const [showAvatar] = React.useState(true);
  const [avatarLink] = React.useState(undefined);
  const [siteName] = React.useState("My crazy Test Site.");
  const [theme] = React.useState("light");
  //--------------Route Service------------------
  const routeArr: customRoute[] = [
    { path: 'spell', element: <div className='tableContainer'>{tableService.generateTable(spellConfig)}</div>},
    { path: 'people', element: <div className='tableContainer'>{tableService.generateTable(peopleConfig)}</div>},
  ]
  const routeStyle = {
    box: {
      sx: { display: 'flex', alignItems: 'center', textAlign: 'center', backgroundColor: '#f00', width: '100%' }
    },
    button: {
      sx: { color: 'black' }
    }
  }
  //--------------Render------------------
  return (
    <div className="App" style={{ width: '100vw', height: '100vh' }}>
      <NavbarService siteName={siteName} iconName='castle' theme={theme} pages={[
        { page: 'Home', toLink: '/' },
        { page: 'People', toLink: '/people' },
        { page: 'Spells', toLink: '/spell' }
      ]} settings={[
        { setting: 'Home', toLink: '/' },
        { setting: 'People', toLink: '/people' },
        { setting: 'Spells', toLink: '/spell' }
      ]} userAvatar={{ shouldShow: showAvatar, link: avatarLink }} />
      <RouteService style={routeStyle} routes={routeArr} />
    </div>
  );
}

export default App;
