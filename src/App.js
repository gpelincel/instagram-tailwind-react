import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/navbar';
import { Suggestion } from './components/followSuggestion';
import { StoriesBar } from './components/stories';
import { Story } from './components/story';

function App() {
  return (
    <body className="bg-gray-100">
      <StoriesBar>
        <Story />
      </StoriesBar>
    </body>
  );
}

export default App;
