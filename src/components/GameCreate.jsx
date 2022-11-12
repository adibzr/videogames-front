import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { getAllVideogame, modifyCard, postVideogame } from "../actions";
import FormInput from "./Form";

function validator(input) {
  let errors = {};
  if (!input.name) {
    errors.name = "Name required";
  } else if (!/^[a-zA-Z0-9_. -]*$/.test(input.name)) {
    errors.name = "Invalid name";
  }
  if (!input.description) {
    errors.description = "Description required";
  } else if (input.description.length > 700) {
    errors.description = "Description must be less than 700 characters";
  }
  if (input.rating && (input.rating < 1 || input.rating > 5)) {
    errors.rating = "Rate from 1 to 5";
  }

  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const myYear = input.releaseDate.split("-");
  const myDate = myYear.map((e) => {
    return parseInt(e);
  });

  if (
    myDate[0] > year ||
    myDate[1] > month ||
    (myDate[1] === month && myDate[2] > day)
  ) {
    errors.releaseDate = "Invalid date";
  }

  if (!input.platforms.length) {
    errors.platforms = "Must select at least 1";
  }

  return errors;
}

export default function GameCreate() {
  const allGenres = useSelector((state) => state.genre);
  const videogames = useSelector((state) => state.videogames);
  const idVideogame = useSelector((state) => state.modify);
  const dispatch = useDispatch();
  const history = useHistory();

  const [values, setValues] = useState({
    name: "",
    img: "",
    description: "",
    releaseDate: "",
    rating: "",
    platforms: [],
    genres: [],
  });

  const [errors, setErrors] = useState({});

  const platforms = [
    {
      id: "a",
      name: "pc",
      type: "checkbox",
      label: "PC",
    },
    {
      id: "b",
      name: "playstation",
      type: "checkbox",
      label: "PlayStation",
    },
    {
      id: "c",
      name: "xbox",
      type: "checkbox",
      label: "xBox",
    },
    {
      id: "d",
      name: "nintendo switch",
      type: "checkbox",
      label: "Nintendo Switch",
    },
  ];

  const inputs = [
    {
      id: 1,
      name: "name",
      type: "text",
      placeholder: "Name",
      label: "Name",
      errorMessage: errors.name,
    },
    {
      id: 2,
      name: "img",
      type: "text",
      placeholder: "Image",
      label: "Image",
    },
    {
      id: 3,
      name: "releaseDate",
      type: "date",
      placeholder: "Release Date",
      label: "Release Date",
      errorMessage: errors.releaseDate,
    },
    {
      id: 4,
      name: "description",
      type: "text",
      placeholder: "Description",
      label: "Description",
      errorMessage: errors.description,
    },
    {
      id: 5,
      name: "rating",
      type: "number",
      placeholder: "Rating",
      label: "Rating",
      errorMessage: errors.rating,
    },
    {
      id: 6,
      name: "platforms",
      type: "text",
      placeholder: "Platforms",
      label: "Platforms",
      errorMessage: errors.platforms,
    },
    {
      id: 7,
      name: "genres",
      type: "text",
      placeholder: "Genres",
      label: "Genres",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.keys(errors).length) {
      alert("Must compleate required fields");
    } else {
      if (!idVideogame.length) {
        const dup = videogames.filter((e) => {
          return e.name === values.name;
        });
        if (!dup.length) {
          dispatch(postVideogame(values));
          dispatch(getAllVideogame());
          alert("Videogame created");
        } else {
          alert("Videogame already exists");
        }
      } else {
        dispatch(modifyCard(idVideogame, values));
        dispatch(getAllVideogame());
      }
      history.push("/home");
    }
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    setErrors(validator({ ...values, [e.target.name]: e.target.value }));
  };

  const handleGenreChange = (e) => {
    !values.genres.includes(e.target.value) &&
      setValues({
        ...values,
        genres: [...values.genres, e.target.value],
      });
  };

  const handlePlatformChange = (e) => {
    if (e.target.checked) {
      setValues({
        ...values,
        platforms: [...values.platforms, e.target.value],
      });
      setErrors(
        validator({
          ...values,
          platforms: [...values.platforms, e.target.value],
        })
      );
    } else {
      const filtered = values.platforms.filter((element) => {
        return element !== e.target.value;
      });
      setValues({
        ...values,
        platforms: filtered,
      });
      setErrors(validator({ ...values, platforms: filtered }));
    }
  };

  const deleteGenre = (name) => {
    const filtered = values.genres.filter((el) => {
      return el !== name;
    });
    setValues({
      ...values,
      genres: filtered,
    });
  };

  return (
    <div className="form-continer">
      <form onSubmit={handleSubmit}>
        {!idVideogame.length ? (
          <h1>Create Videogame</h1>
        ) : (
          <h1>Modify Videogame</h1>
        )}
        {inputs.map((input) => {
          if (input.name === "genres") {
            return (
              <div className="custom-select genre-select">
                <select
                  name="genres"
                  key={"genres"}
                  onChange={(e) => handleGenreChange(e)}
                  defaultValue="placeholder"
                >
                  <option value="placeholder" disabled hidden>
                    Select Genre/s
                  </option>
                  {allGenres?.map((gen) => {
                    return (
                      <option key={gen.id} value={gen.name}>
                        {gen.name}
                      </option>
                    );
                  })}
                </select>
                <span className="custom-arrow"></span>
              </div>
            );
          } else if (input.name === "platforms") {
            return (
              <div key={"platforms"} style={{ position: "relative" }}>
                <span className="platfor-form-title">Select Platform/s</span>
                {platforms.map((plat, index) => {
                  return (
                    <div className="platform-select-conteiner">
                      <input
                        type="checkbox"
                        id={index}
                        name={plat.name}
                        value={plat.name}
                        onChange={(e) => handlePlatformChange(e)}
                      />
                      <label
                        htmlFor={index}
                        key={index}
                        className="platform-label"
                      >
                        {plat.name}
                      </label>
                    </div>
                  );
                })}
                <span className="form-error platform-error">
                  {input.errorMessage}
                </span>
              </div>
            );
          } else {
            return (
              <FormInput
                key={input.id}
                {...input}
                value={values[input.name]}
                onChange={onChange}
              />
            );
          }
        })}
        {!idVideogame.length ? (
          <button className="create-submit">Create</button>
        ) : (
          <button className="create-submit">Modify</button>
        )}
      </form>
      <div className="genre-selection-conteiner">
        {values.genres.map((gen) => {
          return (
            <div className="genre-selection" key={gen}>
              <button onClick={() => deleteGenre(gen)}>x</button>
              <p>{gen}</p>
            </div>
          );
        })}
      </div>
      <Link to="/home">
        <button className="create-back">Back</button>
      </Link>
    </div>
  );
}
