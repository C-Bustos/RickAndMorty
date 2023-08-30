import { connect } from "react-redux";
import Card from "../Card/Card";
import styles from "./Favorites.module.css";
import { filterCards, orderCards } from "../../redux/actions/actions";
import { useDispatch } from "react-redux";

function Favorites({ myFavorites }) {
  const dispatch = useDispatch();

  const handleOrder = (evento) => {
    dispatch(orderCards(evento.target.value));
  };

  function handleFilter(evento) {
    dispatch(filterCards(evento.target.value));
  }

  return (
    <div className={styles.container}>
      <div>
        <select name="order" defaultValue="orderChar" onChange={handleOrder} className={styles.filterOrder}>
          <option value="orderChar" disabled="disabled">
            order...
          </option>
          <option value="ascendente">Ascendente</option>
          <option value="descendente">Descendente</option>
        </select>

        <select name="filter" onChange={handleFilter} defaultValue="All" className={styles.filterOrder}>
          <option value="All">All</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">Unknown</option>
        </select>
      </div>
      <div className={styles.containerCards}>
        {myFavorites.map((char) => (
          <Card
            key={char.id}
            id={char.id}
            name={char.name}
            status={char.status}
            gender={char.gender}
            species={char.species}
            origin={char.origin.name}
            image={char.image}
          />
        ))}
      </div>
    </div>
  );
}

export function mapStateToProps(state) {
  return {
    myFavorites: state.myFavorites,
  };
}

export default connect(mapStateToProps)(Favorites);
