import "./Cards.css";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../../redux/actions";
import Card from "../Card/Card";
import { filterByType } from "../../../hooks/filterByType";
import { paginatePokemons } from "../../../hooks/paginatePokemons";
import { getNumberButtons } from "../../../hooks/getNumberButtons";
import { filterByName } from "../../../hooks/filterByName";
import PokemonsNotFound from "../PokemonsNotFound/PokemonsNotFound";
import Paginated from "../Paginated/Paginated";

export default function Cards() {
  const dispatch = useDispatch();

  const pokemonsFilteredAndSorted = useSelector(
    (state) => state.pokemonsFilteredAndSorted
  );

  const currentPage = useSelector((state) => state.currentPage);
  const pokemonsPerPage = useSelector((state) => state.pokemonsPerPage);

  useEffect(() => {
    dispatch(actions.setTotalPokemonsAmount(pokemonsFilteredAndSorted.length));
  }, []);

  // PAGINATED
  const indexOfLastItem = currentPage * pokemonsPerPage;
  const indexOfFirstItem = indexOfLastItem - pokemonsPerPage;
  const currentPokemons = pokemonsFilteredAndSorted.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  // Estados para Filtros y Ordenamiento
  const filters = useSelector((state) => state.filters);

  // Variable auxiliar para filtrar, ordenar y paginar los items
  // let filteredAndSorted = allPokemons;

  // funcion para volver a la pagina inicial (se la aplicará luego de cada filtrado u ordenado)
  const resetCurrentPage = () => dispatch(actions.setCurrentPage(1));

  const setCurrentPokemons = () => dispatch(actions.setCurrentPage);

  // Filtrado por tipos
  // filteredAndSorted = filters?.typeFilter
  //   ? filterByType(filteredAndSorted, filters.typeFilter, resetCurrentPage)
  //   : filteredAndSorted;

  // // Filtrado por nombre
  // filteredAndSorted = filters?.nameFilter
  //   ? filterByName(filteredAndSorted, filters.nameFilter, resetCurrentPage)
  //   : filteredAndSorted;

  // Paginado

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Paginated />
      <div className="cards-container">
        {currentPokemons ? (
          currentPokemons.map((pokemon) => {
            return <Card key={pokemon.id} pokemon={pokemon} />;
          })
        ) : (
          <PokemonsNotFound />
        )}
      </div>
    </div>
  );
}
