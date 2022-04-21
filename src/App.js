import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/navbar';
import { Suggestion } from './components/followSuggestion';
import { StoriesBar } from './components/stories';
import { Story } from './components/story';
import { FollowSuggestions } from './components/followSuggestions';
import { MyUser } from './components/myUser';

function App() {
  return (
    <body className="bg-gray-100">
      
      <Navbar />

      <section class="flex justify-center mt-2 mr-80">

        <div id="stories" class="container border border-gray-300 p-4 flex space-x-2 overflow-auto max-w-2xl h-fit rounded mt-20 bg-white">
          <Story />
          <Story />
          <Story />
          <Story />
          <Story />
          <Story />
          <Story />
          <Story />
          <Story />
          <Story />
        </div>

        <div id="follow-suggestions" class="p-4 text-sm ml-3 fixed inset-y-20 right-72 mx-auto">
          <MyUser />
          <div class="flex mt-5 mb-2">
            <p class="font-semibold text-slate-400">Sugestões para você</p>
            <p class="text-xs ml-auto font-semibold">Ver tudo</p>
          </div>
          <div class="space-y-2">
            <Suggestion />
            <Suggestion />
            <Suggestion />
            <Suggestion />
            <Suggestion />
          </div>
        </div>

      </section>
    </body>
  );
}

export default App;
