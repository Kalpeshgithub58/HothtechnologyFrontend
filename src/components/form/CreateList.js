import React, { useEffect, useState } from "react";
import { createList } from "../StaticData/staticfile";
import csc from "country-state-city";
import Axios from "axios";

const CreateList = ({ history }) => {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [countryName, setCountryName] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");

  const allCountry = csc.getAllCountries().map((country) => {
    return (
      <React.Fragment key={country.id}>
        <option value={country.id}>{country.name}</option>
      </React.Fragment>
    );
  });

  const allState = csc.getStatesOfCountry(countryName).map((state) => {
    return (
      <React.Fragment key={state.id}>
        <option value={state.id}>{state.name}</option>
      </React.Fragment>
    );
  });

  const allCity = csc.getCitiesOfState(state).map((city) => {
    return (
      <React.Fragment key={city.id}>
        <option value={city.name}>{city.name}</option>
      </React.Fragment>
    );
  });

  const onHandleSubmit = (e) => {
    e.preventDefault();
    const cName = csc.getAllCountries().find((c) => c.id === countryName).name;
    const sName = csc
      .getStatesOfCountry(countryName)
      .find((s) => s.id === state).name;

    Axios.post("http://localhost:8080/personApi/add", {
      name: name,
      mobile: mobile,
      country: cName,
      state: sName,
      city: city,
    }).then(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error.message);
      }
    );
    history.push("/list");
  };

  return (
    <>
      <center>
        <h1>{createList.label}</h1>
      </center>
      <form onSubmit={onHandleSubmit}>
        <div className="form-group">
          <label htmlFor="user">{createList.nameLabel}</label>
          <input
            type="text"
            id="user"
            placeholder="Enter Name"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="pass">{createList.mobileLabel}</label>
          <input
            type="number"
            placeholder="Mobile Number"
            className="form-control"
            id="pass"
            value={mobile}
            onChange={(e) => {
              if (e.target.value.length <= 10) {
                setMobile(e.target.value);
              }
            }}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="pass">{createList.countryLable}</label>
          <select
            className="form-control"
            value={countryName}
            onChange={(e) => {
              setCountryName(e.target.value);
            }}
          >
            {allCountry}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="pass">{createList.stateLabel}</label>
          <select
            className="form-control"
            value={state}
            onChange={(e) => setState(e.target.value)}
          >
            <option>select</option>
            {allState}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="pass">{createList.cityLabel}</label>
          <select
            className="form-control"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          >
            <option>select</option>
            {allCity}
          </select>
        </div>

        <button type="submit">Submit</button>
      </form>
    </>
  );
};
export default CreateList;
