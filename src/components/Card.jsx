import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { delCard, getAllVideogame, modifyCardId } from "../actions";

export default function Card({ name, id, img, genres, createdInDb }) {
  const [hover, setHover] = useState(false);
  const dispatch = useDispatch();
  const toggleHover = () => {
    setHover(!hover);
  };
  let linkStyle = hover ? { transform: "scale(1.1)" } : {};
  const handleClick = (e, action) => {
    try {
      if (action === "delete") {
        e.preventDefault();
        dispatch(delCard(id));
        dispatch(getAllVideogame());
      }
      if (action === "modify") {
        dispatch(modifyCardId(id));
      }
    } catch (error) {}
  };

  const createdButtons = () => {
    if (createdInDb) {
      return (
        <>
          <Link to="/videgames/create">
            <button
              className="card-modify"
              onClick={(e) => handleClick(e, "modify")}
            >
              Modify
            </button>
          </Link>
          <button
            className="card-delete"
            onClick={(e) => handleClick(e, "delete")}
          >
            Del
          </button>
        </>
      );
    }
  };
  return (
    <Link
      style={linkStyle}
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
      to={`/videogames/${id}`}
    >
      <div className="card-container">
        {createdButtons()}
        <img src={img} alt="Card" />
        <p className="card-name">{name}</p>
        <p className="card-genre">{genres}</p>
      </div>
    </Link>
  );
}
