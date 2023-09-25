import {useState, useEffect} from 'react';
import RecipesGrid from './components/RecipesGrid/RecipesGrid';
import './App.css';

/**
 * Shuffle recipes data
 * 
 * @param {*} arr 
 * @returns 
 */
const shuffleArray = arr => {
  const shuffledArray = arr.slice();
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}

function App() {

  const [recipes, setRecipes] = useState(null);
  const [ingredients, setIngredients] = useState(null);

  const setData = () => {
    fetch('./data/recipes.json').then(res => res.json()).then(data => {
      const suffledData = shuffleArray(data);
      const res = suffledData.slice(0, 7);
      localStorage.recipes = JSON.stringify(res);
      setRecipes(res);    
    })
  };

  useEffect(() => {
      if(localStorage.recipes === undefined) {
          setData();
      } else {
          setRecipes(JSON.parse(localStorage.recipes));
      }
  }, []);

  useEffect(() => {
    if(recipes) {
      const res = {};

      recipes.forEach(recipe => {
        recipe.ingredients.forEach(ingredient => {
          if(!(ingredient.name in res)) {
            res[ingredient.name.toLowerCase()] = {
              quantity: ingredient.quantity,
              unit: ingredient.unit
            }
          } else {
              res[ingredient.name].quantity += ingredient.quantity
          }
        })
      })

      console.log(res);
    }
  }, recipes)

  const refresh = () => {
    if(localStorage.recipes) {
      localStorage.removeItem('recipes');
      setData();
    }
  };

  return (
    <div className="app ">
      <div className="app__container">
        <header className="header">
          <div className="logo">Cook<span>IT</span><span>Up</span></div>
          <div className="actions">
            <button className="btn" onClick={() => refresh()}>Refresh</button>
            <button className="btn" onClick={() => refresh()}>Print Ingredients</button>
          </div>
        </header>
        <main className="main">
          <RecipesGrid data={recipes} />
        </main>
        <footer className="footer">
          <div className="attribution">Developed with &hearts; by <a href="https://ptmartins.github.io">Pedro Martins</a></div>
        </footer>
      </div>  
    </div>
  );
}

export default App;
