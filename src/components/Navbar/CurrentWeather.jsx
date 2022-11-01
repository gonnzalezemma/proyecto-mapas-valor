import React from "react";
import { useState, useEffect } from "react";
import { Cuerpo } from "./Cuerpo";
import { Loading } from "./Loading";

const CurrentWeather = () => {
  const [weather, setWeather] = useState(null);
  const loadInfo = async (city='Formosa') => {
    try {
      const req = await fetch(`http://api.weatherapi.com/v1/current.json?key=925887b5ae7b4a86ab2140333222810&q=${city}&aqi=yes&lang=es`);
      const resJson = await req.json();

      setTimeout(() => {
        setWeather(resJson);
      }, 1000);
    } catch (error) {
      return res.json(error);
    }
  };

  useEffect(() => {
    loadInfo();
  }, []);

  return (
    <>       
            {weather ? <Cuerpo weather={weather} /> : <Loading />}
    </>
  );
};

export default CurrentWeather;
