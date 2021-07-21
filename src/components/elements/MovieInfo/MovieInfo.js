import React from "react";
import { IMAGE_BASE_URL, POSTER_SIZE, BACKDROP_SIZE } from "../../../config";
import FontAwesome from "react-fontawesome";
import MovieThumb from "../MovieThumb/MovieThumb";
import "./MovieInfo.css";
import { calcTime, convertMoney } from "../../../helpers";

const MovieInfo = (props) => {
  return (
    <div className="rmdb-movieinfo">
      <header id="movieTitle">
        <h1 className="movie_title" class="principalTitle">
          {props.movie.title}
        </h1>
      </header>

      <div className="rmdb-movieinfo-content">
        <div className="rmdb-movieinfo-thumb">
          <MovieThumb
            image={
              props.movie.poster_path
                ? `${IMAGE_BASE_URL}${POSTER_SIZE}${props.movie.poster_path}`
                : "./images/no_image.jpg"
            }
            clickable={false}
          />
        </div>
        <div className="row-movieinfo-text">
          <span>
            <h2 id="sinopseTitle">Sinopse</h2>
          </span>
          <p id="sinopse">{props.movie.overview}</p>
        </div>
        <div>
          <span>
            <h2 id="info">Informações</h2>
          </span>
        </div>
        <div class="row-infos-text">
          <div class="col1">
            <span className="rmdb-movieinfobar-info">
              <h2>Situação</h2>
              <p>{props.movie.status}</p>
            </span>
          </div>
          <div class="col2">
            <span className="rmdb-movieinfobar-info">
              <h2>Idioma</h2>
              <div className="rmdb-flexcontainer">
                {props.movie.spoken_languages.map((el, i) => {
                  return <p key={i}>{el.name}</p>;
                })}
              </div>
            </span>
          </div>

          <div class="col4">
            <span className="rmdb-movieinfobar-info">
              <h2>Duração:</h2>
              <p>{calcTime(props.time)}</p>
            </span>
          </div>
          <div class="col5">
            <span className="rmdb-movieinfobar-info">
              <h2>Orçamento:</h2>
              <p>{convertMoney(props.budget)}</p>
            </span>
          </div>
          <div class="col6">
            <span className="rmdb-movieinfobar-info">
              <h2>Receita:</h2>
              <p>{convertMoney(props.revenue)}</p>
            </span>
          </div>
        </div>
        <div class="row-genres">
          <p>
            {props.movie.genres.map((el, i) => {
              return <button key={i}>{el.name}</button>;
            })}
          </p>
          <div class="col3">
            <span className="rmdb-movieinfobar-info">
              <button class="rating-button">{props.movie.vote_average}</button>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieInfo;
