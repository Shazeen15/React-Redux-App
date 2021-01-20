import React from "react";

export default function AmiiboChar(props) {
  return (
    <React.Fragment>
      <div className="charCard">
        <img src={props.char.image} alt="" />
        <p>Name: {props.char.name}</p>
        <p>Character: {props.char.character}</p>
        <p>amiiboSeries: {props.char.amiiboSeries}</p>
        <p>gameSeries: {props.char.gameSeries}</p>
      </div>
    </React.Fragment>
  );
}
