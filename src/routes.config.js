import CharactersList from './components/CharactersList';
import CharactersEdit from './components/CharactersEdit';
import CharactersDetails from './components/CharactersDetails';

const routesConfig = [
  {
    path: '/',
    component: CharactersList,
    exact: true
  },
  {
    path: '/edit',
    component: CharactersEdit,
    exact: true
  },
  {
    path: '/details',
    component: CharactersDetails,
    exact: true
  }
];

export default routesConfig;