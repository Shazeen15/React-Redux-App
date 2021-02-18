import React, { useEffect } from "react";
import CityForm from "./component/CityForm";
import { connect } from "react-redux";

import { setBreweries } from "./utils/actions/breweriesAction";
function App(props) {
  const { fetching, breweries, error, setBreweries, city } = props;
  useEffect(() => {
    setBreweries(city);
  }, [setBreweries, city]);
  if (fetching) {
    return <h1>Getting data</h1>;
  }
  if (error) {
    return <h1>{error}</h1>;
  }
  return (
    <>
      <CityForm />
      {breweries.map((brew) => (
        <section key={brew.id}>
          <h1>{brew.name}</h1>
        </section>
      ))}
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    breweries: state.breweries.breweries,
    fetching: state.breweries.fetching,
    error: state.breweries.error,
    city: state.cityForm.city,
  };
};

export default connect(mapStateToProps, { setBreweries })(App);
