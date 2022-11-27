import React from "react";
import { useState, useEffect } from "react";
import { Cuerpo } from "./Cuerpo";
import { Loading } from "./Loading";

const CurrentWeather = () => {
  const [weather, setWeather] = useState(null);

  //
  const loadInfo = async (city='Formosa') => {
    try {
      //!
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': `${import.meta.env.VITE_KEYS}`,
          'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
      };
      
      const req = await fetch(`https://weatherapi-com.p.rapidapi.com/current.json?q=${city}`, options)
      const resJson = await req.json();

      setTimeout(() => {
        setWeather(resJson);
      }, 1000);
      //!
    } catch (error) {
      return res.json(error);
    }
  };
//
  useEffect(() => {
    loadInfo();
  }, []);

  return (
    <>      {
           weather? <Cuerpo weather={weather}/> : <div></div>
    }
    </>
  );
};

export default CurrentWeather;


