import './App.css';
import { List } from './Components/ObservedList/List/List';

function App() {
  const arrayWithValues: JSX.Element[] = Array.from({ length: 1000 }, (element, index) => <div>Element {!element}</div>);
  const contentContainerStyle: React.CSSProperties = {
    border: '3px solid #e687d6',
    backgroundColor: '#f7bced',
    borderRadius: '5px'
  };

  return (
    <div className="appContainer">
      <List array={arrayWithValues} style={contentContainerStyle} />
    </div>
  );
}

export default App;
