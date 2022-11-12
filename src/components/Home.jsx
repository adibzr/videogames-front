import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllGenre,
  getAllVideogame,
  setActivePage,
  setPage,
} from "../actions";
import defaultImage from "../images/default_image.jpg";
import Error from "../images/Error.gif";
import Card from "./Card";
import Loading from "./Loading";
import NavBar from "./NavBar";
import Pagination from "./Pagination";

export default function Home() {
  const dispatch = useDispatch();
  const allVideoGames = useSelector((state) => state.videogames);
  const loading = useSelector((state) => state.loading);
  const currentPage = useSelector((state) => state.page);
  const [gamePerPages] = useState(15);

  const indexLastGame = currentPage * gamePerPages;
  const indexFirstGame = indexLastGame - gamePerPages;

  useEffect(() => {
    if (!allVideoGames.length) {
      dispatch(getAllVideogame());
      dispatch(getAllGenre());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const genre = (gen) => {
    return gen?.reduce((prev, curr, ind) => {
      return ind === 0 ? curr.name : prev + " - " + curr.name;
    }, "");
  };

  function handleClick() {
    dispatch(getAllVideogame());
    dispatch(setPage(1));
    dispatch(setActivePage(1));
  }

  if (allVideoGames.status !== 404) {
    const currentGames = allVideoGames?.slice(indexFirstGame, indexLastGame);
    const cards = currentGames.map((game) => {
      const img = game.img === "" ? defaultImage : game.img;
      return (
        <Card
          key={game.id}
          id={game.id}
          name={game.name}
          img={img}
          genres={genre(game.genres)}
          createdInDb={game.createdInDb}
        />
      );
    });
    if (!loading) {
      return (
        <div className="home container">
          <button className="get-games-button" onClick={() => handleClick()}>
            Retrive all games
          </button>
          <NavBar />
          <Pagination
            videogames={allVideoGames.length}
            gamePerPages={gamePerPages}
            currentPage={currentPage}
          />
          <div className={"cards"}>{cards}</div>
        </div>
      );
    } else {
      return <Loading />;
    }
  } else {
    return (
      <div className="Error">
        <p>Videogame not found</p>
        <img src={Error} alt="Error" />

        <button onClick={() => window.location.reload(false)}>Try again</button>
      </div>
    );
  }
}
