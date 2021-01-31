import React from "react";
import "./TodaysWeather.css";

import Loading from "../Loading";

import Location from "./Location";
import TodaysTemperature from "./TodaysTemperature";
import TodaysWeatherDetails from "./TodaysWeatherDetails";

const TodaysWeather = (props) => {
  return props.loadingCurrent === false &&
    props.loadingForcast === false &&
    typeof props.currentWeather.main != "undefined" ? (
    <section className="c-TodaysWeather">
      <div>
        <Location currentWeather={props.currentWeather} />
        <div className="l-TodaysWeather">
          <TodaysTemperature currentWeather={props.currentWeather} />
          <TodaysWeatherDetails currentWeather={props.currentWeather} />
        </div>
      </div>
    </section>
  ) : (
    <Loading />
  );
};

export default TodaysWeather;