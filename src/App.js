import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/navbar';
import { StoriesBar } from './components/stories';
import { Story } from './components/story';
import { FollowSuggestions } from './components/followSuggestions';
import { Suggestion } from './components/followSuggestion';
import { MyUser } from './components/myUser';

function App() {
  return (
    <body className="bg-gray-100">
      <Navbar />
      <section class="flex justify-center mt-2 mr-80">

        <StoriesBar>
          <Story />
          <Story />
          <Story />
        </StoriesBar>

        <FollowSuggestions>
          <MyUser />
          <div class="flex mt-5 mb-2">
            <p class="font-semibold text-slate-400">Sugestões para você</p>
            <p class="text-xs ml-auto font-semibold">Ver tudo</p>
          </div>

          <div class="space-y-2">
            <Suggestion />
          </div>
          
        </FollowSuggestions>

        <div id="developed-by">
          <small class="text-slate-400">Site desenvolvido por Gabriel Pelincel Ramalho</small>
        </div>

      </section>
    </body>
  );
}

export default App;
