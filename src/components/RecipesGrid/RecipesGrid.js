import RecipeTile from '../RecipeTile/RecipeTile';
import './RecipesGrid.css';

const RecipesGrid = ({data}) => {

  if(data) {
    return (
      <ul className="recipes__grid">
        {
          data.map(recipe => <RecipeTile key={recipe.id} data={recipe} />)
        }
      </ul>
    )
  }
}

export default RecipesGrid;