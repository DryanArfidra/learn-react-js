function FahrenheitInput({ fahrenheit, onTemperatureChange }) {
  return (
    <fieldset>
      <legend>Masukkan suhu dalam Fahrenheit:</legend>
      <input
        type="text"
        value={fahrenheit}
        onChange={(e) => onTemperatureChange(e.target.value)}
      />
    </fieldset>
  );
}

export default FahrenheitInput;