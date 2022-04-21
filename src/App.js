import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/navbar';
import { Suggestion } from './components/followSuggestion';

function App() {
  return (
    <body className="bg-gray-100">
      <Navbar />
      <Suggestion />
    </body>
  );
}

export default App;
