import React from "react";

function CityForm() {
  return (
    <>
      <form>
        <label htmlFor="city">City</label>
        <input type="text" name="city" id="city" />
        <button>Search</button>
      </form>
    </>
  );
}

export default CityForm;
