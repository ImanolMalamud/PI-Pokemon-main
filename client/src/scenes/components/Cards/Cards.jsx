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

  const allPokemons = useSelector((state) => state.allPokemons);
  console.log("🚀 ~ file: Cards.jsx:17 ~ Cards ~ allPokemons:", allPokemons);
  const pokemonsFilteredAndSorted = useSelector(
    (state) => state.pokemonsFilteredAndSorted
  );
  console.log(
    "🚀 ~ file: Cards.jsx:21 ~ Cards ~ pokemonsFilteredAndSorted:",
    pokemonsFilteredAndSorted
  );
  // const currentPokemons = useSelector((state) => state.currentPokemons);
  // console.log(
  //   "🚀 ~ file: Cards.jsx:26 ~ Cards ~ currentPokemons:",
  //   currentPokemons
  // );
  const currentPage = useSelector((state) => state.currentPage);
  const pokemonsPerPage = useSelector((state) => state.pokemonsPerPage);

  useEffect(() => {
    dispatch(actions.getAllPokemons);
    dispatch(actions.setCurrentPage(1));
    dispatch(actions.setTotalPokemonsAmount(pokemonsFilteredAndSorted.length));
  }, []);

  // useEffect(() => {
  //   paginatePokemons(
  //     pokemonsFilteredAndSorted,
  //     currentPage,
  //     pokemonsPerPage,
  //     dispatch
  //   );
  // }, [currentPage]);

  // PAGINATED
  const indexOfLastItem = currentPage * pokemonsPerPage;
  const indexOfFirstItem = indexOfLastItem - pokemonsPerPage;
  const currentPokemons = pokemonsFilteredAndSorted.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  // useEffect(() => {

  // }, []);

  // useEffect(() => {
  //   dispatch(actions.setTotalPokemonsAmount);
  //   dispatch(actions.setCurrentPokemons(currentPokemons));
  // }, [currentPokemons]);

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
          currentPokemons.map((pokemon, index) => {
            return <Card key={index} pokemon={pokemon} />;
          })
        ) : (
          <PokemonsNotFound />
        )}
      </div>
    </div>
  );
}
