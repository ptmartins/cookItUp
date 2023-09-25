import './RecipeTile.css';

const RecipeTile = ({data}) => {

  const imgPath = `/images/recipes/${data.title.toLowerCase().split(' ').join('_')}.png`;

  return (
    <li className="recipe recipe__tile">
      <div className="recipe__thumb">
        <img src={imgPath} alt={data.title} />
      </div>
      <div className="recipe__body"> 
        <h2 className="recipe__title">{data.title}</h2>
        <span className="recipe__type">{data.type}</span>
      </div>

    </li>
  )
}

export default RecipeTile;
