'use client'
import React, { useState, useEffect } from 'react'
import { searchCurrentTempGlasgow } from "./api/weather";
import { GlasgowWeather } from "./interfaces/GlasgowWeather";
import SearchBar from './components/SearchBar';

export default function Home() {
  const [glasgowWeather, setGlasgowWeather ] = useState<GlasgowWeather[]>(
    []
  );

  useEffect(() => {
    const fetchGlasgowWeather = async() => {
      const weatherData: glasgowWeather[] = await searchCurrentTempGlasgow();
      setGlasgowWeather([weatherData].flat());
    }
    fetchGlasgowWeather();
  }, []);
  
  // console.log(glasgowWeather);

  return (
    <div>
      <SearchBar />
    </div>

  );
}
