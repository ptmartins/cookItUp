import './RecipeTile.css';

const RecipeTile = ({data}) => {

  return (
    <li className="recipe recipe__tile">
      <div className="recipe__thumb">
        <img src="/images/recipes/large/bacalhau_a_braz.jpeg" alt="" />
      </div>
      <div className="recipe__body"> 
        <h2 className="recipe__title">{data.title}</h2>
        <span className="recipe__type">{data.type}</span>
      </div>

    </li>
  )
}

export default RecipeTile;
