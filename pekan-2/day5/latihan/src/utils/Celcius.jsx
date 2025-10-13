function CelsiusInput({ celsius, onTemperatureChange }) {
  return (
    <fieldset>
      <legend>Masukkan suhu dalam Celsius:</legend>
      <input
        type="text"
        value={celsius}
        onChange={(e) => onTemperatureChange(e.target.value)}
      />
    </fieldset>
  );
}

export default CelsiusInput;