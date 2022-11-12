import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActivePage, setPage } from "../actions";

export default function Pagination({ videogames, gamePerPages, currentPage }) {
  const active = useSelector((state) => state.active);
  const nums = [];
  const totalPages = Math.ceil(videogames / gamePerPages);
  const dispatch = useDispatch();
  for (let i = 1; i <= totalPages; i++) {
    nums.push(i);
  }

  function handleActive(id = 1) {
    dispatch(setActivePage(id));
  }
  function handleNext() {
    if (currentPage < totalPages) {
      dispatch(setPage(currentPage + 1));
      dispatch(setActivePage(currentPage + 1));
    }
  }
  function handlePrev() {
    if (currentPage > 1) {
      dispatch(setPage(currentPage - 1));
      dispatch(setActivePage(currentPage - 1));
    }
  }

  function handleClick(number) {
    dispatch(setPage(number));
  }

  return (
    <nav className="pg-conteiner">
      <button onClick={() => handlePrev()}>prev</button>
      {nums.map((number) => {
        return (
          <button
            key={number}
            className={active === number ? "active" : ""}
            onClick={() => {
              handleClick(number);
              handleActive(number);
            }}
          >
            {number}
          </button>
        );
      })}
      <button onClick={() => handleNext()}>next</button>
    </nav>
  );
}
