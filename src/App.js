import React, { useEffect } from "react";
import { connect } from "react-redux";
import "./App.css";
import AmiiboCharacters from "./components/AmiiboCharacters";
import { getAmiiboChar } from "./actions";
import amiiboLogo from "./img/amiiboLogo.png";

function App(props) {
  useEffect(() => {
    props.getAmiiboChar();
  }, []);

  return (
    <React.Fragment>
      <div className="logo">
        <img src={amiiboLogo} alt="amiibo logo" />
      </div>
      <AmiiboCharacters amiiboChars={props.amiiboChars} />
    </React.Fragment>
  );
}

const mapStateToProps = (state) => {
  return {
    amiiboChars: state.amiiboChars,
    error: state.error,
  };
};

export default connect(mapStateToProps, { getAmiiboChar })(App);
