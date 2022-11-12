import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  filterGameByCreation,
  filterGameByGenre,
  orderCardBy,
  orderSort,
  setActivePage,
  setPage,
} from "../actions";
import arrowImg from "../images/noun-arrow-1558216.png";
import SearchBar from "./SearchBar";

export default function NavBar() {
  const dispatch = useDispatch();
  const [rotate, setRotate] = useState("");
  const handleFilterByGenre = (event) => {
    dispatch(filterGameByGenre(event.target.value));
    dispatch(setPage(1));
    dispatch(setActivePage(1));
  };

  const handleFilterByCreation = (event) => {
    dispatch(filterGameByCreation(event.target.value));
    dispatch(setPage(1));
    dispatch(setActivePage(1));
  };

  const handleCardOrder = (event) => {
    dispatch(orderCardBy(event.target.value));
    dispatch(setPage(1));
    dispatch(setActivePage(1));
  };
  const handleSort = () => {
    dispatch(orderSort());
    rotate === "rotate-up" ? setRotate("rotate-down") : setRotate("rotate-up");
    dispatch(setPage(1));
    dispatch(setActivePage(1));
  };
  const allGenres = useSelector((state) => state.genre);

  return (
    <div className="nav-bar">
      <SearchBar />
      <Link to="/videgames/create">
        <button className="create-game">Add Videogame</button>
      </Link>
      <nav className="select-container">
        <div className="custom-select">
          <select
            defaultValue="placeholder"
            onChange={(event) => handleFilterByGenre(event)}
          >
            <option value="placeholder" disabled hidden>
              Select Genre
            </option>
            {allGenres?.map((gen) => {
              return (
                <option key={gen.id + "option"} value={gen.name}>
                  {gen.name}
                </option>
              );
            })}
          </select>
          <span className="custom-arrow"></span>
        </div>
        <div className="custom-select">
          <select
            defaultValue="placeholder"
            onChange={(event) => handleFilterByCreation(event)}
          >
            <option value="placeholder" disabled hidden>
              Existing/Created
            </option>
            <option value={"created"}>Created</option>
            <option value={"fromApi"}>Existing</option>
          </select>
          <span className="custom-arrow"></span>
        </div>
        <div className="custom-select">
          <select
            defaultValue="placeholder"
            onChange={(event) => handleCardOrder(event)}
          >
            <option value="placeholder" disabled hidden>
              Order by
            </option>
            <option value={"A-Z"}>A-Z</option>
            <option value={"rating"}>Rating</option>
          </select>
          <span className="custom-arrow"></span>
        </div>
        <img
          src={arrowImg}
          alt="up down arrow"
          className={`custom-select asc-des-img ${rotate}`}
          onClick={() => handleSort()}
        />
      </nav>
    </div>
  );
}
