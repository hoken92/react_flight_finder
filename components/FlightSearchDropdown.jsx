function FlightSearchDropdown({ title, cities, name }) {
  return (
    <div>
      <h1>{title}</h1>
      <select name={name}>
        {cities.map((city, i) => {
          return (
            <option key={i} value={city.value}>
              {city.label}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default FlightSearchDropdown;
