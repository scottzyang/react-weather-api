function WeatherDisplay({ temp, feelsLike, description, unit, low, high, city, cod, message}) {
  let unitSymbol;

  switch (unit) {
    case "imperial":
      unitSymbol = "F";
      break;
    case "metric":
      unitSymbol = "C";
      break;
    case "standard":
      unitSymbol = "K";
      break;
    default:
      unitSymbol = "";
  }

  if (cod !== 200) {
    return (
      <div>
        <small>{message}</small>
      </div>
    )
  }
  return(
    <div className="WeatherDisplay">
      <h1>Current Weather in {city}:</h1>
      <h2>{temp} {unitSymbol}</h2>
      <p>Expected Low: {low} {unitSymbol}</p>
      <p>Expected High: {high} {unitSymbol}</p>
      <small>Feels like: {feelsLike}</small>
      <p>Description: {description}</p>
    </div>
  )
}

export default WeatherDisplay;
