import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { gameClear, searchVideogame, setPage } from "../actions";
import buttonImg from "../images/magnifying-glass.png";
export default function SearchBar() {
  const [game, setGame] = useState("");
  const dispatch = useDispatch();

  function handleSubmit(event) {
    event.preventDefault();
    if (game.length) {
      dispatch(gameClear());
      dispatch(searchVideogame(game));
      dispatch(setPage(1));
      setGame("");
    }
  }

  function handleChange(event) {
    event.preventDefault();
    setGame(() => {
      return event.target.value;
    });
  }

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder=" Search"
        onChange={(e) => handleChange(e)}
      />
      <img
        src={buttonImg}
        alt="search"
        onClick={(value) => {
          handleSubmit(value);
        }}
      />
    </div>
  );
}
