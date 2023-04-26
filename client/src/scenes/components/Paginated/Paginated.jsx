import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPage, setPokemonsPerPage } from "../../../redux/actions";
import "./Paginated.css";

export default function Paginated() {
  const dispatch = useDispatch();
  const currentPage = useSelector((state) => state.currentPage);
  const pokemonsPerPage = useSelector((state) => state.pokemonsPerPage);
  const totalPokemonsAmount = useSelector((state) => state.totalPokemonsAmount);

  const totalPages = Math.ceil(totalPokemonsAmount / pokemonsPerPage);
  const pageNumbers = [...Array(totalPages).keys()].map((num) => num + 1);

  const handlePageChange = (pageNumber) => {
    dispatch(setCurrentPage(pageNumber));
  };

  const handlePokemonsPerPageChange = (event) => {
    dispatch(setPokemonsPerPage(parseInt(event.target.value)));
  };

  return (
    <div className="paginated-container">
      <div className="paginated-buttons">
        {pageNumbers.map((pageNumber) => (
          <button
            key={pageNumber}
            className={pageNumber === currentPage ? "paginated-btn-active" : ""}
            onClick={() => handlePageChange(pageNumber)}
          >
            {pageNumber}
          </button>
        ))}
      </div>
      <select
        className="pokemons-per-page"
        value={pokemonsPerPage}
        onChange={handlePokemonsPerPageChange}
      >
        <option value={5}>5 per page</option>
        <option value={10}>10 per page</option>
        <option value={25}>25 per page</option>
        <option value={50}>50 per page</option>
      </select>
    </div>
  );
}
