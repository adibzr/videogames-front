import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { clearGameDetails, getGameDetail } from "../actions";
import defaultImage from "../images/default_image.jpg";
import Loading from "./Loading";

export default function CardDetail() {
  let videogamesDetail = useSelector((state) => state.videogamesDetail);
  const dispatch = useDispatch();
  let param = useParams();

  useEffect(() => {
    dispatch(getGameDetail(param.idVideogame));
    return () => {
      dispatch(clearGameDetails());
    };
  }, [dispatch, param]);

  //concatenate genres into one string
  const reducedGenres = videogamesDetail.genres?.reduce((prev, curr, ind) => {
    return ind === 0 ? curr.name : prev + "/" + curr.name;
  }, "");

  //concatenate platformas into one string
  const reducedPlatform = videogamesDetail.createdInDb
    ? videogamesDetail.platforms?.reduce((prev, curr, ind) => {
        return ind === 0 ? curr : prev + "/" + curr;
      }, "")
    : videogamesDetail.platforms?.reduce((prev, curr, ind) => {
        return ind === 0
          ? curr.platform.name
          : prev + " - " + curr.platform.name;
      }, "");

  const history = useHistory();
  const img = videogamesDetail.img === "" ? defaultImage : videogamesDetail.img;

  if (videogamesDetail.name) {
    return (
      <>
        <button className="detail-back-btn" onClick={() => history.goBack()}>
          Back
        </button>
        <div className="detail-container">
          <div className="detail-col-1">
            <div className="detail-name">{videogamesDetail.name}</div>
            <img src={img} alt="Game detail" width="250px" hight="250px" />
            <div className="detail-genre">
              <p>Genre:</p>
              {reducedGenres}
            </div>
            <div className="detil-released">
              <p>Released:</p>
              {videogamesDetail.releaseDate}
            </div>
            <div className="detail-rating">
              <p>Rating:</p>
              {videogamesDetail.rating}
            </div>
            <div className="detail-platform">
              <p>Platforms:</p>
              {reducedPlatform}
            </div>
          </div>
          <p>{videogamesDetail.description}</p>
        </div>
      </>
    );
  } else {
    return <Loading />;
  }
}
