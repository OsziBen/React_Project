import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
//import App from './App.jsx';
//import Greeting from './Greeting.jsx';
//import Markup from './Markup.jsx';
import './index.css';

// CONDITIONAL RENDERING CHALLENGES
//import PackingList from './ConditionalRenderings/Challenge1.jsx';
//import PackingList2 from './ConditionalRenderings/Challenge2.jsx';
//import DrinkList from './ConditionalRenderings/Challenge3.jsx';

// RENDERING LISTS CHALLENGES
//import List from './RenderingLists/Challenge1/Challenge1.jsx';
//import RecipeList from './RenderingLists/Challenge2/Challenge2.jsx';
//import RecipeList from './RenderingLists/Challenge3/Challege3';
//import Poem from './RenderingLists/Challenge4/Challenge4';

// PASSING PROMPT CHALLENGES
//import Gallery from './PassingProps/Challenge1/Challenge1';
//import Profile from './PassingProps/Challenge2/Challenge2';
import Profile from './PassingProps/Challenge3/Challenge3';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Profile />
  </StrictMode>,
);
