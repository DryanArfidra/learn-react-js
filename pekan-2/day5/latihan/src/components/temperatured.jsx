import { useState } from "react";
import CelsiusInput from "../utils/Celcius";
import FahrenheitInput from "../utils/fahrenheit";

function TemperatureConverter() {
  const [temperature, setTemperature] = useState('');

  const toCelsius = (fahrenheit) => {
    return (fahrenheit - 32) * 5 / 9;
  };

  const toFahrenheit = (celsius) => {
    return (celsius * 9 / 5) + 32;
  };

  const handleCelsiusChange = (value) => {
    setTemperature(value);
  };

  const handleFahrenheitChange = (value) => {
    setTemperature(toCelsius(value));
  };

  const celsius = temperature;
  const fahrenheit = temperature ? toFahrenheit(temperature) : '';

  return (
    <div>
        <h1>Konversi Suhu</h1>
        
        
        <CelsiusInput 
          celsius={celsius} 
          onTemperatureChange={handleCelsiusChange} 
        />
        
        <FahrenheitInput 
          fahrenheit={fahrenheit} 
          onTemperatureChange={handleFahrenheitChange} 
        />
        
    </div>
  );
}

export default TemperatureConverter;