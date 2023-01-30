import { createBrowserRouter } from 'react-router-dom';
import * as FromFeatures from '../features';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <FromFeatures.Index />,
  },
  {
    path: 'recipe-book',
    element: <FromFeatures.RecipeBook />,
  },
  {
    path: 'recipes',
    element: <FromFeatures.Recipe />,
  },
  {
    path: 'login',
    element: <FromFeatures.Login />,
  },
  {
    path: 'profile',
    element: <FromFeatures.Profile />,
  },
  {
    path: 'recipes/:id', //TODO make child route of recipes
    element: <FromFeatures.Recipe />,
  },
  {
    path: 'recipes/:id/edit', //TODO make child route of recipes
    element: <FromFeatures.EditRecipe />,
  },
  {
    path: 'recipes/new', //TODO make child route of recipes
    element: <FromFeatures.NewRecipe />,
  },
  {
    path: 'dev',
    element: <FromFeatures.Dev />,
  },
]);
