import './App.css';
import './Bye';
import Bye from './Bye';

function App() {
  let name = 'Mes';

  return (
    <div className="App">
      Hello {name}
      <Bye name='Joe' age='25' gender='male' />
      <Bye name={name} age={25 + 3} gender='male' />
    </div> 
  );
}

export default App;
