import React from "react";
import AmiiboChar from "./AmiiboChar";

export default function AmiiboCharacters(props) {
  return (
    <React.Fragment>
      {props.amiiboChars.map((char) => {
        return <AmiiboChar key={char.tail} char={char} />;
      })}
    </React.Fragment>
  );
}
